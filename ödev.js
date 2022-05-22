function süre()
{
    var isorange=false;
    var orange=document.getElementById("navbarDropdown2");

    setInterval(function(){
        if(isorange)
        {
            orange.style.backgroundColor="brown";
            isorange=false;
        }
        else
        {
            orange.style.backgroundColor="black";
            isorange=true;
        }
    },1000)
}
function süre1()
{
    var isorange=false;
    var orange=document.getElementById("navbarDropdown3");
    setInterval(function(){
        if(isorange)
        {
            orange.style.backgroundColor="brown";
            isorange=false;
        }
        else
        {
            orange.style.backgroundColor="black";
            isorange=true;
        }
    },1000)
}
function süre2()
{
    var isorange=false;
    var orange=document.getElementById("navbarDropdown1");

    setInterval(function(){
        if(isorange)
        {
            orange.style.backgroundColor="brown";
            isorange=false;
        }
        else
        {
            orange.style.backgroundColor="black";
            isorange=true;
        }
    },1000)
}