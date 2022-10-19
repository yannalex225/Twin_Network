const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = windows.innerHeight;

let particlesArray;

let mouse = {
    x:null,
    y:null,
    radius: (canvas.height/80)*(canvas.width/80)
}

windows.addEventListener('mousemove',
    function(event){
        mouse
    }
)