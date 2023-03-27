const Btnclick=document.getElementById('YesButton');
const par=document.getElementById('paragraph');


Btnclick.onclick=function() {
  par.innerHTML='your oder is placed,check your emails',
  par.style.backgroundColor='red',
  Btnclick.style.display='none';
}
