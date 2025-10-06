import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/price/calculate", (req, res) => {
  const {touch, weight, silverPrice, copperPrice, makingCharge, gst} = req.body;

  const silverWeight = (weight * touch) / 100;

  const copperWeight = weight-silverWeight;

  const Price = (silverWeight * silverPrice)+(copperWeight * copperPrice);

  const making = (Price * makingCharge) / 100;
  
  let total = Price + making;

  if (gst) {
    total += total * 0.02;
  }

  res.json({
    silverWeight,
    copperWeight,
    Price,
    making,
    total: total.toFixed(1)
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
