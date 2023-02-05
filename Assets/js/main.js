const overlay = document.querySelector(".overlay");

const openMenu = function(openBtnId, menuId) {
    const openBtn = document.getElementById(openBtnId),
    menu = document.getElementById(menuId);

    if (openBtn && menu) {
        openBtn.addEventListener("click", () => {
            menu.classList.add("open");
            overlay.classList.add("open");
        })
    }
}
openMenu("menu-open", "menu");

const closeMenu = function(closeBtnId, menuId) {
    const closeBtn = document.getElementById(closeBtnId),
    menu = document.getElementById(menuId);

    if (closeBtn && menu) {
        closeBtn.addEventListener("click", () => {
            menu.classList.remove("open");
            overlay.classList.remove("open");
        })
    }
}
closeMenu("menu-close", "menu")