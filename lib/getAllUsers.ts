export default async function getAllUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('failed to get users!');
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
