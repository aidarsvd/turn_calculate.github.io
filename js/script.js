
//taking action
function fn1(){
    var movefw = "Write distance"
    var movedegr = "Write degrees"
    var answer = document.getElementById("inputGroupSelect01").value;
    if (answer == 1){
        document.getElementsByClassName('choose')[0].innerHTML = movefw;
        document.getElementsByClassName('disb')[0].innerHTML = "*none required";
    }

    else{
        document.getElementsByClassName('choose')[0].innerHTML = movedegr;
        document.getElementsByClassName('disb')[0].innerHTML = "Distance between the wheels";
    }
}


//calculating
function fn2(){
    var answer = document.getElementById("inputGroupSelect01").value;
    var diamter = document.getElementById("diameter").value;
    var wcir = diamter * 3.1415;
    var btw = document.getElementById("btw").value;
    var R = btw / 2
    var r = diamter /2



    document.getElementsByClassName("wheel_cir")[0].innerHTML = "wheel circumference: " + wcir;

    if(answer == 1){
        var S = document.getElementById("custom").value;
        var turnovers = S/wcir;
        var degrees_forw = turnovers * 360;
        document.getElementsByClassName("move_forw")[0].innerHTML = "turnovers: " + turnovers;
        document.getElementsByClassName("degrforw")[0].innerHTML = "degrees: " + degrees_forw;
    }

    if(answer == 2){
        var pldegr = document.getElementById("custom").value;
        var qturn = ((R * 2 * 3.141)/wcir) / 360 * pldegr;
        var qdegr = qturn * 360
        document.getElementsByClassName("turn_place")[0].innerHTML = "turnovers: " + qturn;
        document.getElementsByClassName("turn_place_degr")[0].innerHTML = "degrees: " + qdegr;
    }
    

    else{
        var pldegr = document.getElementById("custom").value;
        var qturn = ((btw * 2 * 3.141)/wcir) / 360 * pldegr;
        var qdegr = qturn * 360
        document.getElementsByClassName("turn_place")[0].innerHTML = "turnovers: " + qturn;
        document.getElementsByClassName("turn_place_degr")[0].innerHTML = "degrees: " + qdegr;

    }


}




//var diamter = document.getElementById("diam").value;
//document.getElementsByClassName('res')[0].innerHTML = diamter;

