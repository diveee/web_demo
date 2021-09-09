
//snake dot
let snakedot = [[340,240],[350,240]];
let whilehead = [[340,240]];
// let bodydot = [];
let fooddot = [[50,50]];
let keyCodes = 'ArrowLeft';


function startmove(){

    if(snakedot[0][0]>0 && snakedot[0][0]<690 && snakedot[0][1]>0 && snakedot[0][1]<490) {
        //把头坐标放在暂存头
        switch(keyCodes) {
            case 'ArrowUp' ://up
                whilehead.unshift([snakedot[0][0],snakedot[0][1]-10]);
                break;
            case 'ArrowRight' ://right
                whilehead.unshift([snakedot[0][0]+10,snakedot[0][1]]);
                break;
            case 'ArrowDown' ://down
                whilehead.unshift([snakedot[0][0],snakedot[0][1]+10]);
                break;
            case 'ArrowLeft'://left
                whilehead.unshift([snakedot[0][0]-10,snakedot[0][1]]);
                break;
            default:
                console.log("nononono");
                break;
        }
        // 修改snakedot数组
        // 新头点插入 数组头，删除尾部
        if(fooddot.length !=0) { 
            eat();
        }else {
            snakedot.unshift(whilehead[0]);
            delfoot();
        }
        //新增头在画布上
        sdot.fillStyle="black";
        sdot.fillRect(snakedot[0][0],snakedot[0][1],10,10);

        myVar = setTimeout("startmove()",speed_level);
    } else {
        console.log("game over");
        overdot.fillStyle = "DodgerBlue";
        overdot.font = "bold 100px Arial";
        overdot.fillText("Game Over",100,160);
/*
        for (let i in overdots) {
            overdot.fillRect(overdots[i][0],overdots[i][1],10,10);
        }
*/

    }
}
// 判断吃食物
function eat() { // 函数可能可以 if（whilehead in fooddot）  这个in可以构造一个函数代替
    for (let i in fooddot) {

        if (whilehead[0][0]==fooddot[i][0] && whilehead[0][1]==fooddot[i][1]) {
            
            snakedot.unshift(fooddot[i])

            // 食物吃掉就在食物数组中去掉
            fooddot.splice(i, 1);
            newfood();
        }else {
            snakedot.unshift(whilehead[0]);
            // console.log(snakedot[0]+" + " +whilehead[0] )
            delfoot();
        }
    }
}
// 删除尾点
function delfoot() {
    //删除尾部像素
    sdot.clearRect(snakedot[snakedot.length-1][0],snakedot[snakedot.length-1][1],10,10);
    //补充删除后的空白
    sdot.fillStyle="lightgreen";
    sdot.fillRect(snakedot[snakedot.length-1][0],snakedot[snakedot.length-1][1],10,10);
    
    snakedot.pop();
}

// 随机生成food
function newfood() {
    if (fooddot.length == 0) {
        
        fooddot.unshift([(Math.floor(Math.random()*69)+1)*10 , (Math.floor(Math.random() * 49) + 1)*10])
        fdot.fillStyle = "red";
        fdot.fillRect(fooddot[0][0],fooddot[0][1],10,10);

    }
}

