// SANFONA
var acc = document.getElementsByClassName("lbl-sc");
var i;
var j;
for (i = 0; i < acc.length; i++) 
{
  acc[i].addEventListener("click", function() 
  {
    for (j = 0; j < acc.length; j++) 
    {
      acc[j].classList.remove('sec-ativa');
    }
    this.classList.toggle("sec-ativa");
    //===================================
  });
}