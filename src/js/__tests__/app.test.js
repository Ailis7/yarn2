import testerYarn from '../app';

test('simple test', () => {
  const result = testerYarn('wood');
  expect(result).toEqual('standart tabel');
  const elseResult = testerYarn('iron');
  expect(elseResult).toEqual('interesting tabel');
});
