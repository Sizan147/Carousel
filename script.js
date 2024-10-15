// 1st step ----------------------------------------------

// variables

let prevButton = document.querySelector(".prev-button");
let nextButton = document.querySelector(".next-button");
let slides = document.querySelectorAll(".slide");
let constant = 0;
let lengthOfSlides = slides.length;

// functions

const goingRight = ()=>{
    slides.forEach((individualSlide)=>{
        individualSlide.style.transform = `translateX(-${constant*100}%)`;
    });
}
const moveToRight = ()=>{
    constant<lengthOfSlides-1?(constant++,goingRight()):(constant = 0,goingRight());
    iconsAnim();
}
const moveToLeft = ()=>{
    constant>0?(constant--,goingRight()):(constant = lengthOfSlides-1,goingRight());
    iconsAnim();
}

// Buttons and events

prevButton.addEventListener("click", moveToLeft);
nextButton.addEventListener("click", moveToRight);

//2nd step ----------------------------------------------

let icons = document.querySelectorAll(".icon");

const iconsAnim = ()=>{
    icons.forEach((individualIcon, index)=>{
        if(constant==index){
            individualIcon.style.width = `40px`
        }
        else{
            individualIcon.style.width = ``;
        }
    })
}

iconsAnim();

// 3rd step ----------------------------------------------

let divBubbles = document.querySelector('.bubbles');

const changeIcon = (e)=>{
    if(e.target.classList.contains("icon")){
        e.target.style.width = `40px`;
    }
    icons.forEach((notChosenIcon)=>{
        if(notChosenIcon!=e.target){
            notChosenIcon.style.width = ``;
        }
    })
}

const targetPick = (e)=>{
    if (e.target === divBubbles) {
        return;
    }
    changeIcon(e);
    let secondConstant = Array.from(e.target.parentElement.children).indexOf(e.target);
    constant = secondConstant;
    goingRight();
    constant++
    console.log(constant)
}

divBubbles.addEventListener("click", targetPick);
