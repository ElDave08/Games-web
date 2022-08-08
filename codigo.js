const btn = document.querySelector('.menu-btn');

btn.addEventListener("click", ()=>{
	document.querySelector('.nav-menu').classList.toggle('show')
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news', {delay: 250});
ScrollReveal().reveal('.banner1', {delay: 250});
ScrollReveal().reveal('.banner2', {delay: 250});