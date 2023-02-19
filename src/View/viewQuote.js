const quoteText = document.querySelector('.quote');
const author = document.querySelector('.author');

const viewQuote = (data) => {
  quoteText.textContent = data.text;
  author.textContent = data.author;
}

export default viewQuote;