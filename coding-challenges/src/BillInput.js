// import { useState } from "react";

export default function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <h3>
        How much was the bill amount?
        <span>
          <input
            type="text"
            placeholder="enter amount"
            value={bill}
            onChange={(e) => onSetBill(Number(e.target.value))}
          ></input>
        </span>
      </h3>
    </div>
  );
}
