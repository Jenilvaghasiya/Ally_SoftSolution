import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    touch: "",
    weight: "",
    silverPrice: "",
    copperPrice: "",
    makingCharge: "",
    gst: false,
  });

  const [result, setResult] = useState({
    silverWeight: 0,
    copperWeight: 0,
    Price: 0,
    making: 0,
    total: 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

    const calculate = () => {
    const { touch, weight, silverPrice, copperPrice, makingCharge, gst } = form;
    const silverWeight = (weight * touch) / 100;
965


55585


    const copperWeight = weight-silverWeight;

    const Price = (silverWeight * silverPrice)+(copperWeight * copperPrice);

    const making = (Price * makingCharge) / 100;

    let total = Price + making;

    if (gst) {
      total += total * 0.02;
    }

    setResult({
      silverWeight,
      copperWeight,
      Price,
      making,
      total: total.toFixed(1),
    });
  };

  return (
    <>
    <div className="container">
      <h1>Silver Price Calculator</h1>
      <label>Touch % : </label>
      <input type="number" name="touch" onChange={handleChange} />
      <br />
      <label>Weight gram : </label>
      <input type="number" name="weight" onChange={handleChange} />
      <br />
      <label>Silver Price : </label>
      <input type="number" name="silverPrice" onChange={handleChange} />
      <br />
      <label>Copper Price : </label>
      <input type="number" name="copperPrice" onChange={handleChange} />
      <br />
      <label> Making Charge % : </label>
      <input type="number" name="makingCharge" onChange={handleChange} />
      <br />

      <label>
        <br />
        <input type="checkbox" name="gst" onChange={handleChange} /> With GST
      </label>
      <br />
      <br />

      <button onClick={calculate}>Calculate</button>

      <div className="result">
        <p>Silver Weight: {result.silverWeight.toFixed(1)} gm</p>
        <p>Copper Weight: {result.copperWeight.toFixed(1)} gm</p>
        <p>Price: ₹{result.Price.toFixed(1)}</p>
        <p>Making Charge: ₹{result.making.toFixed(1)}</p>
        <p>
          <strong>Total: ₹{result.total}</strong>
        </p>
      </div>
    </div>
    </>
  );
}

export default App;
