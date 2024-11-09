import { ATM_MONEY_OPTIONS } from '../data/atmMoney';
import { AtmCalculations } from '../types/atmMoney';

const compareNumbers = (firstNumber: number, secondNumber: number) =>
  firstNumber - secondNumber;

const getAvailableQuantities = (moneyToReturn: number) => {
  const moneyQuantityOptions = ATM_MONEY_OPTIONS.map((option) => option.value);

  return moneyQuantityOptions
    .filter((currentAmount) => Math.floor(moneyToReturn / currentAmount) > 0)
    .sort(compareNumbers);
};

const getCurrentQuantity = (quantityValue: number) =>
  ATM_MONEY_OPTIONS.find((option) => option.value === quantityValue);

export const getExactWithdraw = (moneyToReturn: number) => {
  let leftMoneyToReturn = moneyToReturn;
  const quantitiesToReturn: AtmCalculations[] = [];

  while (leftMoneyToReturn > 0) {
    const availableQuantities = getAvailableQuantities(leftMoneyToReturn);

    const greaterQuantity = Math.max(...availableQuantities);

    const greaterMoneyOption = getCurrentQuantity(greaterQuantity);

    if (greaterMoneyOption) {
      const quantityAmount = Math.floor(leftMoneyToReturn / greaterQuantity);

      const calculatedQuantity = {
        quantity: structuredClone(greaterMoneyOption),
        amount: quantityAmount,
      };

      quantitiesToReturn.push(calculatedQuantity);

      leftMoneyToReturn = leftMoneyToReturn - quantityAmount * greaterQuantity;
    }
  }

  return quantitiesToReturn;
};
