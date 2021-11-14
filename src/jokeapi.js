const axios = require('axios');

class jokeapi{

constructor(){

    this.baseUrl="https://newsapi.org/";
    this.clientID = "aec1ed44cfbe4da090a4d99362fd9188";
  
    this.axiosNesne = axios.create({
        baseURL: this.baseUrl, 
        headers:{
           
            Authorization :  this.clientID
           
          },
        params : {
           
            country:"tr",
            category:"sports"
        }
        
    })
}

 async randomjokeget(){ 
try{

    const sakawaitrepsons =  await this.axiosNesne.get("v2/top-headlines");
  


 
let randsay =  Math.floor(Math.random() * 20);
console.log(sakawaitrepsons.data.articles[randsay])
return sakawaitrepsons.data.articles[randsay].description;

}catch(err){  
    console.log(err.response)
    return `oppps veri çekilemedi ${err.response.status}`
}
   
}



}


export   function newsrandom(){ 


const getırhaber =  new jokeapi().randomjokeget();
return getırhaber; 
}


