// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import quotes from './quotes.js';
import { createQuoteImage } from './utils/generateImage.js';
import rateLimit from 'express-rate-limit';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 min
  max: 30,
});
app.use('/api/', limiter);

// Get all quotes with pagination & optional category filter
app.get('/api/quotes', (req, res) => {
  const { category, page = 1, limit = 10 } = req.query;
  let filtered = [...quotes];

  if (category) {
    filtered = filtered.filter(q => q.category.toLowerCase() === category.toLowerCase());
  }

  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + +limit);

  res.json({
    total: filtered.length,
    page: +page,
    limit: +limit,
    quotes: paginated,
  });
});

// Search quotes by text or author
app.get('/api/quotes/search', (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ message: 'Search query is required.' });

  const results = quotes.filter(qt =>
    qt.text.toLowerCase().includes(q.toLowerCase()) ||
    qt.author.toLowerCase().includes(q.toLowerCase())
  );

  res.json({ results });
});



// Filter quotes by tag
app.get('/api/quotes/tag', (req, res) => {
  const { tag } = req.query;
  if (!tag) return res.status(400).json({ message: 'Tag is required.' });

  const results = quotes.filter(q => q.tags?.includes(tag.toLowerCase()));
  res.json({ results });
});

// Get a single random quote, optionally by category
app.get('/api/quote', (req, res) => {
  const { category } = req.query;
  let filtered = [...quotes];

  if (category) {
    filtered = filtered.filter(q => q.category.toLowerCase() === category.toLowerCase());
  }

  if (!filtered.length) {
    return res.status(404).json({ message: 'No quotes found for this category.' });
  }

  const random = filtered[Math.floor(Math.random() * filtered.length)];
  res.json(random);
});

// GET /api/quote/image?text=Stay+hungry&author=Steve+Jobs
app.get('/api/quote/image', async (req, res) => {
  const { text, author } = req.query;

  try {
    let quoteText = text;
    let quoteAuthor = author;

    // If text or author not provided, use random
    if (!text || !author) {
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      quoteText = random.text;
      quoteAuthor = random.author;
    }

    const imageBuffer = await createQuoteImage(quoteText, quoteAuthor);
    res.set('Content-Type', 'image/png');
    res.send(imageBuffer);
  } catch (error) {
    console.error('Image generation failed:', error);
    res.status(500).json({ message: 'Failed to generate image.' });
  }
});




// List unique categories
app.get('/api/categories', (req, res) => {
  const allTags = quotes.flatMap(q => q.tags || []);
  const uniqueTags = [...new Set(allTags)];
  res.json(uniqueTags);
});


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
