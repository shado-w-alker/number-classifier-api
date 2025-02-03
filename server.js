const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

// Helper functions
const isPrime = (n) => {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

const isPerfect = (n) => {
  if (n <= 1) return false;
  let sum = 1;
  const sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) {
      sum += i;
      const complement = n / i;
      if (complement !== i) sum += complement;
    }
  }
  return sum === n;
};

const isArmstrong = (n) => {
  if (n < 0) return false;
  const digits = String(n).split("");
  const power = digits.length;
  const sum = digits.reduce((acc, d) => acc + Math.pow(Number(d), power), 0);
  return sum === n;
};

const digitSum = (n) => {
  return String(Math.abs(n))
    .split("")
    .reduce((acc, d) => acc + Number(d), 0);
};

const getFunFact = async (n) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${n}/math`, {
      timeout: 3000,
    });
    return response.data;
  } catch (error) {
    return "No fun fact available.";
  }
};

// API endpoint
app.get("/api/classify-number", async (req, res) => {
  const numberParam = req.query.number;

  if (!numberParam || !/^-?\d+$/.test(numberParam)) {
    return res.status(400).json({
      number: numberParam || "undefined",
      error: true,
    });
  }

  const number = parseInt(numberParam, 10);

  const properties = [];
  if (isArmstrong(number)) properties.push("armstrong");
  properties.push(number % 2 === 0 ? "even" : "odd");

  try {
    const funFact = await getFunFact(number);

    res.json({
      number,
      is_prime: isPrime(number),
      is_perfect: isPerfect(number),
      properties,
      digit_sum: digitSum(number),
      fun_fact: funFact,
    });
  } catch (error) {
    res.status(500).json({ error: true });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
