function makearray(x,y){
  let arr = new Array(x);
  for (let i = 0; i < arr.length; i++){
			 arr[i] = new Array(y);
     }
  return arr
}

function fill_2d_array(arr){
	for (let i = 1; i < (grid.length); i++){
		for (let j = 1; j < grid[0].length; j++){
			arr[i][j] = floor(random(2));
		}
	}
	return arr
}

// Births: Each dead cell adjacent to exactly three live neighbors will become live in the next generation.
// Death by isolation: Each live cell with one or fewer live neighbors will die in the next generation.
// Death by overcrowding: Each live cell with four or more live neighbors will die in the next generation.
// Survival: Each live cell with either two or three live neighbors will remain alive for the next generation.
def conway(lst){
	for (let i = 1; i < (grid.length); i++){
		for (let j = 1; j < grid[0].length; j++){
			
		}
	}
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
	grid = fill_2d_array(grid);
}

function draw() {
	background(79, 170, 170);
	strokeWeight(10);
	point(200,200)
	for (let i = 1; i < (grid.length); i++){
		for (let j = 1; j < grid[0].length; j++){
			if (grid[i][j] == 0){
				stroke('black');
			}
			else{
				stroke('white');
			}
			point(i*x_dis,j*y_dis);
		}
	}
}