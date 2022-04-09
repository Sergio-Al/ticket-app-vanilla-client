export const getLatest = async () => {
  const response = await fetch("http://localhost:8080/latest");
  const data = await response.json();

  return data.latest;
};
