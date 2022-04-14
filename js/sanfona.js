// SANFONA
var lbl = document.getElementsByClassName("lbl-sc");
var i;
var j;
for (i = 0; i < lbl.length; i++) 
{
  lbl[i].addEventListener("click", function() 
  {
    for (j = 0; j < lbl.length; j++) 
    {
      lbl[j].classList.remove('sec-ativa');
    }
    this.classList.toggle("sec-ativa");
    //===================================
  });
}