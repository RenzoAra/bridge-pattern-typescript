import { expect } from "chai";
import { negro } from "../src/negro"

describe("esto debe pintar de negro", function(){
      it("pintar negro",function(){
            let nn = new negro();
            let result = nn.pintar();
            expect(result).equal("Pintando de color negro");
      });
});
