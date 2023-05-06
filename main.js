 //slice method extract section of a string
 /* let fullname="snop dog";
 let firstname;
 let lastname;
 firstname=fullname.slice(0,3)
 lastname=fullname.slice(4)
  
 lastname=fullname.slice(fullname.indexOf("")+1) 
 console.log(lastname);

//break statements

for(i=1;i<=20;i++){
    if(i==13){
        continue;
    }
    console.log(i);
}

//nested loop

let rows=window.prompt("enter number of rows");
let columns=window.prompt("enter number of columns")

for (let i=1;i<rows;i+=1){
    for(let j=1;j<=columns;j+=1){
document.getElementById("myRectangle").innerHTML +=j;
}
document.getElementById("myRectangle").innerHTML +="<br>"
}
hello();
hello();
function hello(){
    console.log('happy birthday');
}*/


 /* let height;
 let width;
 let area;
 width=window.prompt("enter width")
 height=window.prompt('enter height')
 area=getArea(width,height);
 console.log('the area is ',area);
 function getArea(width,height){
    let result=width*height;
    return result;

 } */

 // 


 document.addEventListener('DOMContentLoaded', function() {
    const answer = Math.floor(Math.random() * 10 + 1);
    let guesses = 0;

    document.getElementById('submitButton').addEventListener('click', function() {
      let guess = document.getElementById('guessField').value;
      guesses += 1;
      if (guess == answer) {
        alert(`${answer} is the number. It took you ${guesses} guesses.`);
      } else if (guess < answer) {
        alert('Too small');
      } else {
        alert('Too large');
        window.location.reload();
      }
    });
  });