function giriş()
{
    alert("SAYFAMA HOŞ GELDİNİZ");
}
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

function renk()
{
    var renk=document.getElementById("menüler");
   
    renk.style.borderColor="brown";
}
function nesne()
{
    var nesne={
               adı: "BUKET",
               Soyad: "MUTLU",
               Bölüm:"bilgisayar mühendisligi"

    }
    console.log(nesne);
}
function merhaba(obje)
{
    obje.innerHTML="Tıkladınız!";
}
function değiştirme()
{
    var h5=document.getElementsByTagName('h5')[0];
    h5.textContent="taze kavrulmuş isteğinize özel öğütülmüş dünya kahvelerini";
    console.log(h5);
}
function saat()
{
    var date  = new Date();
    console.log(date);
   

}
function ydeğiş()
{
    document.getElementById("biz").innerHTML="çok teşekkürler";
}
function index()
{
    var str = "Visit W3Schools!";
    var n = str.search("W3Schools"); //6 döner
    console.log(n);
}
function etiket()
{
    document.querySelector("a");
    var a=document.querySelector("a");
    a.setAttribute("href","https://www.google.com")
    console.log(a);

}
