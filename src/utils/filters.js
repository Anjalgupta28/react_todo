export const filterTodos = (todos, searchTerm) =>
    todos.filter((todo) => todo.title.includes(searchTerm));
  
  export const sortTodos = (todos, sortBy) =>
    [...todos].sort((a, b) =>
      sortBy === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );
  