class Stone extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage('Plucking mangoes/stone.png');
        this.body.density = 1.2;

    }
    display(){
        super.display();
    }

}