// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const btn = document.getElementById('buttonMe');
btn.innerText = 'Hard';

function ChangeColor ()
{
  var labelId = document.getElementById('lbl');
  labelId.innerText.fontcolor = red;
}
