export const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=db94ee57c0b7eedf8f1a3cfec2d23389&units=metric`;
  const response = await fetch(url);

  return response.json();
}

export const getImage = async (timeOfDay) => {
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=oQGszVs72D72n5gRjVt4vPNnM7qzQISKk83BzAnDKXs`;
  const response = await fetch(url);

  return response.json();
}

export const getQuote = async () => {
  const url = `https://favqs.com/api/qotd`;
  const response = await fetch(url);

  return response.json();
}
