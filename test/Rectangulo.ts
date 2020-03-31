import { expect } from "chai";
import { rectangulo } from "../src/rectangulo";
import { rojo } from "../src/rojo";
import { negro } from "../src/negro";

describe("esto debe dibujar un rectangulo rojo", function(){
      it("dibujar rectangulo rojo",function(){
            let nrr = new rectangulo(new rojo());
            let result = nrr.dibujar();
            expect(result).equal("Dibujando rectangulo...Pintando de color rojo");
      });
});


describe("esto debe dibujar un rectangulo negro", function(){
    it("dibujar un rectangulo negro",function(){
        let nrn = new rectangulo(new negro());
        let result = nrn.dibujar();
        expect(result).equal("Dibujando rectangulo...Pintando de color negro");
    });
});