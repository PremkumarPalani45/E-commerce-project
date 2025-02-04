
const divEle=document.querySelector('#featured-products');



async function asycnexample(url){
try{
   const response= await fetch(url);
if(!response.ok){
  throw new Error(`Id does not match ${id}`);
}
  const userData=await response.json();
  return userData;
}
catch(error){
  console.error(err);
  throw err;

}

 }

// function fetchExample(){
// fetch(url).then((response)=>{
//   if(!response.ok){
//       throw new Error(`Id does not match ${id}`);
//   }
//   return response.json();
// }).then((user)=>{
//   displayUser(user,'beforeend')
// }).catch((err)=>{
//  console.log(err);
// });
// }





document.addEventListener('DOMContentLoaded',async()=>{
   const urlApi='https://fakestoreapi.com/products';


   try{
    const data= await asycnexample(urlApi);


    if(data.length!==0){
      divEle.innerHTML='';
      data.slice(0,10).forEach((products)=>{
        const productElement= document.createElement('div');
        productElement.className="products";
      productElement.innerHTML=
      `<img src=${products.image} alt="Profile Image" width="200" 
                    height="200" />
          <h3>${products.title}</h3>         
          <p class="price">${products.price}</p>
          
          </div>`;
    
          divEle.appendChild(productElement);
      });
    }
    else{
      divEle.innerHTML="No products Found";
    }
   }
   catch(error){
    console.log("Error displaying products:",error)

   }
})