//New made blank object.

//Constructor function
function Pencil(name, price, qty, color) {
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.color = color;

};
Pencil.prototype.write = function () {
        let h1 = document.createElement("h1");
        h1.textContent = "How are you";
        h1.style.color = this.color;
        document.body.append(h1);
};

Pencil.prototype.length=5  //Does not assign constant value into constructor function instead use .prototype
let pe=new Pencil("Doms",5,8,"Green"); 
console.log(pe)
pe.write();



//Class

class CreateSome{
    constructor(name,price,qty,color){
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.color = color;
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.append(h1);
    }
}

let v=new CreateSome("natraj",5,8,"Red")
v.write("Helllo")

//extend (classical inheritance) class-> class
class Pen extends CreateSome{
    constructor(name,price,qty,color){
        super(name,price,qty,color)
        this.role="pen"
    }
}

let v1=new Pen("natraj",5,8,"Yellow")
v1.write("Pen")

//prototyoe inheritance  obj -> obj
let coffe={
    color:"yellow",
}

let tea=Object.create(coffe)
console.log(tea)
9