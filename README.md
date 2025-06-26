# 📜 Quotes API Server

An Express.js-based API that serves inspirational quotes with full support for:

* 🔎 Search
* 🏷️ Tag filtering
* 🎯 Category filtering
* 📄 Pagination
* 🖼️ Quote image generation

---

## 🚀 Live Example

> Coming soon: Deploy it on [Render](https://render.com) or [Railway](https://railway.app) and drop the link here.

---

## 📦 Features

* Get random quote or by category
* List all quotes with pagination
* Search quotes by text or author
* Filter by tag
* Return all unique tags
* Generate PNG image from quote text

---

## 🔧 Installation

```bash
git clone https://github.com/yourusername/quotes-api.git
cd quotes-api
npm install
npm run dev
```

> Make sure you have Node.js v18+ installed.

---

## 🔐 Environment Variables

Create a `.env` file based on the template:

```env
PORT=5000
```

---

## 📡 API Endpoints

### `GET /api/quote`

Returns a single random quote
**Optional query param**: `category`

```bash
GET /api/quote?category=love
```

### `GET /api/quotes`

Returns paginated quotes
**Query params**: `page`, `limit`, `category`

```bash
GET /api/quotes?page=1&limit=5&category=life
```

### `GET /api/quotes/search`

Search quotes by text or author

```bash
GET /api/quotes/search?q=truth
```

### `GET /api/quotes/tag`

Filter quotes by tag

```bash
GET /api/quotes/tag?tag=inspirational
```

### `GET /api/categories`

Returns a list of all unique tags used in the quotes

```bash
GET /api/categories
```

### `GET /api/quote/image`

Returns a PNG image with a random or custom quote

```bash
GET /api/quote/image
GET /api/quote/image?text=Dream+Big&author=Anonymous
```

---

## 📁 Project Structure

```
quotes-api/
├── utils/
│   └── generateImage.js
├── quotes.js
├── index.js
├── .env.example
├── .gitignore
├── package.json
├── README.md
```

---

## 📦 Scripts

```bash
# Install dependencies
npm install

# Start server
npm run start

# Start with nodemon (dev mode)
npm run dev
```

---

## 🛑 .gitignore

```
node_modules/
.env
```

---

## 🌍 How to Deploy to GitHub

1. Create a new repo on GitHub (e.g., `quotes-api`)
2. Run these commands:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/quotes-api.git
git branch -M main
git push -u origin main
```

---

## 📃 License

MIT — free to use, modify, and distribute.
