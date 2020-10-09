import sum from './sum';

describe('Sum', () => {

  expect(sum(2, 1)).toBe(3);
  it('Should be a sum', () => {
    expect(sum(3, 2)).toBe(5);
  });

  it('Should be a string', () => {
    expect(sum(2, '2')).toContain('22')
  });

  it('Should be no numeric', () => {
    expect(sum(undefined, 1)).toBeNaN();
  });

});
