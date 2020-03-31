import { expect } from "chai";
import { rojo } from "../src/rojo"

describe("esto debe pintar de rojo", function(){
      it("pintar rojo",function(){
            let nr = new rojo();
            let result = nr.pintar();
            expect(result).equal("Pintando de color rojo");
      });
});
