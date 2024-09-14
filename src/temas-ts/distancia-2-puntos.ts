export class Distancia{
    pX1:number;
    pY1:number;
    pX2:number;
    pY2:number;
    dis: number = 0;
    constructor(pX1:number, pY1:number, pX2:number, pY2:number){
        this.pX1 = pX1;
        this.pY1 = pY1;
        this.pX2 = pX2;
        this.pY2 = pY2;
    }
    distanciaO(){
        this.dis = Math.sqrt(((this.pX2-this.pX1)**2) + ((this.pY2 - this.pY1)**2));
    }

    imprimir(){
        console.log(`Punto 1 es: (${this.pX1},${this.pY1}) Punto 2 es: (${this.pX2},${this.pY2})`)
        console.log(`La distancia entre los 2 puntos es: ${this.dis}`)
    }
}
let dis2:Distancia;
dis2 = new Distancia(25,80,50,45)
dis2.distanciaO();
dis2.imprimir();