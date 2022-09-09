
function getTime() {
const now = new Date();
const seconds = now.getSeconds();
const minutes =now.getMinutes();
const hours = now.getHours();


console.log(now)

//calculate clock hand rotate values  (according to 360deg) using the cureent time
hrValue = (hours * 30) + (minutes * 6) /12;
miValue = minutes * 6;
secValue = seconds * 6;



document.getElementById('seconds-hand').style.transform = 'rotate(' + secValue + 'deg)';
document.getElementById('hour-hand').style.transform = 'rotate(' + hrValue + 'deg)';
document.getElementById('minute-hand').style.transform = 'rotate(' + miValue + 'deg)';


}

setInterval(getTime, 1000)





























