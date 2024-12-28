import { useState, useEffect } from 'react';
import { get, post } from '../utils/api';

/* custom hooks */

export const getTodos = (url) => {
  // create state for data
  const [todos, setTodos] = useState([]);

  // useEffect to load data on first load
  useEffect(() => {
	// helper function
    const fetchDataFromApi = async () => {
		try {
			const result = await get(url); // use utility function
			console.log('result: ', result)
			setTodos(result);

		} catch (err) {
			console.error(err);
		}
	};

	fetchDataFromApi();
  }, [url]);

  return todos;
};
