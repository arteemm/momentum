export const getWeather = async (city, lang) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=db94ee57c0b7eedf8f1a3cfec2d23389&units=metric`;
  const response = await fetch(url);

  return response.json();
};

export const getImage = async (timeOfDay) => {
  try {
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&count=21&client_id=oQGszVs72D72n5gRjVt4vPNnM7qzQISKk83BzAnDKXs`;
    const response = await fetch(url);
    return response.json();
  } catch(err) {
    throw new Error('Unsplash Err');
  }  
};

export const getFlickrImage = async (timeOfDay) => {
  try {
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=1df8c1681847a788cc09bb6520a4d4a2&per_page=21&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;
  const response = await fetch(url);

  return response.json();
  } catch(err) {
    throw new Error('Flikr Err');
  }
};

export const getQuote = async () => {
  const url = `https://type.fit/api/quotes`;
  const response = await fetch(url);

  return response.json();
};
