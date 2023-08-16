// states: D, CL, LA, C, CP
const controlPedal = document.querySelector(".pedal")
const calcador = document.querySelector(".calcador")
const img = document.querySelector("img")
const video = document.querySelector("video")
const toggle = document.querySelector(".toggle")
const fsm = document.querySelector(".fsm")

let state = "D"

toggle.addEventListener("click", () => {
    if (state === "D") {
        // l
        state = "CL"
        fsm.src = "img/fsm_CL.jpeg";
        img.src = "img/cl.jpg";
        toggle.src = "img/toggle-on-solid.svg";
    } else {
        // d
        state = "D"
        fsm.src = "img/fsm_D.jpeg";
        img.src = "img/off.jpg";
        toggle.src = "img/toggle-off-solid.svg";
    }
})

controlPedal.addEventListener("mousedown", () => {
    if (state === "LA") {
        // ap
        state = "C"
        fsm.src = "img/fsm_C.jpeg";
        img.classList.add("hidden");
        video.classList.remove("hidden");
    }
})

controlPedal.addEventListener("mouseup", () => {
    if (state === "C") {
        // pp
        state = "CP"
        fsm.src = "img/fsm_CP.jpeg";
        img.classList.remove("hidden");
        video.classList.add("hidden");
        img.src = "img/done.jpg";
    }
})

calcador.addEventListener("click", () => {
    if (state === "CL") {
        // bc
        state = "LA"
        fsm.src = "img/fsm_LA.jpeg";
        fsm.src = "img/fsm_LA.jpeg";
        img.src = "img/la.jpg";
    }
    
    else if (state === "LA" || state === "CP") {
        // lc
        state = "CL"
        fsm.src = "img/fsm_CL.jpeg";
        img.src = "img/cl.jpg";
    }
})