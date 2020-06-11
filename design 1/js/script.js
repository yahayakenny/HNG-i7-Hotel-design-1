AOS.init({
  // offset: 200,
  duration: 800,
  easing: 'ease-in',
  delay: 100,
  once:true
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}