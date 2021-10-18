class translateapi {
    constructor(ingwords){
   
    this.baseUrl="https://translation.googleapis.com/";
    this.text = ingwords;
//https://translation.googleapis.com/language/translate/v2?target=tr&key=AIzaSyDPiLSIdCY893PY1ZoLEBcy6toIn98uL5o&q=I
// am a backend developer ornek sorgu burdada target olarak axıos.create koymamız lazım

    this.axiosNesne = axios.create({
    baseURL: this.baseUrl, 
    params : {
        target: "tr",
        key:"AIzaSyDPiLSIdCY893PY1ZoLEBcy6toIn98uL5o",
        q: this.text
        
    } 

    });

}



async translatefunc(){
try{

    const transwal = await this.axiosNesne.get("language/translate/v2")//bu ıstegı yaparak axıos nesnesındekı degerlerı
//kullanır

// console.log(transwal.data.data.translations[0].translatedText);

    // const ekranvalwrıte = await this.writetext(transwal.data.data.translations[0].translatedText)


return transwal.data.data.translations[0].translatedText;


}catch(err){
   
return `oppps çeviri yapılamadı`

}

}

// writetext(doctrans){
//     const trans = document.querySelector(".tr");
//     //ınner html yazcam
   
//     trans.innerHTML = doctrans;

// }

}