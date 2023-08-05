import React, { useState } from "react";
import { useAddress } from "../contexts/AddressContext";
// import AddAddressForm from "./AddAddressForm";
// import EditAddressForm from "./EditAddressForm";
import { toast } from "react-toastify";

export const SavedAddress = () => {

    const { addressState, addressDispatch } = useAddress();
    const [showAddAddressForm, setShowAddAddressForm] = useState(false);
    const [showEditBtnInForm, setShowEditBtnInForm] = useState(false);
    const [editAddress, setEditAddress] = useState({});
  
    const deleteAddressHandler = (addressId) => {
      const newAddressList = addressState?.addresses?.filter(
        ({ id }) => id !== addressId
      );
      addressDispatch({ type: "DELETE_ADDRESS", payload: newAddressList });
      toast.warn("Address Deleted");
    };

    return (
        <>

        </>
    )
};
