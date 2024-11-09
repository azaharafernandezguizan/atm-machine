import { getExactWithdraw } from '@/helpers/withdrawCalculation';
import styles from '@/styles/Home.module.css';
import { AtmCalculations } from '@/types/atmMoney';
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState<AtmCalculations[]>([]);

  const calculateMoney = (formData: any) => {
    const amountDesired = formData.get('withdraw');

    const calculatedResult = getExactWithdraw(amountDesired);

    setResult(calculatedResult);
  };

  return (
    <>
      <form action={calculateMoney}>
        <label>Type the amount you want to withdraw</label>

        <input type="number" name="withdraw" />

        <button type="submit">Withdraw</button>
      </form>

      {result.map(function (money) {
        return (
          <div key="money.quantity.value">
            <span>{money.amount} x</span>
            <span> {money.quantity.value}</span>
            <span> -- {money.quantity.type}</span>
          </div>
        );
      })}
    </>
  );
}
