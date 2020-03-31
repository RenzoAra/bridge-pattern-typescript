import {figura} from './figura'
import {color} from './color'

export class rectangulo extends figura {
    constructor (icolor : color){
        super(icolor);
    }
        dibujar(){
        return ("Dibujando rectangulo..."+(this.colour.pintar()))
    }
}