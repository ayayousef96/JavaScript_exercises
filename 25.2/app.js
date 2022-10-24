function Nameobj(name) {
    this.name = name;
    this.namePrint = function(){
        console.log(this.name);
    };
    this.printDelayName = function(){
        setTimeout(this.namePrint.bind(this), 2000);
    };
}

let aya = new Nameobj('aya');

aya.namePrint();
aya.printDelayName();