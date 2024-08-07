import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './redux/todoSlice.jsx';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.todos.filter);

  return (
    <div className="mb-4">
      <button
        onClick={() => dispatch(setFilter('all'))}
        className={`px-4 py-2 mr-2 rounded ${currentFilter === 'all' ? 'bg-purple-500 text-white' : 'bg-purple-600'}`}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter('active'))}
        className={`px-4 py-2 mr-2 rounded ${currentFilter === 'active' ? 'bg-purple-500 text-white' : 'bg-purple-600'}`}
      >
        Active
      </button>
      <button
        onClick={() => dispatch(setFilter('completed'))}
        className={`px-4 py-2 rounded ${currentFilter === 'completed' ? 'bg-purple-500 text-white' : 'bg-purple-600'}`}
      >
        Completed
      </button>
    </div>
  );
};
export default FilterButtons;