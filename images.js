

// This global value checks if the ctx.scale value has been set, and disables future .scale calls
// 		This keeps it from growing each click of any button.

var check = 0;

function smiley0(CANVAS) {
		var canvas = document.getElementById(CANVAS);

		var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		head();
		eyes();
		level1_eyebrows();
		nose();
		pupils();
		level1_mouth();
}

function level1_mouth(){
		ctx.strokeStyle = "rgb(55, 05, 86)";
		ctx.beginPath();
		ctx.moveTo(56, 90);
		ctx.bezierCurveTo(70,100,80,100,94,90);
		ctx.stroke();
}

function level1_eyebrows(){
	ctx.beginPath();
	ctx.strokeStyle = "rgb(55, 05, 86)";
	ctx.fillStyle = "rgba(175, 20, 40, 0.2)";
	ctx.moveTo(56,55);
	ctx.bezierCurveTo(60,49,67,49,72,55);
	ctx.stroke();
	

	ctx.moveTo(79, 55);
	ctx.bezierCurveTo(82,49,92,49,95,55);
	ctx.stroke();
	
}

function nose(){
	ctx.beginPath();
	ctx.strokeStyle = "rgb(55, 05, 86)";
	ctx.fillStyle = "rgba(175, 20, 40, 0.2)";
	ctx.moveTo(68, 77);
	ctx.bezierCurveTo(72,81,80, 81,82,77);
	ctx.stroke();
	
}

function pupils(){
	ctx.beginPath();
	ctx.strokeStyle = "rgb(55, 05, 86)";
	ctx.fillStyle = "rgba(175, 20, 40, 0.2)";
	ctx.arc(64,65,1,0,2*Math.PI,1);
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = "rgb(55, 05, 86)";
	ctx.arc(86,65,1,0,2*Math.PI,1);
	ctx.fill();
	ctx.stroke();
}

function head(){
	ctx.fillStyle = "rgba(255, 200, 70, 0.2)";
	ctx.strokeStyle = "rgb(55, 05, 86)";
	ctx.beginPath();
	ctx.arc(75,75,35,0,2*Math.PI,1);
	ctx.fill();
	ctx.stroke();
}

function eyes() {
	ctx.beginPath();
	ctx.strokeStyle = "rgb(55, 05, 86)";
	ctx.fillStyle = "rgba(175, 20, 40, 0.2)";
	ctx.arc(64,65,6,0,2*Math.PI,1);
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.strokeStyle = "rgb(55, 05, 86)";
	ctx.arc(86,65,6,0,2*Math.PI,1);
	ctx.fill();
	ctx.stroke();	
}

function smiley1(CANVAS) {
	var canvas = document.getElementById(CANVAS);
	var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	head();
	eyes();
	level0_eyebrows();
	nose();
	pupils();
	level0_mouth();
}

function smiley2(CANVAS) {
	var canvas = document.getElementById(CANVAS);
	var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	head();
	eyes();
	level2_eyebrows();
	nose();
	pupils();
	level2_mouth();
}

function level2_eyebrows(){
	ctx.beginPath();
	ctx.strokeStyle = "rgb(55, 05, 86)";
	ctx.fillStyle = "rgba(175, 20, 40, 0.2)";
	ctx.moveTo(56,55);
	ctx.bezierCurveTo(57,53,71,53,72,55);
	ctx.stroke();

	ctx.moveTo(79, 55);
	ctx.bezierCurveTo(78,53,94,53,95,55 );
	ctx.stroke();
}

function level2_mouth(){
	ctx.strokeStyle = "rgb(55, 05, 86)";
	ctx.beginPath();
	ctx.moveTo(63, 95 );
	ctx.bezierCurveTo(61 ,93,88,93,90,95);
	ctx.stroke();
}

function smiley3(CANVAS) {
	var canvas = document.getElementById(CANVAS);
	var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);	

	head();
	eyes();
	level3_eyebrows();	
	nose();	
	pupils();
	level3_mouth();
}

function level3_eyebrows(){
	ctx.beginPath();
	ctx.strokeStyle = "rgb(55, 05, 86)";
	ctx.fillStyle = "rgba(175, 20, 40, 0.2)";
	ctx.moveTo(55,60);
	ctx.bezierCurveTo(57,53,71,53,72,53);
	ctx.stroke();
	
	ctx.moveTo(78, 53);
	ctx.bezierCurveTo(78,53,94,53,96,58 );
	ctx.stroke();	
}

function level3_mouth(){
	ctx.strokeStyle = "rgb(55, 05, 86)";
	ctx.beginPath();
	ctx.moveTo(63, 96);
	ctx.bezierCurveTo(61,93,88,93,90,96);
	ctx.stroke();
}

function smiley4(CANVAS) {
	var canvas = document.getElementById(CANVAS);
	var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);	
	
	head();	
	eyes();	
	level4_eyebrows();
	nose();
	pupils();
	level4_mouth();
}

function level4_eyebrows(){
	ctx.beginPath();
	ctx.strokeStyle = "rgb(55, 05, 86)";
	ctx.fillStyle = "rgba(175, 20, 40, 0.2)";
	ctx.moveTo(53 , 63);
	ctx.bezierCurveTo(54,66,67,53,67,53);
	ctx.stroke();

	ctx.moveTo(83, 54);
	ctx.bezierCurveTo(83,54,97,66,99,66 );
	ctx.stroke();	
}

function level4_mouth(){
	ctx.strokeStyle = "rgb(55, 05, 86)";
	ctx.beginPath();
	ctx.moveTo(63, 99);
	ctx.bezierCurveTo(63,94,87,94,90,99);
	ctx.stroke();
}

function smiley5(CANVAS) {
	var canvas = document.getElementById(CANVAS);
	var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	head();
	eyes();
	level5_eyebrows();	
	nose();	
	pupils5();	
	level5_mouth();
}
function level5_eyebrows(){
	ctx.beginPath();
	ctx.strokeStyle = "rgb(55, 05, 86)";
	ctx.fillStyle = "rgba(175, 20, 40, 0.2)";
	ctx.moveTo(52,66);
	ctx.bezierCurveTo(58,68,70,55,66,52);
	ctx.stroke();
	
	ctx.moveTo(85, 52);
	ctx.bezierCurveTo(81,56,91,66,101,68 );
	ctx.stroke();
	
}

function level5_mouth(){
	ctx.strokeStyle = "rgb(55, 05, 86)";
	ctx.beginPath();
	ctx.moveTo(63, 99);
	ctx.bezierCurveTo(68,84,83,84,90,99);
	ctx.stroke();
}

function pupils5(){
	ctx.beginPath();
	ctx.strokeStyle = "rgb(55, 05, 86)";
	ctx.fillStyle = "rgba(175, 20, 40, 0.2)";
	ctx.arc(64,65,0.75,0,2*Math.PI,1);
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.strokeStyle = "rgb(55, 05, 86)";
	ctx.arc(86,65,0.75,0,2*Math.PI,1);
	ctx.fill();
	ctx.stroke();
}

function level0_eyebrows(){
	ctx.beginPath();
	ctx.strokeStyle = "rgb(55, 05, 86)";
	ctx.fillStyle = "rgba(175, 20, 40, 0.2)";
	ctx.moveTo(56,55);
	ctx.bezierCurveTo(60,49,67,49,72,55);
	ctx.stroke();
	
	ctx.moveTo(79, 55);
	ctx.bezierCurveTo((82 ),(49),(92 ),49,95,55 );
	ctx.stroke();
	
}

function level0_mouth(){
	ctx.strokeStyle = "rgb(55, 05, 86)";
	ctx.beginPath();
	ctx.moveTo(56, 82 );
	ctx.bezierCurveTo(67,100 ,83 ,100,93 ,82);
	ctx.stroke();
}

function pain_line(CANVAS) {
	var canvas = document.getElementById(CANVAS);
	var context = canvas.getContext("2d");
	var linearGradient1 = context.createLinearGradient(150, 0, 650,0);
	linearGradient1.addColorStop(0, 'rgb(0, 253, 255)');
	linearGradient1.addColorStop(0.5, 'rgb(209, 23, 205)');
	linearGradient1.addColorStop(1, 'rgb(243, 16, 34)');

	context.fillStyle = linearGradient1;

	// Length of pain bar
	context.fillRect(70,42,601, 10);
	
	//Indices
	context.fillRect(70, 22, 2, 20);
	context.fillRect(130, 22, 2, 20);
	context.fillRect(190, 22, 2, 20);
	context.fillRect(250, 22, 2, 20);
	context.fillRect(310, 22, 2, 20);
	context.fillRect(370, 22, 2, 20);
	context.fillRect(430, 22, 2, 20);
	context.fillRect(490, 22, 2, 20);
	context.fillRect(550, 22, 2, 20);
	context.fillRect(610, 22, 2, 20);
	context.fillRect(669, 22, 2, 20);

}

function face(){
   	var CANVAS = "box2";
   	var canvas = document.getElementById(CANVAS);
	ctx = canvas.getContext("2d");
	smiley0(CANVAS);
} 
function face2(){
    var CANVAS = "box";
    var canvas = document.getElementById(CANVAS);
	ctx = canvas.getContext("2d");
	smiley1(CANVAS);
}

function face3(){
    var CANVAS = "box3";
    var canvas = document.getElementById(CANVAS);
	ctx = canvas.getContext("2d");
	smiley2(CANVAS);
}
    
function face4(){
    var CANVAS = "box4";
    var canvas = document.getElementById(CANVAS);
	ctx = canvas.getContext("2d");
	smiley3(CANVAS);
}

function face5(){
    var CANVAS = "box5";
    var canvas = document.getElementById(CANVAS);
	ctx = canvas.getContext("2d");
	smiley4(CANVAS);
}
    
function face6(){
    var CANVAS = "box6";
    var canvas = document.getElementById(CANVAS);
	ctx = canvas.getContext("2d");
	smiley5(CANVAS);
}
    
function loop7(){
    var CANVAS = "testPathArc7";
	pain_line(CANVAS);
}

function loop8(){
    var CANVAS = "testPathArc8";
	smiley5(CANVAS);
}

function loop9(){
    var CANVAS = "testPathArc8";
	smiley4(CANVAS);
}

function loop10(){
    var CANVAS = "testPathArc8";
	smiley3(CANVAS);
}
    
function loop11(){
    var CANVAS = "testPathArc8";
	smiley2(CANVAS);
}

function loop12(){
    var CANVAS = "testPathArc8";
	smiley1(CANVAS);
}

function loop13(){
    var CANVAS = "testPathArc8";
	smiley0(CANVAS);
}

function main7() {
	var canvas = document.getElementById("testPathArc8");	
	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if (check === 0){
		ctx.scale(3, 3);
		check++;
	}
	loop12();
}

function main() {
    var canvas = document.getElementById("testPathArc8");
	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if (check === 0){
		ctx.scale(3, 3);
		check++;
	}
	loop13();
}
 
function main3() {
    var canvas = document.getElementById("testPathArc8");
	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if (check === 0){
		ctx.scale(3, 3);
		check++;
	}
	loop11();
}

function main4() {
	var canvas = document.getElementById("testPathArc8");
	
	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if (check === 0){
		ctx.scale(3, 3);
		check++;
	}
	loop10();
}
    
function main5() {
	var canvas = document.getElementById("testPathArc8");

	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if (check === 0){
		ctx.scale(3, 3);
		check++;
	}
	loop9();
}
    
function main6() {
	var canvas = document.getElementById("testPathArc8");
	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if (check === 0){
		ctx.scale(3, 3);
		check++;
	}
	loop8();
}
    
function main_pain() {
	var canvas = document.getElementById("testPathArc7");	
	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	loop7();
}
