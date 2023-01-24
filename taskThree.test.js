const calculator = require('./taskThree')

describe("Eric calculator", ()=>{
    test('Adding 1+2 = 3', ()=>{
        expect(calculator.add(1, 2)).toBe(3)
    })
    test('Substructing 2-1 = 1', ()=>{
        expect(calculator.subtract(2, 1)).toBe(1)
    })
    test('Divide 2/1 = 2', ()=>{
        expect(calculator.divide(2, 1)).toBe(2)
    })
    test('Multiplying 1*2 = 2', ()=>{
        expect(calculator.multiply(1, 2)).toBe(2)
    })
})