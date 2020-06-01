document.querySelector(".img").addEventListener("mouseover",()=>{
    document.querySelector(".container").classList.toggle("change");
})

document.querySelector('.menu').addEventListener('click',()=>{
    document.querySelector('.navigation').classList.toggle("changes");
    document.querySelector('.about').classList.remove("about-display");
    document.querySelector('.about-me').classList.remove("about-me-display");
    document.querySelector('.qualification').classList.remove("qualification-display");
    document.querySelector('.projects').classList.remove("projects-display");
    document.querySelector('.contact').classList.remove("contact-display");
    
});

document.querySelector('.click-1').addEventListener('click',()=>{
    document.querySelector('.contact').classList.remove("contact-display");
    document.querySelector('.qualification').classList.remove("qualification-display");
    document.querySelector('.projects').classList.remove("projects-display");
    document.querySelector('.about').classList.add("about-display");
    document.querySelector('.about-me').classList.add("about-me-display");

});
document.querySelector('.click-2').addEventListener('click',()=>{
    document.querySelector('.about-me').classList.remove("about-me-display");
    document.querySelector('.contact').classList.remove("contact-display");
    document.querySelector('.projects').classList.remove("projects-display");
    document.querySelector('.about').classList.add("about-display");
    document.querySelector('.qualification').classList.add("qualification-display");   
});
document.querySelector('.click-3').addEventListener('click',()=>{
    document.querySelector('.about-me').classList.remove("about-me-display");
    document.querySelector('.qualification').classList.remove("qualification-display");
    document.querySelector('.contact').classList.remove("contact-display");
    document.querySelector('.about').classList.add("about-display");
    document.querySelector('.projects').classList.add("projects-display");
    
});
document.querySelector('.click-4').addEventListener('click',()=>{
    document.querySelector('.about-me').classList.remove("about-me-display");
    document.querySelector('.qualification').classList.remove("qualification-display");
    document.querySelector('.projects').classList.remove("projects-display");
    document.querySelector('.about').classList.add("about-display");
    document.querySelector('.contact').classList.add("contact-display");
    
});
