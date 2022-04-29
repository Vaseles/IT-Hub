//header
const HeaderOpen = document.querySelector("#headerOpen");
const HeaderClose = document.querySelector("#headerClose");
const menu = document.querySelector(".menu");

HeaderOpen.addEventListener("click", function() {
    menu.style.bottom = "0";
});
HeaderClose.addEventListener("click", function() {
    menu.style.bottom = "100%";
    menu.style.backgroundImage = `none`;
    clear();
});



//staties
//so, why не "for" and one class?! Becose, Я хочу чтобы вы меньше парились
//import
const AllMenuParam = document.querySelectorAll(".menu__parametr");

const colledgeAbout = document.querySelector(".colledge--about");
const colledgeParamsAbout = document.querySelector(".colledge-params--about");
const colledgeParamsnNotcorruptin = document.querySelector(".colledge-params--notcorruptin");
const colledgeNotcorruptin = document.querySelector(".colledge--notcorruptin")

//function
//for error
function close() {
    for (let i of AllMenuParam) {
        i.style.display = "none";
    }
}

//go
colledgeAbout.addEventListener("click", function() {
    close();
    colledgeParamsAbout.style.display = "flex";
    menu.style.backgroundImage = `url("https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`;
});
colledgeNotcorruptin.addEventListener("click", function() {
    close();
    colledgeParamsnNotcorruptin.style.display = "flex";
    menu.style.backgroundImage = `url("https://images.pexels.com/photos/1806900/pexels-photo-1806900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`;
})