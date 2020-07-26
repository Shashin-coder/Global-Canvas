class Buttons{
    constructor(){
        this.button1= createButton('Save');
        this.button1.style('width','100px');
        this.button1.style('height','70px');
        this.button1.style('font-size','30px');
        this.button1.style('background-color','green');

        this.button2= createButton('Clear');
        this.button2.style('width','100px');
        this.button2.style('height','70px');
        this.button2.style('font-size','30px');
        this.button2.style('background-color','green');
        
    }
    display(){
        this.button1.position(500,500);
        this.button2.position(650,500);
        
    }
    
}