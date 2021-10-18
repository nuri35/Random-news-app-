
// import resımgetir from "./unsplashapi.js";
// import newsrandom from "./jokeapi.js";

//ılk once sunu bıl node js daha cok commonjs kullanır ama node ortamındayız ve module kavrmaını
// kullanabılrız amma velakın axıos gıbı npmlerı kullanırken dokumantasyonda nasıl gosterıyorsa
//oyle yap joke.apide onun ıcın requıre kullandık

//kullansakda kullanmasakda saka.js bu dosyaları yukardakılerı yanı ımport edıyor dırek sunu yapcaz
//ne zaman  ıhtıyac duuyuyorsak ımport edıcek mesela resımgetir tetıklendıgınde onu import edıcez
//daynamik ımport edıcez webpack bunu desteklıyr

//git export ettıgın yerlerden default kaldır ısım olarak bana versın 

const resımgetir = ()=> import("./unsplashapi");
const newsrandom = ()=> import("./jokeapi");//bir degıskene atadık o degıskende bır fonksıyon
//cok buuyuk uygulama yaptınız  buuton kodların bırkere bırden getırelecegıne lazım oldukca
//getırılmesını ıstıyeıbılrız uygulamınızın ılk acılıs ıhızını arttıracaktır
//build aldıgımızda dist içinde farklı js dosyaları olusturcak aslında sunu yaptı:

//ben aslında main.bundıl.js ıcıne koyuyordum bu kodları fakat suan o bundılın ıcınde  yok ama ılerleyen
//zamanlarda gereklı olabılrı dıye farklı dosyalra attı  consoldan network kısmına gıttıgmızde 
//distekı main.bundl.js boyutu baya azalmıs oldu

//burda sadce sunu yapıcam bana resım getır lazımda bunu cagırmak bu bana promıse donduruyor 
//zaten sakagetırın ıcınde yanı asenkron yapının ıcınde olucam orda oyle bır yapı kullan




class Ekran {
    constructor(){
this.sakagetirbtn = document.querySelector(".sakabtn");
this.sakagetirbtn.addEventListener("click", ()=> this.sakagetir());

    }

    
 async   sakagetir(){
//bu ornek ıcın bu fonksıyon ııcnde yazılan şeyler newsapp dıye klosorun ıcınde ayrıntılı anlatılı 
//burada yazacagım kodlar webpack ıcın ılgılendıren yerlerı yazıcagım

//await resımgetir() tetıkledıgımz zaman aynı yukardakı o resım getır modulunu cagırmıs olduk sonra
//. dıyıp ben bunun uzerınden neyı getırıyorsan ne export edılmısse onu cagırıyorum otomatık
//kodu yazıyor zaten
const randomgetımg = await (await resımgetir()).resımgetir()
//ozetle burda resım getır cagırcam ozman ımport edelım modulu dedım o modulde bır fonksıyona 
//atanmıs o yuzden fonksıyonu calıstırdım onun uzerındende moduldekı export edılen fonksıyonu
//calıstırdım asagıda yorum satırındakı gıbı bır mantık var gınede 

const randomjoje = await (await newsrandom()).newsrandom();//buda aynı sekılde 

//yanı yukarda yaptıgım sey modulu dırek vermektense ıhtıyacım olunca cagırıyorum modulu dolayısıyla
//bu aseknron  dolaıyısyla promıse yapısı oldugu ıcın await yapısı kullandım

//sonuc olarak networkden baktıgmızda cagırmadan sadece bundl.js gorunuyor  fakat onun ıcıne sadece 
//bu resımgetır habergetır js dosyalarını atmadı sadece ıhtıyacımız olunca onları ayrı dosya olarak
//getırdı  17.dakıkayı dınle //////////////////////

// const randomgetımg = await resımgetir();
// const randomjoje = await newsrandom();

this.writescren(randomgetımg,randomjoje);

    }
writescren(...par){

document.querySelector(".sonuc").innerHTML = ` <div class="card">
<div class="card-image">
  <figure class="image is-18by32">
    <img class="ımgx" src="${par[0]}" alt="Placeholder image">
  </figure>
</div>
<div class="card-content">
  <div class="media">
    
    <div class="media-content">
      <p class="title is-4 has-text-danger "> İnfo </p>
   <p class="ıng">${par[1]}</p>
    </div>
  </div>


</div>


<hr>


 
  </div>
</div>
`


}



}

export default function uygulamayıbaslat(){

   new Ekran();

}