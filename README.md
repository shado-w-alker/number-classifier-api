# Number Classifier API

A REST API that classifies numbers by their mathematical properties and provides interesting facts. Built with Node.js, Express, and deployed on Render.

## Features

- **Mathematical Properties**:
  - Prime number check
  - Perfect number check
  - Armstrong number check
  - Digit sum calculation
  - Odd/even parity determination
- **Fun Fact Integration**: Fetches interesting facts from [Numbers API](http://numbersapi.com)
- **Error Handling**: Comprehensive input validation and error responses
- **CORS Support**: Pre-configured for cross-origin requests
- **Fast Responses**: Average response time < 300ms

## Installation

### Prerequisites

- Node.js v18+
- npm v9+

### Local Setup

1. Clone repository:

```bash
git clone https://github.com/shado-w-alker/number-classifier-api
cd number-classifier-api
```

2. Install dependencies:

```bash
npm install
```

3. Start server:

```bash
npm start
```

The API will be available at `https://number-classifier-api-56y5.onrender.com`

## Usage

### Base URL

`https://number-classifier-api-56y5.onrender.com`

### Example Request

```bash
curl "https://number-classifier-api-56y5.onrender.com/api/classify-number?number=371"
```

### Sample Response (200 OK)

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Error Response (400 Bad Request)

```json
{
  "number": "abc",
  "error": true
}
```

## Deployment

1. Create a new **Web Service** on [Render](https://render.com)
2. Connect your GitHub repository
3. Set build command:

```bash
npm install
```

4. Set start command:

```bash
npm start
```

5. Deploy!

---

## 📝 **Postman API Documentation**

The full API documentation is available at:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/21773885/2sAYX5K2Jf)

Explore and test the API directly in Postman.

---

### Parameters

| Name   | Type    | Required | Description                                     |
| ------ | ------- | -------- | ----------------------------------------------- |
| number | integer | Yes      | Number to classify (positive/negative integers) |

### Response Fields

| Field      | Type     | Description                       |
| ---------- | -------- | --------------------------------- |
| number     | integer  | Original input number             |
| is_prime   | boolean  | Prime number status               |
| is_perfect | boolean  | Perfect number status             |
| properties | string[] | Array of number properties        |
| digit_sum  | integer  | Sum of absolute value's digits    |
| fun_fact   | string   | Interesting fact from Numbers API |

### Possible Properties

- `armstrong` (if Armstrong number)
- `even` or `odd`

## Contributing

1. Fork the repository
2. Create your feature branch:

```bash
git checkout -b feature/your-feature
```

3. Commit changes:

```bash
git commit -m 'Add some feature'
```

4. Push to branch:

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) file

## Acknowledgments

- Number facts provided by [Numbers API](http://numbersapi.com)
- Built with [Express](https://expressjs.com) and [Axios](https://axios-http.com)

---

**Contact**: [mecdiebere@gmail.com](mailto:mecdiebere@gmail.com) | [GitHub Profile](https://github.com/shado-w-alker)
