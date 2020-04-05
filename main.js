

const buttonRight = document.getElementById('right')
buttonRight.onclick = function () {
    const btnRight = document.getElementById("block")
    if (btnRight.style.left >= (390 + "px") && (btnRight.style.left != 30 + "px") && (btnRight.style.left != 60 + "px") && (btnRight.style.left != 90 + "px")) {
       // console.log(btnRight.style.left);
        btnRight.style.left = -30 + "px"
    }
    btnRight.style.left = (parseInt(btnRight.style.left) || 0) + 30+ "px"
    console.log(btnRight.style.left);
   
    
}


const buttonLeft = document.getElementById('left')
buttonLeft.onclick = function () {
    const btnLeft = document.getElementById("block")
    if (btnLeft.style.left <= (20 + "px") && btnLeft.style.left != (200 + "px") && btnLeft.style.left != (170 + "px") && btnLeft.style.left != (140 + "px") && btnLeft.style.left != (110 + "px")) {
        console.log(btnLeft.style.left);
        btnLeft.style.left = 440 + "px"
    }
        btnLeft.style.left = (parseInt(btnLeft.style.left) || 0) - 30 + "px"
        //console.log(btnLeft.style.left);

}

const buttonDown = document.getElementById('down')
buttonDown.onclick = function () {
    const btnDown = document.getElementById("block")
    if (btnDown.style.top >= (330 + "px") && btnDown.style.top != (60 + "px") && btnDown.style.top != (90 + "px")) {
        btnDown.style.top = 0 +"px"
    }
    btnDown.style.top = (parseInt(btnDown.style.top) || 0) + 30 + "px"
}
const buttonUp = document.getElementById('up')
buttonUp.onclick = function () {
    const btnUp = document.getElementById("block")
    if ((btnUp.style.top <= 20 + "px") && btnUp.style.top != (200 + "px") && btnUp.style.top != (170 + "px") && btnUp.style.top != (140 + "px") && btnUp.style.top != (110 + "px")) {
        btnUp.style.top = 380 +"px"
    }
    btnUp.style.top = (parseInt(btnUp.style.top) || 0) - 30 + "px"
}