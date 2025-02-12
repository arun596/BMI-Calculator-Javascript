const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if(bmi < 18.6 ){
      const p1 = document.querySelector('#p1');
      p1.style.backgroundColor = "green"
    }
    else if(bmi >= 18.6 && bmi <= 24.9 ){
      const p2 = document.querySelector('#p2');
      p2.style.backgroundColor = "green"
    }
    else if(bmi > 24.6 ){
      const p3 = document.querySelector('#p3');
      p3.style.backgroundColor = "green"
    }
  }
});

