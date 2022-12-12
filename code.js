
function checkAnswer(){
   let nbr = 0;
   const right_answer = ["a1", "b2", "c3", "b4", "a5", "c6"];

   for(let i = 0 ; i < right_answer.length; i++)
   {
     if(document.getElementById(right_answer[i]).checked)
     {
        nbr++;
        document.getElementById(i).style.color ="green";
     }
     else{
        document.getElementById(i).style.color="red";
     }
   }

console.log(nbr);
document.getElementById("point").innerHTML = "Du fick " + nbr + "/4";
document.getElementById("point").style.color = "red";
}