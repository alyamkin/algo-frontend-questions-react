import { useState } from 'react';
import './TipCalculator.css';

export default function TipCalculator() {
  const [bill, setBill] = useState(50);
  const [tipPercent, setTipPercent] = useState(18);
  const [people, setPeople] = useState(1);

  const totalTip = bill * tipPercent * 0.01;
  const perPersonTip = totalTip / people;

  const totalTipToDisplay = isNaN(totalTip) ? '-' : `$${totalTip.toFixed(2)}`;
  const perPersonTipToDisplay = isFinite(perPersonTip)
    ? `$${perPersonTip.toFixed(2)}`
    : '-';

  return (
    <>
      <label for="bill">Bill</label>
      <input
        id="bill"
        type="number"
        min="0"
        value={bill}
        onChange={(e) => setBill(parseInt(e.target.value))}
      />
      <label for="tipPercent">Tip Percentage</label>
      <input
        id="tipPercent"
        type="number"
        min="0"
        value={tipPercent}
        onChange={(e) => setTipPercent(parseInt(e.target.value))}
      />
      <label for="numPeople">Number of People</label>
      <input
        id="numPeople"
        type="number"
        min="1"
        value={people}
        onChange={(e) => setPeople(parseInt(e.target.value))}
      />
      <p>Total Tip: {totalTipToDisplay}</p>
      <p>Tip Per Person: {perPersonTipToDisplay}</p>
    </>
  );
}
