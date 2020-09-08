function makearray(x,y){
  let arr = new Array(x);
  for (let i = 0; i < arr.length; i++){
			 arr[i] = new Array(y);
     }
  return arr
}

function flip(lst,x,y){
	
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
	strokeWeight(5);
	point(200,200)
	for (let i = 1; i < (grid.length)+1; i++){
		for (let j = 1; j < grid[0].length+1; j++){
			point(i*x_dis,j*y_dis);
		}
	}
}