const ratingEls = document.querySelectorAll(".rating");
const btnEL = document.getElementById("btn");
const containerEL = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
      removeActive();
      selectedRating = event.target.innerText||
      event.target.parentNode.innerText;
      event.target.classList.add("active");
      event.target.parentNode.classList.add("active");
    });
  });

btnEL.addEventListener("click",() =>{
    if(selectedRating !== ""){
        containerEL.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use Your feedback to improve our
        customer support.</p>
        `;

    };
});


function removeActive(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList .remove("active")
    });
};