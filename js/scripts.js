// Business Logic
function suggester(input1, input2, input3, input4, input5) {
  if (input1 === 'math' && input2 === 'yes' && input4 <= 1) {
    return 'Javascript';
  } else if (input1 === 'math' && input2 === 'yes' && input4 > 1) {
    return 'Python';
  } else if (input1 === 'math' && input2 === 'no') {
    return 'Ruby';
  }
}

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
  
  if (isNaN(q4) === true) {
    document.getElementById('suggestion').innerText = 'Please enter a number in the classes/courses taken input.'; 
    const display = document.getElementById('suggestion');
    display.style.color = 'red';
  } else if (q5 === 'Select option') {
    document.getElementById('suggestion').innerText = 'Please select which option best describes you in dropdown.'; 
    const display = document.getElementById('suggestion');
    display.style.color = 'red';
  } else {
    const suggestion = suggester(q1, q2, q3, q4, q5);
    document.getElementById('suggestion').innerText = 'We think you should consider learning ' + suggestion + '.'; 
    const display = document.getElementById('suggestion');
    display.style.color = 'yellow';
  }
}