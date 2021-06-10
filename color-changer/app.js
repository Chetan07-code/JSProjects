const btn = document.querySelector('.btn');
let colors=['red','yellow','pink','green','blue']

btn.addEventListener('click',function () {
    document.body.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)] 
})