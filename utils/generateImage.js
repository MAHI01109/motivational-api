import { createCanvas } from 'canvas';

export const createQuoteImage = async (quote, author) => {
  const width = 800;
  const lineHeight = 36;
  const maxTextWidth = 700;
  const paddingTop = 100;
  const paddingBottom = 100;

  // Dummy canvas for text measurement
  const tempCanvas = createCanvas(1, 1);
  const tempCtx = tempCanvas.getContext('2d');
  tempCtx.font = 'bold 28px sans-serif';

  const words = quote.split(' ');
  let lines = [];
  let line = '';

  for (let word of words) {
    const testLine = line + word + ' ';
    const { width: testWidth } = tempCtx.measureText(testLine);
    if (testWidth > maxTextWidth && line) {
      lines.push(line.trim());
      line = word + ' ';
    } else {
      line = testLine;
    }
  }
  lines.push(line.trim());

  // Calculate height: quote lines + author
  const quoteHeight = lines.length * lineHeight;
  const authorHeight = 40;
  const totalHeight = paddingTop + quoteHeight + authorHeight + paddingBottom;

  const canvas = createCanvas(width, totalHeight);
  const ctx = canvas.getContext('2d');

  // Gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, totalHeight);
  gradient.addColorStop(0, '#1a1a1a');
  gradient.addColorStop(1, '#333333');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, totalHeight);

  // Quote text
  ctx.font = 'bold 28px sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 4;

  let currentY = paddingTop;
  for (let l of lines) {
    ctx.fillText(l, width / 2, currentY);
    currentY += lineHeight;
  }

  // Author
  ctx.font = 'italic 20px sans-serif';
  ctx.fillStyle = '#cccccc';
  ctx.shadowBlur = 2;
  ctx.fillText(`— ${author}`, width / 2, currentY + 20);

  return canvas.toBuffer();
};
