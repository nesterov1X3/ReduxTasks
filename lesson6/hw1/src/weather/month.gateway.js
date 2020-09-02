const baseUrl = "https://5f16d5d3a346a00016739644.mockapi.io/tasks/tasks";

export const getWeatherData = () => {
  return fetch(baseUrl).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });
};