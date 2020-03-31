import {figura} from './figura'
import {color} from './color'

export class circulo extends figura {
    constructor (icolor : color){
        super(icolor);
    }
        dibujar(){
        return ("Dibujando circulo..."+this.colour.pintar());
    }
}