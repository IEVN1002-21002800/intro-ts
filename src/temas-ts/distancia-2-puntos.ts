export class Distancia{
    protected pX1:number;
    protected pY1:number;
    protected pX2:number;
    protected pY2:number;
    dis: number = 0;
    dis2: number = 0;
    
    constructor(pX1:number, pY1:number, pX2:number, pY2:number){
        this.pX1 = pX1;
        this.pY1 = pY1;
        this.pX2 = pX2;
        this.pY2 = pY2;
    }
    
    distancia0(x1: number, y1:number, x2:number, y2:number): number{
        this.dis = Math.sqrt(((x2-x1)**2) + ((y2 - y1)**2));
        this.dis2 = Math.sqrt(((this.pX2-this.pX1)**2) + ((this.pY2 - this.pY1)**2));
        return this.dis;
    }

    imprimir(){
        console.log(`Punto 1 es: (${this.pX1},${this.pY1}) Punto 2 es: (${this.pX2},${this.pY2})`)
        console.log(`La distancia entre los 2 puntos es: ${this.dis2}`)
    }
}

let dis2:Distancia;
dis2 = new Distancia(-4,-3,2,5)
dis2.distancia0(-4,-3,2,5)
dis2.imprimir()