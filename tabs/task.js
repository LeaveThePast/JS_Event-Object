const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab__content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        // Убираем активный класс со всех вкладок и их содержимого
        tabs.forEach((t) => t.classList.remove("tab_active"));
        tabContents.forEach((content) =>
            content.classList.remove("tab__content_active")
        );

        // Добавляем активный класс к выбранной вкладке и ее содержимому
        tab.classList.add("tab_active");
        tabContents[index].classList.add("tab__content_active");
    });
});