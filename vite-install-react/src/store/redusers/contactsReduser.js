const initialState = [];

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, action.payload];
    case 'DELETE_CONTACT':
      return state.filter((contact) => contact.id !== action.payload);
    case 'UPDATE_CONTACT':
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
    default:
      return state;
  }
};

export default contactsReducer;
