const body = $("body");
const menuBtn = $("#menu-btn");
const menu = $("#menu");
const menuBackground = $("#menu-bg");
const menuNav = $("#menu-nav");
const menuAniPart = document.getElementById("menu-ani-part");


menuBtn.click(async function(){
    menuBtn.html((menuBtn.html() == "close" ? "menu" : "close"));
    body.toggleClass("overflow-y-hidden");
    menuBackground.toggleClass("opacity-0");
    menuNav.toggleClass("-right-40 right-0 opacity-0");
    for(const child of menuAniPart.children){
        await new Promise(r => setTimeout(r, 50));
        $(child).toggleClass("ml-7 ml-0 opacity-0");
    }
})

$(window).resize(function() {
    if ($(window).width() > 960) {
        menuNav.removeClass("right-0").addClass("-right-40 opacity-0");
        menuBackground.addClass("opacity-0");
        body.removeClass("overflow-y-hidden");
        menuBtn.html("menu");
        $(menuAniPart).children().removeClass("ml-0").addClass("ml-7 opacity-0");
    }
});