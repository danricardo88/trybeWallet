const API_URL = 'https://economia.awesomeapi.com.br/json/all';

const apiData = async () => {
  const feedback = await fetch(API_URL);
  const Result = feedback.json();
  return Result;
};

export default apiData;
