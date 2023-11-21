import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  tasks: [],
  // Other state properties you may need
};

// Actions
const actions = {
  addTask: (state, payload) => ({ ...state, tasks: [...state.tasks, payload] }),
  deleteTask: (state, taskId) => ({ ...state, tasks: state.tasks.filter(task => task.taskId !== taskId) }),
  // Other actions as needed
};

// Reducer
const globalStateReducer = (state, action) => {
  if (actions[action.type]) {
    return actions[action.type](state, action.payload);
  }
  return state;
};

// Create a context for the global state
const GlobalStateContext = createContext();

// Provider component
const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Hook for using the global state
const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };
