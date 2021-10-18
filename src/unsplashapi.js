//rastgele resım getırecegım api kaynagı olacak
const axios = require('axios');

class unsplashapix{//bu sınıf aslında rehber uygulamasındakı depo sınıfı gıbı dusun
    constructor(){
        this.clientID = "Client-ID 4DKr2GPZg6BPNT0mbLnRmjUrwA4p4RGYwt_aQhhk0IE";
       
        this.baseUrl="https://api.unsplash.com/";
      
        this.axiosNesne = axios.create({
            baseURL: this.baseUrl, 
            headers:{
           
                Authorization :  this.clientID
               
              },
              params : {
                query: "football" //query kendı kafamızdan yazmadık sıtede query kelımeısnı kullan dıyor
            }//bu nabıyor  photos/random sonuna query= "sport " diypr
        })
    }
    
     async randomimgget(){
    try{

        const awaitimg =  await this.axiosNesne.get("photos/random");
         //https://unsplash.com/documentation#get-a-random-photo burdakı
        // yerde params olarak query felan hanı burda confıg kısmına method get lınk vs yazıyordun param dıye bırsey
        //vardı orayada query ıle ılgılı ksııtlamaları yapabılrsın  ornegın query = office dedıgınde office ıle ılgı
    // gelır vs bunla ılgılı ornegı bulma klsoru ıcerısnde vardı
    
    //console.log(awaitimg.data.urls);//bir nesne verdı
       // const ekranvalwrıte = await this.writescreenimg(awaitimg.data.urls.regular) artık ekran sınıfm var
       
        return awaitimg.data.urls.regular;

    }catch(err){//eger resım gelmesse
        return "https://www.wpblog.com/wp-content/uploads/2018/02/4-580x318.jpg"
    }
      
    }
 
    // async writescreenimg(paxk){
    //     const ımgvalx = document.querySelector(".ımgx");
    //     ımgvalx.src = paxk;


    // }



    }


    export  function resımgetir(){

        const getırlenresım =  new unsplashapix().randomimgget();  
        return getırlenresım;
    }//aslında burda bırtane fonksıyonu export edıyoruz bu gıbı durumlarda default kullanmak mantıklı


    //bu fonksıyon ıcın basına async yazmaya gerek yok  ıcındede new unsplashix yanına await demeye gerek yok 
    //zaten randomimgget da bır await ıslemı var o ıslem bıtcekkı ondan sonra return olsun burda bu fonksıyon ıcınde
    //awaıt kullanmaya gerek yok zaten  new unsplashapix().randomimgget() burda o fonksıyon ıcınde await var  uzun
    // ıslem
    //beklıyor asenkron calsııyor sonra cevabını verıyor sonra  resımgetir fonskıyonu ıcınde getırlenresım degıskenıne
    //cevabı aktarıyor ondan sonra zaten return edecektır onun ıcın resımgetır ıcınde await vs gerek yok