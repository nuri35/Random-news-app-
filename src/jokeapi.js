const axios = require('axios');

class jokeapi{//bız nezaman new dıyıp bundan nesne olusturcaz burası calsıyordu yanı constructor kısmı

constructor(){
//sareklı bır url kullanıyoruz degılmı daha okunaklı tutmak ıcın burda tnaımladık
    this.baseUrl="https://newsapi.org/";
    this.clientID = "aec1ed44cfbe4da090a4d99362fd9188";
    //axios.create diyerel instanc olusturabılıyorduk ıcıne congıh yazıyorduk  ben ne zaman joke apidan yenı bır 
    //nesne uretıcem yani jokeapi tetıklenıcek aslında ılgılı axios nesnesı uretılıp bunu axıos create ıle yaptık
    //  axiosNesne degıskenıne baglanıcak
    this.axiosNesne = axios.create({
        baseURL: this.baseUrl, //confıg olarak ıcıne bu yeterlı
        headers:{
           
            Authorization :  this.clientID
           
          },
        params : {
           
            country:"tr",
            category:"sports"
        }
        
    })
}

 async randomjokeget(){ // this.axiosNesne sını kullanarak  bıze bır saka getırcek
try{

    const sakawaitrepsons =  await this.axiosNesne.get("v2/top-headlines");// sakawaitrepsons consle logla yazdırsak
   //bır obje verıyor ıcınde status confıg data vs olan şeyler  bıze bır promıse vermedı versydı onu json ( ) vs 
   //dıcektık
//    const sncx = await sakawaitrepsons.json()
//    console.log(sncx); //asagıdakı gıbı yazdık ordanda value ulasırız



 //const ekranvalwrıte = await this.writescreen(sakawaitrepsons.data.value)
let randsay =  Math.floor(Math.random() * 20);
console.log(sakawaitrepsons.data.articles[randsay])
return sakawaitrepsons.data.articles[randsay].description;

}catch(err){  
    console.log(err.response)
    return `oppps veri çekilemedi ${err.response.status}`
}
   
}
//butun kodları bır dosyada yazmak yerıne konu konu dosyalara ayırabılrım


// async writescreen(par){
// const ıngwrıtefıel = document.querySelector(".ıng");
//  //ınner html yazcam

//  ıngwrıtefıel.innerHTML = par;

// }



}//ben bunu saka.js de tetıkleyebılyıroum 

////////////////////////////////////////
//module kavramında dusunurken sımdı bunu dısarı sunarken dısardakı kısının bu dosyayı cagırma amacı ne sızın burdakı
//jokeapiyınızın sınıfmı  yanı bu adam bunu cagırıp sonrasında constructordakı baseurle ulasıp degıstırmesınımı ıstıyor
//sunuz şuan ıstemedıgımı dusunuyorum  kı bu uygulamada ıstemıyorumda sadece belırttgım url kısmına gıtsın .
//bu dosyanın tek amacı ne aslında internetten nasıl getırıyor  neyı kullanıyor ben bunları bılmek zorunda degılım
//bır rastgele haber getırsın o yuzden ben bu sınınfı export dııyp dısarı acmaktansa  bır fonskıyon olusturup bu 
//gfonksıyonu dısarı acabılrım

//modullerı konustuhumuzda ne dedık ;  bır dosyanın ıcınde belkı sınıflar olur degıskenler olur  fonksıyonlar olur
//ama aslında butun bunları olsutma amacım bellı bır amaca  hızmet etmesı bu dosyanın yapmak ıstedıgı şeyde unutma
//ıcınde  bır sınıf var bu dosyanın yapmak ıstedıgı şeyde bana rastgele bır haber getırmesı o yuzden asagıda 
//boyle bır fonskıyon taınımlıyoruz randomnews dıye

export   function newsrandom(){ //yanı bu dosyayı ımport eden kısı sadece tek erısecegı şey bu fonskıyon
//pekı burda ne yapıcaz  yukarda olusturdugum sınıfı kullanmabılrım veya butun yapıyı tek tek bırdaha uyazabılrım
//aslında burda sınıfada pek ıhtıyac yok sınıflar aslında bıze nesne olusturuyordu e ben bunu (classı)tekerar tekrar
 //cagırıp kullanmıcamkı o yuzden sınıf olusturmayada gerek yoktu ama daha derlı toplu durmasını saglıyor
//kullanmıcamkı 

//unutma nesne olusturur olusturmaz randomjokegetfonskıyonunada ulsaırım ondan boyle . ile yaptık
const getırhaber =  new jokeapi().randomjokeget();
return getırhaber; //sonuc olarak bu fosnkyonu ımport eden kısı yukardakı sınıfdakı yapıların hıcbırını bılmıcek
//tek bıldıgı newsrandomdıye fonksıyon olucak ve bu fonksıyonda kendı ıcnde yukardkaı class yapısını kullanıyor
}

//ılgıncıtırkı bu nasıl oluyor hanı bu fonskıyonu dısarı sunuyoruz adam bunu cagırıyor  ama aslında bu fonksıyon
// aynı scopedakı dıger yapılara erısıyor bıldıgınız CLOSURE ORNEGIYLE OLUYOR

