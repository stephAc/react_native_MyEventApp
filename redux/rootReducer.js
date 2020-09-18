const initState = {
  favoris: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_FAVORIS':
      return { ...state, favoris: action.favoris };

    default:
      return state;
  }
};

export default rootReducer;
