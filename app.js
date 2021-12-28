let p= document.querySelectorAll(".panel");
function magic(){

    this.classList.toggle("open");
    this.classList.toggle("active");
}

p.forEach(panel=>panel.addEventListener("click",magic));