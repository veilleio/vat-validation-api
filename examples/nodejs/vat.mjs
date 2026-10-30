// VAT Validation API – Node.js example (Node 18+, ES module)
// Usage: VEILLE_API_KEY=your-key node vat.mjs

const headers = { "x-api-key": process.env.VEILLE_API_KEY, "Content-Type": "application/json" };

const params = new URLSearchParams({
  "query": "YOUR_VALUE",
});
const response = await fetch(`https://api.veille.io/v1/vat?${params}`, { headers });
if (!response.ok) {
  console.error(`HTTP ${response.status}: ${await response.text()}`);
  process.exit(1);
}

console.log(JSON.stringify(await response.json(), null, 2));
