filtrowanie

w sort channles by klikne np. title -> w filter channels bedzie szukac po tytulach 
funkcja musi sprawdzic co jest nacisniete w selection

let findSelected=() => {
  let selected=document.querySelector("input[name='sort]:checked".value
  }
  
  let radioBtns= document.getElementsByName("sort"));

radioBtns.forEach(radioBtn=>{
  radioBtn.addEventListener("change", findSelected);


