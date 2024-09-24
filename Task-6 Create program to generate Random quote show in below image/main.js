const quotes = [
    {
      quote: "The best way to predict your future is to create it.",
      author: "Abraham Lincoln",
    },
    {
      quote:
        "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer",
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky",
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
  ];

  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    document.getElementById("quote").innerText = `"${selectedQuote.quote}"`;
    document.getElementById(
      "author"
    ).innerText = `— ${selectedQuote.author}`;
  }