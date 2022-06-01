const quoteText = document.querySelector('.quote');
const author = document.querySelector('.author');

const viewQuote = (data) => {
  quoteText.textContent = data.quote.body;
  author.textContent = data.quote.author;
}

export default viewQuote;