let num = 0;
let scene = 1;

function MouseClick(){
    SetMessage();
    num++;
}

function SelectClick1(){
    scene = novel[scene - 1][num][3];
    SetNovelbox();
}

function SelectClick2(){
    scene = novel[scene - 1][num + 1][3];
    SetNovelbox();
}


function SetNovelbox(){
    num = 1;
    mes = "";
    mes += "<div class=\"SelMess\" onclick=\"MouseClick()\">"
    mes += "<div class=\"box2\" id=\"novel\">"
    mes += novel[scene - 1][0][1];
    mes += "</div>";
    mes += "<div class=\"box3\" id=\"name\">";
    mes += novel[scene - 1][0][0];
    mes += "</div></div>";
    document.getElementById("SelMess").innerHTML = mes;
}

function SelectMessage(){
    mes = "";
    mes += "<div class=\"select1\" onclick=\"SelectClick1()\">";
    mes += novel[scene - 1][num][1];
    mes += "</div>";
    mes += "<div class=\"select2\" onclick=\"SelectClick2()\">";
    mes += novel[scene - 1][num + 1][1];
    mes += "</div>";
    document.getElementById("SelMess").innerHTML = mes;
}

function SetMessage(){
    console.log(num);
    if(scene == -1){
        document.getElementById("novel").innerHTML = "";
        document.getElementById("name").innerHTML = "";
        document.getElementById("SelMess").innerHTML = "おわり";
    }
    else{
        document.getElementById("novel").innerHTML = novel[scene - 1][num][1];
        document.getElementById("name").innerHTML = novel[scene - 1][num][0];
        if(novel[scene - 1][num].length == 4){
            if(novel[scene - 1].length - 1 != num){
                SelectMessage();
                num--;
            }
            else{
                scene = novel[scene - 1][num][3];
                num = -1;
            }
        }
    }
}

