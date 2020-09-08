function makearray(x,y){
  let arr = new Array(x);
  for (let i = 0; i < arr.length; ++){
			 arr[i] = new Array(y);
     }
}

let grid;
let xrows=10;
let yrows=10;
let screen_x = 400;
let screen_y = 400;
let x_p,y_p;
let duh;

function setup() {
	createCanvas(400,400);
	x_dis = screen_x/xrows;
	y_dis = screen_y/yrows;
	grid = makearray(xrows,yrows);
	
}

function draw() {
	background(0,0,270);
	x_p = 
	y_p = 
	for (let i = 0; i < grid.length; i++){
		for (let j = 0; j < grid[0].length, j++){
			
		}
	}
}