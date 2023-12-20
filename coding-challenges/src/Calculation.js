export default function Calculation({ bill, tipPercentage }) {
  const tip = Math.round(bill * (tipPercentage / 100));
  const totalBill = bill + tip;

  return (
    <div>
      <em>
        <h2>
          You pay total ${totalBill} (${bill} Bill + ${tip} Tip)
        </h2>
      </em>
    </div>
  );
}
