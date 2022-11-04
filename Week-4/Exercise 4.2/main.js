function person (name){
    this.name = name;
};

function teacher ( name , subject){
    person.call(this , name);
    this.subject = subject;
}

teacher.prototype.printOut =  function(){
    console.log(this.name + " is now teaching " + this.subject + " subject.");
}

Object.setPrototypeOf(teacher.prototype , person.prototype);

const teacher1 = new teacher("Praduman" , "front-end");
teacher1.printOut();