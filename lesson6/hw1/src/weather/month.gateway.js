const baseUrl = "https://5f16d5d3a346a00016739644.mockapi.io/tasks/tasks";

// const baseUrl =
//   "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities";

export const getData = () => {
  return fetch(baseUrl).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });
};