const express = require("express");
const app = express();

const excuses = require("./excuses.json");

const PORT = process.env.PORT || 3000;

function randomExcuse(category) {
    const list = excuses[category];
    return list[Math.floor(Math.random() * list.length)];
}

app.get("/", (req, res) => {
    res.json({
        message: "Excuse Generator API",
        endpoints: [
            "/excuse/school",
            "/excuse/dev",
            "/excuse/life",
            "/excuse/random"
        ]
    });
});

app.get("/excuse/random", (req, res) => {
    const categories = Object.keys(excuses);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    res.json({
        category: randomCategory,
        excuse: randomExcuse(randomCategory)
    });
});

app.get("/excuse/:category", (req, res) => {
    const category = req.params.category.toLowerCase();

    const ALLOWED_CATEGORIES = new Set(Object.keys(excuses));

    if (!ALLOWED_CATEGORIES.has(category)) {
        return res.status(404).json({ error: "Category not found" });
    }

    res.json({
        category: category,
        excuse: randomExcuse(category)
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});