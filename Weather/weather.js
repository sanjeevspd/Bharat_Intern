var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var datetime = document.querySelector('#datetime'); // New variable for datetime
apik ="7f45f69d5981ef1743080ffcad17a69d"
function convertion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function()
{
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
  .then(res => res.json())

  .then(data => 
  {
    var nameval = data['name']
    var descrip = data['weather']['0']['description']
    var tempature = data['main']['temp']
    var wndspeed = data['wind']['speed']

    city.innerHTML=`Weather of <span>${nameval}<span>`
    temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
    description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
    wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h<span>`

    // Get current date and time
    var now = new Date();
    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString();
    datetime.innerHTML = `Date: <span>${date}</span><br>Time: <span>${time}</span>`;
  })

  .catch(err => alert('You entered Wrong city name'))
})
