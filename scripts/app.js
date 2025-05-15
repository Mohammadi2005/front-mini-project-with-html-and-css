var icon = document.querySelector(".nav-icon");
var menu = document.querySelector(".menu");

icon.addEventListener("click", () => {
    // menu.setAttribute("Style","left:0px;");
    if(menu.style.left === "0px")
        menu.setAttribute("Style","left:-176px;");
    else{
        menu.setAttribute("Style","left:0px;");
    }
});
