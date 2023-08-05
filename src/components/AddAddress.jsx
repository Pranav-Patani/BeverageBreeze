import "./AddAddressFrom.css";
import React, { useState } from "react";
import { useAddress } from "../contexts/AddressContext";
import { toast } from "react-toastify";

const AddAddressForm = ({ setShowAddAddressForm }) => {
  const { addressState, addressDispatch } = useAddress();
  const [addressForm, setAddressForm] = useState({
    id: addressState?.addresses.length + 1,
    name: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    mobile: "",
  });

  const addAddressHandler = (event) => {
    event.preventDefault();
    if (
      addressForm.name === "" ||
      addressForm.street === "" ||
      addressForm.city === "" ||
      addressForm.state === "" ||
      addressForm.zipcode === "" ||
      addressForm.country === "" ||
      addressForm.mobile === ""
    ) {
      toast.warn("Please fill all the fields before adding new address ");
    } else {
      addressDispatch({ type: "ADD_USER_ADDRESS", payload: addressForm });
      setShowAddAddressForm(false);
      toast.success("New Addreess added!");
    }
  };

  return (
    <>
    </>
  )
};
