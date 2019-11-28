alert("CONETCTED")
window.onload=function(){
   
var btn = document.getElementsByTagName("button")[0]
// btn.addEventListener("click", function (){
// 	var color =  document.getElementsByTagName("body")[0].style.background
// 	if (color != "purple") {
// document.getElementsByTagName("body")[0].style.background = "purple"}
// 	else if (color == "purple") {
// document.getElementsByTagName("body")[0].style.background = "white"}    
// })
//   }

btn.addEventListener("click", function (){
    document.body.classList.toggle("purple");
}
)
  }