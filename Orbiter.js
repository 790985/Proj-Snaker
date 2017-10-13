function Orbiter(loc,vel,clr,obj,r){
this.loc = loc;
this.vel = vel;
this.clr = clr;
this.obj = obj;
this.r = r;
this.radiusVector = new JSVector(0,80);
this.currentAngle = 0;
this.currentAngleV = 0.1;
this.degree = 0;
}
Orbiter.prototype.update = function(){
    this.currentAngle = this.currentAngle + this.currentAngleV;
    this
    //this.loc.y = 2 * PI * ((this.degree+1)/360)
    //if(this.degree <= 360){
    //  this.degree = 0;
    //}else{
    //  this.degree += 1;
    //}
    this.loc.setDirection(this.loc.y * Math.cos(.02) - this.loc.x * Math.sin(.02);
    //this.loc.y = this.loc.x * Math.cos(.02) + this.loc.y * Math.sin(.02);

               this.render;
}
Orbiter.prototype.render = function(){
    ctx.fillStyle = this.clr;
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.r, Math.PI*2,0,false);
    ctx.stroke();
    ctx.fill();
}
