
const divEle=document.querySelector('#featured-products');
const tableData=document.querySelector('.table tbody');



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
function fetchusingCall(url){
  fetchdata.call(this,url,function(error,data){
    if(error){
      console.log('error while fetching data',error);
      return;
    }
    populateDataCall(this,data);
  })
}


async function fetchdata(url){
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




document.addEventListener('DOMContentLoaded',async()=>{
   const urlApi='https://fakestoreapi.com/products';

   fetchusingCall(urlApi);
   try{
    const data= await asycnexample(urlApi);

    assignProduct(data);
   
   }
   catch(error){
    console.log("Error displaying products:",error)
   }
     
})


/// table content from async await
//https://fakestoreapi.com/products

function displayTable(data){
  if(data.length!==0){
     
    tableData.innerHTML='';
    data.slice(0,5).forEach((products)=>{
      // const tablediv= document.createElement('div');
      const tablerow= document.createElement('tr');
      tablerow.innerHTML=
      `
                  <td>${products.title}</td>
                  <td>$${products.price}</td>
                  <td>${products.description}</td>
                  <td>N/A</td>
                  <td>N/A</td>
                
               
                `
                tableData.appendChild(tablerow);
               
               
    })
  }
  else{
    tableData.innerHTML= `<tr>
   <td>N/A</td>
      <td>N/A</td>
    <td>N/A</td>            
    <td>N/A</td>
    <td>N/A</td>
  </tr>
  `;
  }

  
}

function assignProduct(data){
  if(data.length!==0){
  divEle.innerHTML='';
  data.slice(0,10).forEach((products)=>{
    const productElement= document.createElement('div');
    productElement.className="products";
  productElement.innerHTML=
  `<img src=${products.image} alt="Profile Image" width="200" 
                height="200" />
      <h3>${products.title}</h3>         
      <p class="price">$${products.price}</p>
      
      </div>`;

      divEle.appendChild(productElement);
  });
}
else{
  divEle.innerHTML="No products Found";
}
}



