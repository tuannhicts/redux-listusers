export const fetchData = async () => {
  try {
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
