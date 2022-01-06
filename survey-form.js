function Animal(name,numLegs,fly,color)
{
    this.name=name;
    // this.numLegs=numLegs;
    this.fly=false;
    this.color=color;
}
function Phone(brand,model,color,price)
{
    this.brand=brand;
    this.model=model;
    this.color=color;
    this.price=price;
}
Animal.prototype={
    numLegs:4
}

function Box()
{
    let con=document.getElementById("box");
    this.color=function()
    {
        con.setAttribute("background-image","234deg,red,blue");
    } 
}
let kk=new Box();
kk.color();