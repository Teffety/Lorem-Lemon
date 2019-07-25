document.getElementById('burger').addEventListener('click',openBtn);

function openBtn(){
  var btn = document.getElementsByClassName("burger__btn");
if(btn[0].classList.length > 1){
btn[0].classList.remove("active")
}else{
    btn[0].classList.add("active")
}
}