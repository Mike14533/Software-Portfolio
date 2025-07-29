var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
    console.log("Loading the Website");
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function showEmail() {
  document.getElementById("demo").innerHTML = "michaelsmahony@gmail.com";
}

function showContentFadingIn(){
  const element = document.getElementById('fadeanimated')

element.classList.remove('fadeanimated'); // reset animation
void element.offsetWidth; // trigger reflow
element.classList.add('fadeIn'); 
  document.getElementById("fadeanimated").className = "fadeIn";
}