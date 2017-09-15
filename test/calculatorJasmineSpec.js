import {Calculator} from '../src/calculatorModel';

it('should work', () => {
    expect(new Calculator().add(2, 2)).toBe(4);
});
