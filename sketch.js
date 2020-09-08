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

function cell_block(i,j){
	return [[i-1,j-1],[i,j-1],[i+1,j-1],[i-1,j],[i,j],[i+1,j],[i-1,j+1],[i,j+1],[i+1,j+1]]
}

// Births: Each dead cell adjacent to exactly three live neighbors will become live in the next generation.
// Death by isolation: Each live cell with one or fewer live neighbors will die in the next generation.
// Death by overcrowding: Each live cell with four or more live neighbors will die in the next generation.
// Survival: Each live cell with either two or three live neighbors will remain alive for the next generation.
function conway(lst){
	newlst = makearray(lst.length,lst[0].length)
	for (let i = 1; i < (grid.length); i++){
		for (let j = 1; j < grid[0].length; j++){
			cell = lst[i][j]
			blocks = cell_block(i,j);
			neigh = 0;
			if (i == 0 || j == 0 || i == grid.length-1 || j == grid.length-1){
				newlst[i][j] = lst[i][j];
			}
			else{
				for (indices of blocks){
					neigh += lst[indices[0]][indices[1]]
				}
				if (neigh == 3 && cell == 0){
					newlst[i][j] = 1;
				}
				else if(neigh <= 1 && cell == 1){
					newlst[i][j] = 0;
				}
				else if(neigh >= 4 && cell == 1){
					newlst[i][j] = 0;
				}
				else if((neigh == 2 || neigh == 3) && cell == 1){
					newlst[i][j] = lst[i][j];
				}
				else{
					newlst[i][j] = lst[i][j];
				}
			}
		}
	}
	return newlst;
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
	
	grid = conway(grid);
	console.log(grid);
	
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