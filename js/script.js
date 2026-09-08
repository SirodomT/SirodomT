console.log("Sirodom T. Portfolio");
let name = "Sirodom T.";
console.log(name);
const words = [
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
];
let wordIndex = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");
function typeWord(){
    if(charIndex< words[wordIndex].length){
        typingText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWord,100);

    }else{
        setTimeout(deleteWord,1500);
    }
}
function deleteWord(){
    if(charIndex > 0){
        typingText.textContent =
        words[wordIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(deleteWord,50);
    }else{
        wordIndex++;
        if(wordIndex >= words.length){
            wordIndex = 0;
        }
        setTimeout(typeWord,300);
    }
}
typeWord();
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach((item)=>{

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
/* ===========================================
   STARFIELD ENGINE V3
=========================================== */

const starsContainer = document.querySelector(".stars");

// ลดจำนวนดาวบนมือถือ
const STAR_COUNT = window.innerWidth <= 768 ? 60 : 180;

for (let i = 0; i < STAR_COUNT; i++) {

    const star = document.createElement("span");
    star.className = "star";

    const size = Math.random() * 2.8 + 0.8;

    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.opacity = 0.4 + Math.random() * 0.6;

    // มือถือกระพริบช้าลง
    star.style.animationDuration =
        (window.innerWidth <= 768 ? 6 : 2 + Math.random() * 6) + "s";

    star.style.animationDelay =
        (Math.random() * 8) + "s";

    if (Math.random() > 0.92) {
        star.style.background =
            "radial-gradient(circle,#bfdbfe,#60a5fa 70%,transparent)";
    } else {
        star.style.background =
            "radial-gradient(circle,#fff,#dbeafe 70%,transparent)";
    }

    // ดาวใหญ่เฉพาะ Desktop
    if (window.innerWidth > 768 && Math.random() > 0.97) {

        star.style.width = "6px";
        star.style.height = "6px";

        star.style.boxShadow =
            "0 0 18px #fff,0 0 30px #60a5fa";
    }

    starsContainer.appendChild(star);

}
/* ===== Theme Toggle ===== */

const themeBtn = document.getElementById("theme-toggle");

const icon = themeBtn.querySelector("i");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        icon.className="fa-solid fa-sun";

    }else{

        icon.className="fa-solid fa-moon";

    }

});
/* ===== Active Navbar ===== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
