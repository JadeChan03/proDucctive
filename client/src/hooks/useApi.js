import { useState, useEffect } from 'react';
import { get, post } from '../utils/api';

/* custom hooks */

export const getTodos = (url) => {
	// create state for data
	const [todos, setTodos] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const todosPerPage = 10;
	const totalTodos = todos.length;

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

  // slice array
  const currentTodos = todos.slice((currentPage - 1) * todosPerPage, currentPage * todosPerPage);

  // handlePageChange -> onClick
  const handlePageChange = (direction) => {
	if(direction === 'prev' && currentPage > 1) {
		setCurrentPage(currentPage - 1);
	} else if(direction === 'next' && currentPage < Math.ceil(totalTodos / todosPerPage)) {
		setCurrentPage(currentPage + 1);
	}
  }

  // return sliced todos, totalTodos, handlePageChange, currentPage, 
  return {
	todos: currentTodos,
	totalTodos,
	todosPerPage,
	handlePageChange,
	currentPage
	};
};
