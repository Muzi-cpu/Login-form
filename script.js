let form = document.querySelector('form');

function myFunction() {
  alert("You Have Logged In Successfully");
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  myFunction();
});