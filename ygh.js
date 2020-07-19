





   let inp1 = document.getElementById("input1")
        
   let inp2 = document.getElementById("input2")
   
   let inp3 = document.getElementById("input3")
 

function Calc(ten,elventh,twelv) {

   let a1 = ((ten*100)*0.1*100)/100/100
   let a2 = ((elventh*100)*0.2*100)/100/100
   let a3 = ((twelv*100)*0.7*100)/100/100


   let ii = a1 + a2 + a3
  return ii

}
   let mybutton = document.getElementById("button").onclick=function(){
       
       let inp1 = document.getElementById("input1").value
       
       let inp2 = document.getElementById("input2").value
       
       let inp3 = document.getElementById("input3").value
       let resultText = document.getElementById("result")

      let result = Calc(inp1,inp2,inp3)

      resultText.innerText =  `${result}%`
      
   }

   