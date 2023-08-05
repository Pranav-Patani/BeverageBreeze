const AddressReducer = (addressState, addressAction) => {
  switch (addressAction.type) {
    case "SET_SELECTED_ADDRESS":
      return { ...addressState, selectedAddress: addressAction.payload };
    case "ADD_USER_ADDRESS":
      return {
        ...addressState,
        addresses: [...addressState.addresses, addressAction.payload],
      };
    case "DELETE_ADDRESS":
      return { ...addressState, addresses: addressAction.payload };
    case "SET_EDIT_ADDRESS":
      return {
        ...addressState,
        addresses: addressState?.addresses?.map((item) =>
          item.id === addressAction.payload[0]
            ? { ...addressAction.payload[1] }
            : item
        ),
      };
    default:
      return addressState;
  }
};

export default AddressReducer;

export const initialAddressState = {
  addresses: [
    {
      id: 0,
      name: "Guest",
      street: "Guest Road",
      city: "Guest City",
      state: "Guest State",
      zipcode: "123456",
      country: "Guest City",
      mobile: "123456789",
    },
  ],
  seletedAddress: {
    id: 0,
    name: "Guest",
    street: "Guest Road",
    city: "Guest City",
    state: "Guest State",
    zipcode: "123456",
    country: "Guest City",
    mobile: "123456789",
  },
};
