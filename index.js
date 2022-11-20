let points = 0;
let cpc = 1;
let cps = 1;

document.getElementById("click").onclick = increase();

function increase () {
    points += cpc;
    document.getElementById("clicks").innerHTML = points;
}
function clickTime () {
    setInterval( increase, () => {
	points += cps;
    document.getElementById("clicks").innerHTML = points;
}, 1000);
}