# Excuse Generator API

A fun and simple **REST API** that generates random excuses for various categories like school, dev, family, office, children, college, and party. Perfect for learning backend development, testing APIs, or just getting a laugh!  

Live API: https://excuse-generator-api-td16.onrender.com

---

## Features

- Random excuse generator
- Multiple categories: `random`, `dev`, `family`, `office`, `children`, `college`, `party`
- Easy to use with JavaScript, React, or Node
- Fetch excuses with a single API call
- Open for contributions (add more excuses!)

---

## API Endpoints

### Get a random excuse


GET /excuse/random


Example response:

```json
{
  "category": "school",
  "excuse": "My dog ate my homework."
}
```
Get an excuse by category
GET /excuse/:category

Categories: `random`, `dev`, `family`, `office`, `children`, `college`, `party`


Example Usage (JavaScript)
```JavaScript
async function generateExcuse(category) {
  const res = await fetch(`https://excuse-generator-api-td16.onrender.com/excuse/${category}`);
  const data = await res.json();
  console.log(data.excuse);
}

generateExcuse("party"); // prints a random party excuse
```
Local Setup

Clone the repo:
```git
git clone https://github.com/NullingOut/excuse-generator-api.git
cd excuse-generator-api
```

Install dependencies: ```npm install```
Start the server: ```node server.js```

The API will run at: ```http://localhost:3000```

Technologies Used:
Node.js
Express.js
JSON

License: MIT License

