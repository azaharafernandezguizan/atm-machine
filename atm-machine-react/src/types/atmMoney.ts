export type MoneyShape = 'bill' | 'coin';

export interface AtmMoney {
  value: number;
  type: MoneyShape;
}

export interface AtmCalculations {
  quantity: AtmMoney;
  amount: number;
}
