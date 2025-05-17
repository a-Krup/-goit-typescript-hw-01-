import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

(async () => {
  const todo = await fetchData<Todo>(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log("Отриманий TODO:", todo);
})();
