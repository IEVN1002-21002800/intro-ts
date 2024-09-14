import { Distancia } from "./distancia-2-puntos";

class Triangulo extends Distancia{
    private pX3: number;
    private pY3: number;
    private lado1:number = 0;
    private lado2:number = 0;
    private lado3:number = 0;

    constructor(pX1:number, pY1:number, pX2:number, pY2:number, pX3:number, pY3:number){
        super(pX1, pY1, pX2, pY2);
        this.pX3 = pX3;
        this.pY3 = pY3;
    }

    public Tri():boolean{
        this.lado1 = this.distancia0(this.pX1, this.pY1, this.pX2, this.pY2); //Punto 1 a 2
        this.lado2 = this.distancia0(this.pX2, this.pY2, this.pX3, this.pY3); //Punto 2 a 3
        this.lado3 = this.distancia0(this.pX1, this.pY1, this.pX3, this.pY3); //Punto 1 a 3

        return  this.lado1+this.lado2 > this.lado3 && 
                this.lado2+this.lado3 > this.lado1 && 
                this.lado1+this.lado3 > this.lado2;
    }

    public imprimirTri(): void {
        if (this.Tri()) {
            tri.imprimirT()
            console.log('Los tres puntos forman un triángulo.');
        } else {
            tri.imprimirT()
            console.log('Los tres puntos NO forman un triángulo.');
        }
    }

    imprimirT(){
        console.log(`Punto 1 es: (${this.pX1},${this.pY1}) Punto 2 es: (${this.pX2},${this.pY2}) Punto 3 es: (${this.pX3},${this.pY3})`)
        console.log(`La distancia entre puntos 1 y 2 es: ${this.lado1}`)
        console.log(`La distancia entre puntos 2 y 3 es: ${this.lado2}`)
        console.log(`La distancia entre puntos 1 y 3 es: ${this.lado3}`)
    }
}

let tri:Triangulo;
tri = new Triangulo(-10,6,10,0,0,3)
tri.imprimirTri();

//Terminado
