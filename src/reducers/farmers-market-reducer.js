export default (state = {}, action) => {
  const { day, location, hours, booth, img, id } = action;
  switch (action.type) {
    case "ADD_MARKET":
      return Object.assign({}, state, {
        [id]: {
          day: day,
          location: location,
          hours: hours,
          booth: booth,
          img: img,
          id: id
        }
      });

    case "DELETE_MARKET":
      const newState = { ...state };
      delete newState[id];
      return newState;

    default:
      return state;
  }
};
