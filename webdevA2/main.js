//HostingFullScreenWeb & MobileApp
const btnFS=document.querySelector("#btnFS");
const btnWS=document.querySelector("#btnWS");
btnFS.addEventListener("click",enterFullscreen);
btnWS.addEventListener("click",exitFullscreen);

function enterFullscreen() { //must be called by user generated event
if (document.documentElement.requestFullscreen) {
document.documentElement.requestFullscreen();
} else if (document.documentElement.mozRequestFullScreen) { // Firefox
document.documentElement.mozRequestFullScreen();
} else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
document.documentElement.webkitRequestFullscreen();
} else if (document.documentElement.msRequestFullscreen) { // IE/Edge
document.documentElement.msRequestFullscreen();
}
}
function exitFullscreen() {
if (document.exitFullscreen) {
document.exitFullscreen();
} else if (document.mozCancelFullScreen) { // Firefox
document.mozCancelFullScreen();
} else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
document.webkitExitFullscreen();
} else if (document.msExitFullscreen) { // IE/Edge
document.msExitFullscreen();
}
}


//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page4btn=document.querySelector("#page4btn");
const page5btn=document.querySelector("#page5btn");
const page5 = document.getElementById("page5");
var allpages = document.querySelectorAll(".page");

function hideall() {
	for (let onepage of allpages) {
		onepage.style.display="none";
	}
	page1btn.style.color="";
	page2btn.style.color="";
	page3btn.style.color="";
	page4btn.style.color="";
	page5btn.style.color="";
	page1btn.style.background="";
	page2btn.style.background="";
	page3btn.style.background="";
	page4btn.style.background="";
	page5btn.style.background="";
	page5.classList.remove("check"); //this line is to remove the class so the setInterval in page5 won't generate images while invisible
}
function show(pgno) {
	hideall();
	let onepage=document.querySelector("#page"+pgno);
	onepage.style.display= "";
}
page1btn.addEventListener("click", function () {
	show(1);
	page1btn.style.background="rgb(65, 105, 225)";
	page1btn.style.color="#B3EBF2";
});
page2btn.addEventListener("click", function () {
	show(2);
	page2btn.style.background="rgb(65, 105, 225)";
	page2btn.style.color="#B3EBF2";
});
page3btn.addEventListener("click", function () {
	show(3);
	page3btn.style.background="rgb(65, 105, 225)";
	page3btn.style.color="#B3EBF2";
});
page4btn.addEventListener("click", function () {
	show(4);
	page4btn.style.background="rgb(65, 105, 225)";
	page4btn.style.color="#B3EBF2";
});
page5btn.addEventListener("click", function () {
	show(5);
	page5btn.style.background="rgb(65, 105, 225)";
	page5btn.style.color="#B3EBF2";
	page5.classList.add("check"); //added this line so the setInterval in page5 can generate the images
});
hideall();

const hamBtn=document.querySelector("#hamIcon");
const menuItemsList=document.querySelector("nav ul");
hamBtn.addEventListener("click", toggleMenus);

function toggleMenus() {
	menuItemsList.classList.toggle("menuShow");
	if (menuItemsList.classList.contains("menuShow")) {
		hamBtn.innerHTML="Close Menu";
		hamBtn.style.background="rgb(89, 122, 246)";
	    hamBtn.style.color="#B3EBF2";
	}
	else {
		hamBtn.innerHTML="Open Menu";
		hamBtn.style.background="rgba(135, 206, 235, 0.3)";
	    hamBtn.style.color="black";
	}
}

/*Quiz JS*/
const btnSubmit=document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click", CheckAns);
const btnReset=document.querySelector("#btnReset");
btnReset.addEventListener("click", ResetAns);
const scorebox=document.querySelector("#scorebox");
var q1,q2,q3,q4;

function CheckAns(){
	let score=0;
	q1=document.querySelector("input[name='q1']:checked").value;
	console.log(q1);
	if(q1 == "brownrice")score++;
	
	q2=document.querySelector("input[name='q2']:checked").value;
	console.log(q2);
	if(q2 == "E")score++;
	
	q3=document.querySelector("input[name='q3']:checked").value;
	console.log(q3);
	if(q3 == "selenium")score++;
	
	q4=document.querySelector("input[name='q4']:checked").value;
	console.log(q4);
	if(q4 == "ans4")score++;
	
	scorebox.innerHTML = `Score:${score}`;
	
}
function ResetAns(){
	let j=document.querySelectorAll(".radio");
	
	for (let i=0; i<14; i++) {
		j[i].checked = false;
	}
	scorebox.innerHTML = "Not submitted";
}

/*Mini Game*/
var miniGameScore = 0;
var counter = 0;
var startCount = 0;
var timeCount = 0;
const gameContainer = document.getElementById("gameContainer");
const scoreboard = document.getElementById("scoreboard");
const munchAudio = new Audio("audio/eating.mp3");
const failAudio = new Audio("audio/fail.mp3");
const resetBtn = document.querySelector("#miniGameReset");
const startBtn = document.querySelector("#startMiniGame");
const timer = document.querySelector("#timer");
const result = document.querySelector("#MGTitle");


setInterval(generateRice, 1200);
setInterval(generateBrownRice, 700);
setInterval(timeDecrement, 1000)

gameContainer.addEventListener("click", eventFn);
resetBtn.addEventListener("click", function() {
	scoreboard.innerHTML = "Score: 0";
	miniGameScore = 0;
	resetBtn.style.background="";
	result.innerHTML = "Resetted";
	startCount = 0;
	timeCount = 0;
	timer.innerHTML = "Has not started";
});
startBtn.addEventListener("click", function() {
	miniGameScore = 0;
	timeCount = 40;
	startCount = 1;
	startBtn.style.background = ""
});


function GetRandom(min,max) {
	return Math.round(Math.random() * (max - min)) + min;
}
function generateRice(){
	if (counter < 50 && timeCount != 0) { //this if statement prevents the rice images from generating when the page is not shown and to avoid having too many images in the page
		let rice = document.createElement("img");
		rice.src = "images/rice.png";
		rice.alt = "rice";
		rice.classList.add("rice")
		if (window.innerWidth <= 800) {
			rice.style.left = GetRandom(0,250)+"px";
		    rice.style.top = GetRandom(100,400)+"px";
		    rice.style.position = "absolute";
		    gameContainer.appendChild(rice);
		    counter++;
		}
		else {
			rice.style.left = GetRandom(0,800)+"px";
			rice.style.top = GetRandom(100,400)+"px";
			rice.style.position = "absolute";
			gameContainer.appendChild(rice);
			counter++;
		}
	}
}
function generateBrownRice(){
	if (counter < 50 && timeCount != 0) { //this if statement prevents the rice images from generating when the page is not shown and to avoid having too many images in the page
		let brownRice = document.createElement("img");
		brownRice.src = "images/brownrice.png";
		brownRice.alt = "brown rice";
		brownRice.className = "brownrice";
		if (window.innerWidth <= 800) {
			brownRice.style.left = GetRandom(0,250)+"px";
		    brownRice.style.top = GetRandom(100,400)+"px";
		    brownRice.style.position = "absolute";
		    gameContainer.appendChild(brownRice);
		    counter++;
		}
		else {
			brownRice.style.left = GetRandom(0,1200)+"px";
			brownRice.style.top = GetRandom(100,400)+"px";
			brownRice.style.position = "absolute";
			gameContainer.appendChild(brownRice);
			counter++;
		}
	}
}
function timeDecrement() {
	if (timeCount != 0) {
	    timeCount--;
	    timer.innerHTML = "Time: "+timeCount;
	}
	else if (timeCount == 0 && startCount == 1) {
		if (miniGameScore >= 30) {
			result.innerHTML = "Good Job! You win!";
		}
		else {
			result.innerHTML = "Sorry, you lost.";
		}
		startCount = 0;
	}
}
function eventFn(evt) {
	var sender = evt.target;
	if (sender.id != "gameContainer" && sender.id != "miniGameReset" && sender.id != "startMiniGame" && sender.id != "MGTitle") {
		 if (sender.className == "brownrice") {
			 miniGameScore++;
			 sender.classList.add("anim");
			 munchAudio.play();
			 setTimeout(function() {sender.remove();}, 300);
			 scoreboard.innerHTML = "Score: "+miniGameScore;
			 counter--;
		 }
		 else {
			 if (miniGameScore > 0) {
			     miniGameScore--
			 }
			 sender.classList.add("anim");
			 failAudio.play();
			 setTimeout(function() {sender.remove();}, 300);
			 scoreboard.innerHTML = "Score: "+miniGameScore;
			 counter--;
		 }
	}
}
