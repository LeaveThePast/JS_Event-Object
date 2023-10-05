const dropdownElement = document.querySelector(".dropdown");
const dropdownLinks = document.querySelectorAll(".dropdown__link");

const makeActive = () => {
    dropdownElement
        .querySelector(".dropdown__list")
        .classList.toggle("dropdown__list_active");
};

const changeValue = (event) => {
    const selectedValue = event.target;
    dropdownElement.querySelector(".dropdown__value").textContent =
        selectedValue.textContent;
    dropdownElement
        .querySelector(".dropdown__list")
        .classList.remove("dropdown__list_active");
    event.preventDefault(); // чтобы предотвратить переход по ссылке
};

dropdownElement.addEventListener("click", makeActive);
dropdownLinks.forEach((link) => {
    link.addEventListener("click", changeValue);
});