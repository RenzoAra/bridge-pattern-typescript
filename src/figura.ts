import {color} from './color'

export abstract class figura {
    colour:color;
    constructor(icolor:color) {
        this.colour = icolor;
    }
    abstract dibujar();
}

export default figura;