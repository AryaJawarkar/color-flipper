const arr = ["red","blue","green","orange","rgba(34,56,78)","rgba(100,200,325)"];
  
let a = document.getElementById("amp");
let b = document.getElementById("demo");

 
a.addEventListener("click", () => {

 const c = Math.floor(Math.random()*arr.length);
    document.body.style.backgroundColor = arr[c];
    b.innerHTML = arr[c];
 });






 const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
 let d = document.getElementById("damo");
 let e = document.getElementById("anp");

 e.addEventListener("click", () => {
     const f = Math.floor(Math.random() * hex.length);
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[f];}

 document.body.style.backgroundColor = hex[hexColor];
 d.innerHTML = hex[hexColor];


});
