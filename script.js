const textBox = document.querySelector('#textBox');
const toFahrenheit = document.querySelector('#toFahrenheit');
const toCelcius = document.querySelector('#toCelcius');
const result = document.querySelector('#result');
let temp;


function convert() {
  temp = Number(textBox.value);

  if (toFahrenheit.checked) {
    temp = (temp * 9 / 5) + 32;
    result.textContent = temp.toFixed(1) + '°F';
    // result.textContent = 'CtoF';
  } else if (toCelcius.checked) {
    temp = 9 / 5 * (temp - 32) ;
    result.textContent = temp.toFixed(1) + '°C';
    // result.textContent = 'FtoC';
  } else{
    result.textContent = 'Pilih dulu yang benar';
  } 
}

