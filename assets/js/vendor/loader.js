var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
    console.log("Loading the Website");
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}