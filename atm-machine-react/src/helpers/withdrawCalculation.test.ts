import { beforeEach, expect, test } from 'vitest';
import { getExactWithdraw } from './withdrawCalculation';

beforeEach(() => {
  // you can access variables inside a factory
});

test('getExactWithdraw works with 436', async () => {
  const moneyToTest = 436;
  const expectedResult = [
    {
      quantity: {
        value: 200,
        type: 'bill',
      },
      amount: 2,
    },
    {
      quantity: {
        value: 20,
        type: 'bill',
      },
      amount: 1,
    },
    {
      quantity: {
        value: 10,
        type: 'bill',
      },
      amount: 1,
    },
    {
      quantity: {
        value: 5,
        type: 'bill',
      },
      amount: 1,
    },
    {
      quantity: {
        value: 1,
        type: 'coin',
      },
      amount: 1,
    },
  ];

  const calculatedResult = getExactWithdraw(moneyToTest);

  expect(calculatedResult).not.toBeNull();
  expect(calculatedResult.length).toBe(5);
  expect(calculatedResult).toStrictEqual(expectedResult);
});
