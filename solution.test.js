import { describe, it, test, expect } from "jest";
const {max,sum} =require("./solution.js");

describe (`max`, () => {
    it('should return the greater value in the parameter', ()=>{
        expect(max(3,6)).toBe(6);
    })
})
describe (`sum`, () => {
    it ('it should return the sum of the 2 numbers' ,()=>{
        expect(sum(2,3)).toBe(5);
    })
})