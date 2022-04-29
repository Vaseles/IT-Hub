//header
const HeaderOpen = document.querySelector("#headerOpen");
const HeaderClose = document.querySelector("#headerClose");
const menu = document.querySelector(".menu");

HeaderOpen.addEventListener("click", function() {
    menu.style.bottom = "0";
});
HeaderClose.addEventListener("click", function() {
    menu.style.bottom = "100%";
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

const AllMenuLi = [colledgeAbout, colledgeNotcorruptin]

//function
//for error
function close() {
    for (let i of AllMenuParam) {
        i.style.display = "none";
    }
}
function del() {
    for (let i of AllMenuLi) {
        i.classList.remove("norm")
    }
}

//go
colledgeAbout.addEventListener("click", function() {
    close();
    del();
    
    colledgeParamsAbout.style.display = "flex";
    menu.style.backgroundImage = `url("https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`;
    colledgeAbout.classList.add("norm");
});
colledgeNotcorruptin.addEventListener("click", function() {
    close()
    del()

    colledgeParamsnNotcorruptin.style.display = "flex";
    menu.style.backgroundImage = `url("https://images.pexels.com/photos/1806900/pexels-photo-1806900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`;
    colledgeNotcorruptin.classList.add("norm");
})