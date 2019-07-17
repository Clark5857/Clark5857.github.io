let Nav = document.getElementById('nav');
let acme = "https://Erambal.github.io/finalproject/acme/js/acme.json";

Nav.addEventListener('click', function(evt){

   // Get the city name
   let name = evt.target.innerHTML;
   switch (name) {
     case "Anvils":
       case "Explosives":
         case "Decoys":
             case "Traps":
              // case "Home":
           console.log(name);
           evt.preventDefault();
           let  content =  document.getElementById('home-main');
           content.setAttribute('class', 'hide');
           let content2 = document.getElementById('product-page');
          content2.setAttribute('class', '');
         break;
      case "Home":
          let content3 = document.getElementById('home-main');
          content3.setAttribute('class', '');
         let content4 = document.getElementById('product-page');
         content4.setAttribute('class', 'hide');
         break;  
   }
    
  
   fetch(acme)
   .then(function(response) {
     if(response.ok){
       return response.json();
     }
     throw new Error("Network response was no bueno.");
   }) 
   .then(function(data){
       let g = data[name];

       let name1 = g.name;
       console.log(name1);
       let path = g.path;
       let description = g.description;
       let manufacturer = g.manufacturer;
       let price = g.price;
       let reviews = g.reviews;


       //Set all the information

       document.getElementById("name1").innerHTML = name1;
       document.getElementById("path").src = path;
       document.getElementById("description").innerHTML = description;
       document.getElementById("manufacturer").innerHTML = manufacturer;
       document.getElementById("price").innerHTML = price;
       document.getElementById("reviews").innerHTML = reviews;
       
   })
   
   
   .catch(function(error){
     console.log("There was a fetching problem: ", error.message);
   })
 })


function nav(){
 let nav = "<li>Home</li>";

 fetch(acme)
   .then(function(response) {
     if(response.ok){
       return response.json();
     }
     throw new Error("Network response was no bueno.");
   })
   .then(function(data){
     console.log(data);
//Create array with all of the different keys
let product = Object.keys(data);
    console.log(product);

    for (let i = 0, x = product.length; i < x; i++){
      nav += "<li><a href ='" + product[i].toLowerCase() + ".html'>"+ product[i] + "</a></li>";
    }
    document.getElementById("links").innerHTML = nav;

   })
   .catch(function(error){
     console.log("There was a fetching problem: ", error.message);
   })
}
nav();

