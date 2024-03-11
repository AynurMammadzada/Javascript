let decButton = document.querySelector(".dec");
let incButton = document.querySelector(".inc");
let countElement = document.querySelector(".count");
let value =0;




decButton.addEventListener("click",()=>{
    value--;
    updateCount()
});

incButton.addEventListener("click",()=>{
    value++;
    updateCount()
})

function updateCount() {
    countElement.textContent = value;
    countElement.classList.remove('red', 'blue');
    if (value < 0) {
      countElement.classList.add('red');
    } else if (value > 0) {
      countElement.classList.add('blue');
    }
  }

