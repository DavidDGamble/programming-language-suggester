// Business Logic
// function isQ4Empty(input) {
//   if (input === NaN) {
//     document.getElementById('suggestion').innerText = 'Please enter a number for how many courses/classes you have taken.';
//   }
// }

// User Interface Logic
window.addEventListener('load', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();
  const q1 = document.querySelector("input[name='q1']:checked").value;
  const q2 = document.querySelector("input[name='q2']:checked").value;;
  const q3 = document.querySelector("input[name='q3']:checked").value;;
  const q4 = parseInt(document.querySelector('input#q4').value);
  const q5 = document.querySelector('select#q5').value;
  if (q4 === NaN) {
    document.getElementById('suggestion').innerText = 'Please enter a number for how many courses/classes you have taken.';
    console.log(q4);
    console.log(document.getElementById('suggestion').innerText)
  }
  console.log(q4);
}