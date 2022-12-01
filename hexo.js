const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; 
document.getElementById("anp").addEventListener("click", () =>{
       let g = "#";
       for (let i = 0; i < 6; i++) {
           let h = Math.floor(Math.random() * hexa.length);
         g += hexa[h];
       }
    document.body.style.backgroundColor = g;
    document.getElementById("damo").innerHTML = g;
   })
  
