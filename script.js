var result= function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("year").value;
    finalResul = p*y*r/100;
    return finalResul;
    
}
        