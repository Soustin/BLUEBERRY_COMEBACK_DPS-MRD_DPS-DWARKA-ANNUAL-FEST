const cart = document.querySelector('.cart')
const main = document.querySelector('main')
const iconcart = document.querySelector('.cart-icon');
const removecart = document.querySelector('.remove-cart')

button.addEventListener('click', () => {

    cart.classList.remove('cart-active');
    iconcart.classList.remove('icon-active');
})
Iconcart.addEventListener('click', () => {
    cart.classList.toggle('cart-active');
    iconcart.classList.toggle('icon-active')
})
main.addEventListener('click', () => {
    cart.classList.remove('cart-active');
    iconcart.classList.remove('icon-active');
})
removecart.addEventListener('click', () => {
    cart.classList.remove('cart-active');
    iconcart.classList.remove('icon-active');
})
