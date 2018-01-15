
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
var block = document.getElementsByClassName("blocks");
var output = document.getElementById("output");
var rgb = randomIntFromInterval(0,block.length-1);
function loaded(){
    
    for(var j=0;j<block.length;j++){
        var r = randomIntFromInterval(1,255);
        var g = randomIntFromInterval(1,255);        
        var b = randomIntFromInterval(1,255);
        var s = "rgb"+"("+r+","+g+","+b+")";
        block[j].style.backgroundColor = s;
    }
    
    var bgc = block[rgb].getAttribute("style");
    var change = document.getElementById("change");
    var index = bgc.indexOf(";");
    var bgc = bgc.slice(18,index);
    change.textContent = bgc;
    block[rgb].addEventListener("click",function(){
        var container = document.getElementsByClassName("container")[0];
        container.style.backgroundColor = bgc+";";
        $(".blocks").css({backgroundColor:bgc});
        $(".blocks").show();
        output.textContent = "Well Done";
    })
    $(".blocks").not($(".blocks")[rgb]).on("click",function(){
        output.textContent = "Try Again"
        $(this).hide().css({visibility: "visible"}).fadeIn("slow");
    })
}
document.addEventListener('DOMContentLoaded',function(){
    loaded();
}, false);
var easy = document.getElementById("easy");
easy.addEventListener("click",function(){
    var count = 0;
    for(var a=0;a<block.length;a++){
        if(a == rgb){
            continue;
        }
        count += 1;
        block[a].style.display = "none";
        if(count == 3){
            break;
        }
    }
})
var hard = document.getElementById("hard");
hard.addEventListener("click",function(){
    for(var a=0;a<block.length;a++){
        block[a].style.display = "";
    }
})
