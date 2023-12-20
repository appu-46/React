export default function TipInput({
  children,
  tipPercentage,
  setTipPercentage,
}) {
  return (
    <div>
      <h3>
        {children}
        <select
          value={tipPercentage}
          onChange={(e) => setTipPercentage(Number(e.target.value))}
        >
          <option value={0} key={0}>
            Disappointing (0%)
          </option>
          <option value={5} key={1}>
            It was Fine (5%)
          </option>
          <option value={10} key={2}>
            It was Good (10%)
          </option>
          <option value={20} key={3}>
            Outstanding! (20%)
          </option>
        </select>
      </h3>
    </div>
  );
}
