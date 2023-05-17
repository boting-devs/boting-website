const saluteTextContainer = document.querySelector(".saluteTextContainer")
const saluteTextContainer2 = document.querySelector(".saluteTextContainer2")
const ourName = document.querySelector(".name")
const jobTitles = document.querySelectorAll(".jobTitle")
const projectTitle = document.querySelector(".projectTitle")
const phone = document.querySelector(".phone")
const laptop = document.querySelector(".laptop")

window.addEventListener("scroll",()=>{
    let offsetY = window.scrollY
    saluteTextContainer.style.transform =`translateY(${offsetY * 0.3}px)`
    saluteTextContainer2.style.transform = `translate(${offsetY*0.2}px, ${offsetY*0.3}px)`
    ourName.style.transform = `translateX(${offsetY *0.2}px)`
    //add unique background transform for a unique background in jobtitlecontainer//
    jobTitles[0].style.transform = `translateX(calc(200vh - ${offsetY*0.9}px))`
    jobTitles[1].style.transform = `translateX(calc(-300vh + ${offsetY}px))`
    projectTitle.style.transform = `translateY(calc(400vh - ${offsetY}px))`
    phone.style.transform = `translateX(calc(500vh - ${offsetY}px))`
    laptop.style.transform = `translateX(calc(600vh - ${offsetY}px))`
})


