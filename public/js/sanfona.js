// SANFONA
var label = document.getElementsByClassName("label-secao");
var i;
var j;
for (i = 0; i < label.length; i++) 
{
  label[i].addEventListener("click", function() 
  {
    for (j = 0; j < label.length; j++) 
    {
      label[j].classList.remove('sec-ativa');
    }
    this.classList.toggle("sec-ativa");
    //===================================
  });
}