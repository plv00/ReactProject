export default (state = null, action) => {
  switch (action.type) {
    case 'POKEMON_SELECTED':
      return action.payload;

    default:
      return state;
  }
}