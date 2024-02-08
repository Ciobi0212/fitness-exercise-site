
export const exercisesOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "dba655d0d8msh78a8f43157fe67dp13b498jsnead4af53518e",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

 export const videosOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'dba655d0d8msh78a8f43157fe67dp13b498jsnead4af53518e',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}