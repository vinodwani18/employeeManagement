const reducers = (state = {}, action) => {
    switch (action.type) {
       case 'GET_EMPLOYEES':
          return { ...state};
        case 'SET_EMPLOYEES':
          return { ...state, employees: action.employeeData};
       default:
          return state;
     }
  };
  export default reducers;