


const typed = new Typed(".typed", {
    strings: ["", "...", "<p id='m1'>Hola mundo</p>", "<p id='m2'>Soy Ruben Dario - ElRufo</p>", "<p id='m3'>BackEnd Developer</p>", "<p id='m4'>FrontEnd Developer</p>"],
    cursorChar: "",
    typeSpeed: 70,
    backSpeed: 75,
    loop: true,
    loopCount: false,
});
const typed1 = new Typed(".typed1",{
    strings:["","."," .."," ..."],
    cursorChar: `/`,
    typeSpeed: 70,
    backSpeed: 75,
    loop: true,
    loopCount: false,
})

window.addEventListener('scroll', function () {
    let animated = this.document.getElementById("animated");
    let positionObj1 = animated.getBoundingClientRect().top;
    console.log(positionObj1);

    
})