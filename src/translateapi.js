class translateapi {
    constructor(ingwords){
   
    this.baseUrl="https://translation.googleapis.com/";
    this.text = ingwords;

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

    const transwal = await this.axiosNesne.get("language/translate/v2")

return transwal.data.data.translations[0].translatedText;


}catch(err){
   
return `oppps çeviri yapılamadı`

}

}



}