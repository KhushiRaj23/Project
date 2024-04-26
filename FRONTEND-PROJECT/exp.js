const f =document.querySelector(".front");
const b = document.querySelector(".back");
const btn = document.querySelector("button");

var flag = 0;

btn.addEventListener("click",function(){
  if(flag == 0){
    f.style.left = "-100%";
    b.style.right = "0%";
    flag = 1;
  }
  else{
    f.style.left = "0%";
    b.style.right = "-100%";
    flag = 0;
  }
})