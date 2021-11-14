

const resımgetir = ()=> import("./unsplashapi");
const newsrandom = ()=> import("./jokeapi");





class Ekran {
    constructor(){
this.sakagetirbtn = document.querySelector(".sakabtn");
this.sakagetirbtn.addEventListener("click", ()=> this.sakagetir());

    }

    
 async   sakagetir(){

const randomgetımg = await (await resımgetir()).resımgetir()


const randomjoje = await (await newsrandom()).newsrandom();



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