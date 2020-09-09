function makearray(x,y){
  let arr = new Array(x);
  for (let i = 0; i < arr.length; i++){
			 arr[i] = new Array(y);
     }
  return arr
}


function fill_2d_array(arr){
	for (let i = 0; i < (grid.length); i++){
		for (let j = 0; j < grid[0].length; j++){
			arr[i][j] = new cell(i,j);
			if (i == 0 || j == 0 || i == grid.length-1 || j == grid.length-1){
				arr[i][j].alive = true;
			}
			else{
			arr[i][j].alive = Boolean(floor(random(2)));
			}
		}
	}
	return arr
}

function cell_block(i,j){
	return [[i-1,j-1],[i,j-1],[i+1,j-1],[i-1,j],[i+1,j],[i-1,j+1],[i,j+1],[i+1,j+1]]
}

// Births: Each dead cell adjacent to exactly three live neighbors will become live in the next generation.
// Death by isolation: Each live cell with one or fewer live neighbors will die in the next generation.
// Death by overcrowding: Each live cell with four or more live neighbors will die in the next generation.
// Survival: Each live cell with either two or three live neighbors will remain alive for the next generation.

function conway(lst){
	newlst = makearray(lst.length,lst[0].length);
	for (let i = 0; i < (grid.length); i++){
		for (let j = 0; j < grid[0].length; j++){
			thecell = lst[i][j];
			blocks = cell_block(i,j);
			neigh = 0;
			newlst[i][j] = new cell(i,j);
			if (i == 0 || j == 0 || i == grid.length-1 || j == grid.length-1){
				newlst[i][j] = lst[i][j];
			}
			else{
				for (indices of blocks){
					neigh += lst[indices[0]][indices[1]].alive ? 1 : 0;
				}
				if (neigh == 3 && thecell.alive == false){
					newlst[i][j].alive = true;
				}
				else if(neigh <= 1 && thecell.alive == true){
					newlst[i][j].alive = false;
				}
				else if(neigh >= 4 && thecell.alive == true){
					newlst[i][j].alive = false;
				}
				else if((neigh == 2 || neigh == 3) && thecell.alive == true){
					newlst[i][j].alive = lst[i][j].alive;
				}
				else{
					newlst[i][j].alive = lst[i][j].alive;
				}
			}
		}
	}
	return newlst;
}


function flip(lst,x,y){

}

//let te = color(79, 170, 170);
//let or = color(255,209,127);
//let go = color(255,215,0);
//let pin = color(255,51,153);

let grid;
let xrows=40;
let yrows=40;
let screen_x = 800;
let screen_y = 800;
let x_dis = screen_x/xrows;
let	y_dis = screen_y/yrows;
let x_p,y_p;
let fr = 10;
let count = 0;

function setup() {
	lte = color(0, 220, 250);
	te = color(79, 170, 170);
	orange = color(255,209,127);
	go = color(255,215,0);
	pin = color(255,51,153);
	
	createCanvas(screen_x,screen_y);
	frameRate(fr);
	grid = makearray(xrows,yrows);
	console.log(grid);
	grid = fill_2d_array(grid);
	console.log(grid);
}

function draw() {
	background('red');
	strokeWeight(5);
	stroke(lte);
	grid = conway(grid);
	
	for (let i = 0; i < (grid.length); i++){
		for (let j = 0; j < grid[0].length; j++){
			grid[i][j].show();
		}
	}
}