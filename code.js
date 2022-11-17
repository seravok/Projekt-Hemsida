

function checkAnswer(){
    let nbr = 0;
 if(document.getElementById("a1").checked){
    nbr++;
 }
 if(document.getElementById("b2").checked){
    nbr++;
 }
 console.log(nbr);
 document.getElementById("point").innerHTML = "Du fick " + nbr + "/2";
 document.getElementById("point").style.color = "red";
}