import { useEffect, useState } from "react";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [inputCurrency, setInputCurrency] = useState("USD");
  const [convertedCurrency, setconvertedCurrency] = useState("INR");
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState("OUTPUT");

  function handleInitialCurrency(input) {
    setInputCurrency(input);
  }
  function handleConversionCurrency(input) {
    setconvertedCurrency(input);
  }
  function Output() {
    return (
      <div>
        {amount} {inputCurrency} = {output} {convertedCurrency} as of{" "}
        {new Date().toDateString("en-GB")}
      </div>
    );
  }
  function Loader() {
    return <div>Converting...</div>;
  }

  useEffect(
    function () {
      const controller = new AbortController();
      async function getConversion() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${inputCurrency}&to=${convertedCurrency}`,
            { signal: controller.signal }
          );
          const data = await res.json();
          setIsLoading(false);
          console.log(data);
          setOutput(data.rates[convertedCurrency]);
        } catch (err) {
          if (err.message !== "AbortError") console.error(err.message);
        }
      }
      if (inputCurrency === convertedCurrency) {
        setOutput(amount);
        return;
      }
      if (amount > 0) getConversion();
      return function () {
        controller.abort();
      };
    },
    [amount, inputCurrency, convertedCurrency]
  );

  return (
    <div>
      <form>
        <input
          type="number"
          placeholder="Enter the amount..."
          value={amount}
          min={1}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <Dropdown currency={inputCurrency} onSelect={handleInitialCurrency} />
        <Dropdown
          currency={convertedCurrency}
          onSelect={handleConversionCurrency}
        />
      </form>
      {isLoading ? <Loader /> : <Output />}
    </div>
  );
}

function Dropdown({ currency, onSelect }) {
  return (
    <select value={currency} onChange={(e) => onSelect(e.target.value)}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}
