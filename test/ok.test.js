import { expect } from "chai"
import { describe, it } from "mocha";
import { ok } from "../src/ok.js"

describe("test", () => {

    it("Should return \"ok\"", () => {
        const result = ok();
        expect(result).to.equal("ok");

    })

})