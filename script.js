function getCart(){return JSON.parse(localStorage.getItem('eclatCart')||'[]')}
function saveCart(cart){localStorage.setItem('eclatCart',JSON.stringify(cart));updateCount()}
function addToCart(name,price){const cart=getCart();const item=cart.find(x=>x.name===name);if(item)item.qty++;else cart.push({name,price,qty:1});saveCart(cart);alert(name+' a été ajouté au panier.')}
function updateCount(){const count=getCart().reduce((s,x)=>s+x.qty,0);document.querySelectorAll('#cart-count').forEach(e=>e.textContent=count)}
function renderCart(){const box=document.getElementById('cart-items');if(!box)return;const cart=getCart();if(!cart.length){box.innerHTML='<p>Votre panier est vide.</p>';document.getElementById('cart-total').textContent='';return}box.innerHTML=cart.map((x,i)=>`<div class="cart-row"><div><strong>${x.name}</strong><br><small>${x.price.toLocaleString('fr-FR')} FCFA × ${x.qty}</small></div><div><strong>${(x.price*x.qty).toLocaleString('fr-FR')} FCFA</strong> <button class="remove" onclick="removeItem(${i})">Supprimer</button></div></div>`).join('');const total=cart.reduce((s,x)=>s+x.price*x.qty,0);document.getElementById('cart-total').textContent='Total : '+total.toLocaleString('fr-FR')+' FCFA'}
function removeItem(i){const cart=getCart();cart.splice(i,1);saveCart(cart);renderCart()}
function sendContact(e){e.preventDefault();alert('Merci ! Votre message est prêt à être envoyé. Connectez ce formulaire à votre service e-mail ou à votre serveur.');e.target.reset()}
updateCount();renderCart();
