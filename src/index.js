console.log('%c HI', 'color: firebrick')
window.onload = function () {
   images ();
   breeds ();
}

//Challenge 1 //
function images(){
   fetch("https://dog.ceo/api/breeds/image/random/4")
   .then((response) => {
     return response.json();;

   })
   .then((data) => {
     for(const element of data.message){
       document.getElementById("dog-image-container").innerHTML+='<img src="'+element+'" width=100>';
       }

   });
 }

//Challenge 2 // 
function breeds(){
   fetch("https://dog.ceo/api/breeds/list/all")
   .then((response) => {
     return response.json();;

   })
   .then((data) => {
     let keys= data['message'];
     let ul=document.getElementById("dog-breeds");
     d();
     function d(){
       for(const element of Object.keys(keys)){
         let li = document.createElement('li');
         li.appendChild(document.createTextNode(element));
         //challange3
         li.addEventListener("click",function(){
           li.style.color="lightblue";
         });
         ul.appendChild(li);
       }
     } 
     const selectElement = document.querySelector('#breed-dropdown');

     selectElement.addEventListener('change', (event) => {

     switch(event.target.value){
       case 'a': 
       startWith('a');
       break;
       case 'b':
       startWith('b');
       break;
       case 'c':
       startWith('c');
       break;
       case 'd':
       startWith('d');
       break;
     }

     });
   function startWith(letter){
     ul.innerHTML = "";
     for(const element of Object.keys(keys)){
       if(element.startsWith(letter)){
         let li = document.createElement('li');
         li.appendChild(document.createTextNode(element));
         li.addEventListener("click",function(){
         li.style.color="lightblue";
         });
         ul.appendChild(li);
       }
     }
   }



 });
 }

