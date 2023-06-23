const saluteTextContainer = document.querySelector(".saluteTextContainer");
const saluteTextContainer2 = document.querySelector(".saluteTextContainer2");
const ourName = document.querySelector(".name");
const jobTitles = document.querySelectorAll(".jobTitle");
const projectTitle = document.querySelector(".projectTitle");
const phone = document.querySelector(".phone");
const laptop = document.querySelector(".laptop");

const inputs = document.querySelectorAll(".input");
const discordBtn = document.querySelector(".discord-btn"); // Add dot before "discord-btn"

window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;
  saluteTextContainer.style.transform = `translateY(${offsetY * 0.3}px)`;
  saluteTextContainer2.style.transform = `translate(${offsetY * 0.2}px, ${offsetY * 0.3}px)`;
  ourName.style.transform = `translateX(${offsetY * 0.2}px)`;
  //add unique background transform for a unique background in jobtitlecontainer//
  jobTitles[0].style.transform = `translateX(calc(200vh - ${offsetY * 0.9}px))`;
  jobTitles[1].style.transform = `translateX(calc(-300vh + ${offsetY}px))`;
  projectTitle.style.transform = `translateY(calc(400vh - ${offsetY}px))`;
  phone.style.transform = `translateX(calc(500vh - ${offsetY}px))`;
  laptop.style.transform = `translateX(calc(600vh - ${offsetY}px))`;
});

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
  });

  $('.navbar .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
  });

// toggle menu/navbar script
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

  $('a.menu-btn-circular').click(function() {
    var target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);
      return false;
    }
  });
  $('.footer-links a').click(function(){
    $('html').css("scrollBehavior","smooth");
});
});
