//canvas
var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
cxt.fillStyle="lightgreen";
cxt.fillRect(0,0,700,500);

var sdot=c.getContext("2d");
sdot.fillStyle="black";
shead = sdot.fillRect(340,240,10,10);
sfoot = sdot.fillRect(350,240,10,10);

var fdot = c.getContext("2d");
fdot.fillStyle = "red";
fdot.fillRect(50,50,10,10);

var overdot = c.getContext("2d");

var w;
var speed_level = 250;

function startWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("sm1worker.js");
            startmove();
        }
/*
        w.onmessage = function(event) {
            document.getElementById("result").innerHTML = event.data;
        };
*/ 
    } else {
        document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
    }

    document.getElementById("sbd").onkeyup = function(e) {
        // 按键 keyCode弃用，改用key
        switch(e.key) {
            case 'ArrowLeft':
                keyCodes = 'ArrowLeft';
                break;
            case 'ArrowUp':
                keyCodes = 'ArrowUp';
                break;
            case 'ArrowRight':
                keyCodes = 'ArrowRight';
                break;
            case 'ArrowDown':
                keyCodes = 'ArrowDown';
                break;
        }
        //console.log("keyuop   "+keyCodes+""+e.key);
    };
}

function stopWorker() { 
    w.terminate();
    w = undefined;
    clearTimeout(myVar);
    //console.log("stop");
    document.getElementById("startbtn").innerHTML= "continue";

}

let sl = document.getElementsByClassName("speed_li");
for (let i in sl) {
    sl[i].addEventListener("click",function() { 
        //console.log(this.innerHTML)
        switch (this.innerHTML) {
            case 'normal':
                speed_level = 250;
                break;
            case 'fast':
                speed_level = 150;
                break;
            case 'faster':
                speed_level = 70;
                break;
        }
    });
};


function cnvs_getCoordinates(e) {
    x=e.clientX;
    y=e.clientY;
    document.getElementById("xycoordinates").innerHTML="Coordinates: (" + x + "," + y + ")";
}
 
function cnvs_clearCoordinates() {
    document.getElementById("xycoordinates").innerHTML="";
}