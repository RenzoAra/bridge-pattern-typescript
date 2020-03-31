import { expect } from "chai";
import { circulo } from "../src/circulo";
import { rojo } from "../src/rojo";
import { negro } from "../src/negro";

describe("esto debe dibujar un circulo rojo", function(){
      it("dibujar circulo rojo",function(){
            let ncr = new circulo(new rojo());
            let result = ncr.dibujar();
            expect(result).equal("Dibujando circulo...Pintando de color rojo");
      });
});


describe("esto debe dibujar un circulo negro", function(){
    it("dibujar un circulo negro",function(){
        let ncn = new circulo(new negro());
        let result = ncn.dibujar();
        let result3 = ncn.colour.pintar();
        expect(result).equal("Dibujando circulo...Pintando de color negro");
    });
});