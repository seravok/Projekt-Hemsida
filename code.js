

function checkAnswer(){
    let nbr = 0;
 if(document.getElementById("a1").checked){
    nbr++;
 }
 if(document.getElementById("b2").checked){
    nbr++;
 }
 if(document.getElementById("c3").checked){
   nbr++;
}
if(document.getElementById("b4").checked){
   nbr++;
}

 console.log(nbr);
 document.getElementById("point").innerHTML = "Du fick " + nbr + "/4";
 document.getElementById("point").style.color = "red";
}