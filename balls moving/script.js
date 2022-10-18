

const Canvas1 = document.getElementById("canvas1");
const ctx = Canvas1.getContext("2d");
const particlesArray = [];


/*Canvas1. width = window.innerwiWdth;
Canvas1.height = window.innerHeight;
window.addEventListener('resize', function()
{
    Canvas1. width = window.innerwiWdth;
Canvas1.height = window.innerHeight;
});
const mouse = { 
    x:undefined,
    y:undefined,
}
Canvas1.addEventListener('click',function(event){
    mouse.x = this.x;
    mouse.y = this.y;
    ;
});*/






animate();
class particle{
    constructor(){
        this.x= Math.random()*Canvas1.width;
        this.y= Math.random()*Canvas1.height;
        this.size = Math.random()*5+1;
        this.speedX = Math.random()*3-1.5;
        this.speedY = Math.random()*3-1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(){
        ctx.fillStyle ="red";
        ctx.beginPath();
       ctx.arc(this.x, this.y, this.size,0, 2 * Math.PI);
       ctx.fill();
       ctx.stroke();
    }


   
}
function init(){
    for (let i=0; i< 100; i++){
        particlesArray.push(new particle());
    }
}
init();

function handleparticles(){
    for (let i=0; i<particlesArray.length;i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}
function animate(){
    ctx.clearRect(0,0,Canvas1.width,Canvas1.height);
    handleparticles();
    requestAnimationFrame(animate);
}