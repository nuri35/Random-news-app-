//ortak alanları burda yazıcaz

module.exports = {

    entry: './src/main.js',
  
    

      module: {//her ıkı dosyadada bu kurallar gecerlı olsun mesela bunları sılmıyoruz
        rules: [
         
        
          {
            test: /\.html$/i,
            loader: "html-loader",
          },



        ],
         },
        
      
        



      } 
     //sımdı bız dıger ornektekı dosyaları tasıdık fakat node modules dosyasını tasımadık 
     //eger npm istall dersen pacjage.jsona gıder ordakı dosyaları nodemodules klsorune yukler
     //2. olarak burda commonda bazı ayarları degıstırdık ortak alanlar bunlar olsun dedık vs

     //3. sonuc olarak baktıgımızda networkten suan axıos bulma cdnden getırılıyor ama butun js
     //dosyalarım bundel.js ye aktarılmıs duurmda tek bır dosya  js dosyam ve inddex.html boşluklar
     //gitmis ve sıkıstırılmıs durumda 

     //4:tırnaklar vs gıtmıs babel olayı atanmıs axıos gıbı kutuphaneyı cdnden cekmeme gerek yok 
     //fakat package .jsonda axıos gorunuyor ama node modules ıcıne getırmemız gerekır npm install axios
     //diyoruz kı nodes.modules paketın ıcıne gelsın ve requıre olarak axıos olan yerlere ımport
     //edıyoruz

     //5:artık noldu  networkten bakarsak sadce bundl.js var  bunun ıcıne eklendı aslında axıos 

     //6:uygulama acılınca networkde bundl.js var 55kblık, butuon kodları ıceren bır dosya
     // haber gelcek ya ıste butona basana kadar haberı getır resımgetır vs
     //kodlarının bı kullanımı var mı yok  

     //7:bu gibi durumlarda dınamık ımportlar ypaabılrız bu uygulamada yapıldı saka.jsde ypaıldı

   