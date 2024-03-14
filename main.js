let counting_button= document.querySelector(".T1 button");
let count1 =0;
let count2 =0;
let count3 =0;

console.log(counting_button);
counting_button.onclick = function(){
    

   
   
count1 += 1;


document.querySelector(".T1 p").textContent=count1;


}

 counting_button= document.querySelector(".T2 button");

console.log(counting_button);
counting_button.onclick = function(){
    

   
   
count2 += 1;


document.querySelector(".T2 p").textContent=count2;


}



 counting_button= document.querySelector(".T3 button");
console.log(counting_button);
counting_button.onclick = function(){
    

   
   
count3 += 1;

//console.log(count3);

document.querySelector(".T3 p").textContent=count3;


}