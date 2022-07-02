let contact =document.getElementById("contact")
let movies =document.getElementById("movies")
let movieName=document.getElementById("movieSearch")
let searchInput=document.getElementById("searchInput")
let searchItem;
let searchSelectedMovies=[];
var res
var resData = [];
var movieList=[];
let nameWarning=document.querySelector("#nameWarning")
let emailWarning=document.querySelector("#emailWarning")
let inputName=document.getElementById("nameInput");
let inputEmail=document.getElementById("inputEmail");
let inputpass=document.getElementById("inputPassword");
let passWarning=document.querySelector("#passWarning")
let inputRePass=document.getElementById("inputRePassword");
let rePassWarning=document.querySelector("#rePassWarning")

contact.addEventListener("click",function(){
  console.log("done")
window.scrollTo(0,4000)

})
let navList=document.querySelectorAll(".navItem")
  for(let i=0 ;i<navList.length;i++){
    navList[i].addEventListener("click",function(e){
      getData(e.target.id)
    })
  }  

async function getData(option) {
  res = await fetch(`https://api.themoviedb.org/3/movie/${option}?api_key=4243431cfdad8dc10c8227b19cca7edc&language=en-US&page=1`)
  resData = await res.json()
  resData = resData.results
  console.log(resData)
  displayData(resData)
}
getData("popular")

function searchDisplayData(resData){
  var box=``;
  for (var i = 0; i < resData.length; i++) {
    box+=`
    
    <div class="col-md-4">
    <div class="movieItem">
      <img
        src="https://image.tmdb.org/t/p/w500${resData[i].poster_path}"
        class="w-100"
      />
      <div
        class="movieInfo d-flex flex-column text-center align-items-center justify-content-center px-1"
      >
        <h2>${resData[i].name}</h2>
        <p>
          ${resData[i].overview}
        </p>
        <p>rate:${resData[i].vote_average}</p>
        <p>${resData[i].first_air_date}</p>
      </div>
    </div>
  </div>
    `   
    
  }
  movies.innerHTML=box
}



function displayData(resData){
  var box=``;
for (var i = 0; i < resData.length; i++) {
  box+=`
  
  <div class="col-md-4">
  <div class="movieItem">
    <img
      src="https://image.tmdb.org/t/p/w500${resData[i].poster_path}"
      class="w-100"
    />
    <div
      class="movieInfo d-flex flex-column text-center align-items-center justify-content-center px-1"
    >
      <h2>${resData[i].title}</h2>
      <p>
        ${resData[i].overview}
      </p>
      <p>rate:${resData[i].vote_average}</p>
      <p>${resData[i].release_date}</p>
    </div>
  </div>
</div>
  `
  movieList.push(resData[i].title);
   

}
console.log(movieList)
movies.innerHTML=box
 }



 movieName.addEventListener("keyup",function(){
   searchItem= movieName.value;
  console.log( searchItem);
  movieSearch(searchItem)
 })


 searchInput.addEventListener("keyup",function(){
   searchItem= searchInput.value;
  console.log( searchItem);
  for (var i = 0; i < resData.length; i++) {
    if(resData[i].title.toLowerCase().includes(searchItem)&& (searchSelectedMovies.includes(resData[i].title)== false) )
    {
      searchSelectedMovies.push(resData[i])
    }
  }
  displayData(searchSelectedMovies)
 })

 async function  movieSearch(searchItem){
  res = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=4243431cfdad8dc10c8227b19cca7edc&language=en-US&page=1&include_adult=false&query=${searchItem}`)
  resData = await res.json()
  resData = resData.results
  console.log(resData)
  searchDisplayData(resData);
}

function nameRegex() {
  var regex = /^([a-z]+[a-z '-.,]*){0,32}$/i;
  if (regex.test(inputName.value)) {
    nameWarning.classList.add("d-none");
  }
  else{
    console.log(false)
    nameWarning.classList.remove("d-none");
  }
}
inputName.addEventListener("keyup",nameRegex)

function emailRegex() {
  var regex =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.) +([a-zA-Z0-9]{2,4})+$/;
  if (regex.test(inputEmail.value)) {
    emailWarning.classList.add("d-none");
  }
  else{
    console.log(false)
    emailWarning.classList.remove("d-none");
  }
}
inputEmail.addEventListener("keyup",emailRegex)

function passRegex() {
  var regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/;
  if (regex.test(inputpass.value)) {
    passWarning.classList.add("d-none");
  }
  else{
    console.log(false)
    passWarning.classList.remove("d-none");
  }
}
inputpass.addEventListener("keyup",passRegex)

function repassRegex() {
  var regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/;
  if (regex.test(inputRePass.value)) {
    rePassWarning.classList.add("d-none");
  }
  else{
    console.log(false)
    rePassWarning.classList.remove("d-none");
  }
}
inputRePass.addEventListener("keyup",repassRegex)

 let openNav =document.querySelector(".openNav")

$(".openNav").click(function(){
  if(openNav.innerHTML=="☰"){
    console.log("hit")
  openNav.innerHTML="x"
  $(".statPart").animate({width :'250px'},60)
  $("#leftMenu").animate({ width:'200px'},50)
  }
  else if(openNav.innerHTML=="x") {
    console.log("shit")
    openNav.innerHTML="☰"
    $(".statPart").animate({width :'50px'},50)
    $("#leftMenu").animate({ width:'-200px'},50)
  }
})

$(".closebtn").click(function(){
  $("#leftMenu").animate({ width:'0px'},50)
})

