function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

const button = document.querySelector("#checkout-button")

button.addEventListener("click", () => {
    console.log("Checkout")
})