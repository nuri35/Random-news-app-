
const axios = require('axios');

class unsplashapix{
    constructor(){
        this.clientID = "Client-ID 4DKr2GPZg6BPNT0mbLnRmjUrwA4p4RGYwt_aQhhk0IE";
       
        this.baseUrl="https://api.unsplash.com/";
      
        this.axiosNesne = axios.create({
            baseURL: this.baseUrl, 
            headers:{
           
                Authorization :  this.clientID
               
              },
              params : {
                query: "football" 
            }
        })
    }
    
     async randomimgget(){
    try{

        const awaitimg =  await this.axiosNesne.get("photos/random");
      
       
        return awaitimg.data.urls.regular;

    }catch(err){
        return "https://www.wpblog.com/wp-content/uploads/2018/02/4-580x318.jpg"
    }
      
    }
 


    }


    export  function resımgetir(){

        const getırlenresım =  new unsplashapix().randomimgget();  
        return getırlenresım;
    }
