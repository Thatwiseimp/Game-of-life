function cell(x,y){
	this.x = x;
	this.y = y;
	this.xloc = this.x * y_dis;
	this.yloc = this.y * x_dis;
	this.alive = false;
	
	this.show = function(){
		if (this.alive){
			stroke(lte);
			fill('black');
			rect(this.xloc,this.yloc,x_dis,y_dis);
		}
		else {
			stroke(lte)
			fill('white');
			rect(this.xloc,this.yloc,x_dis,y_dis);
			
		}
	}
	
	this.flip = function(){
		if (this.alive){
			this.alive = false;
		}
		else{
			this.alive = true;
		}
	}
}
