import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { updateUserProfile } from "../store/userSlice";
import Button from "./Button";

function UpdateUserForm({ handleCloseUpdateForm }) {
  const [updatedInfos, setUpdatedInfos] = useState({
    firstName: "",
    lastName: "",
  });

  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const { firstName, lastName } = useSelector((state) => state.user);

  function handleSubmit(e) {
    e.preventDefault();

    if (updatedInfos.firstName === "" || updatedInfos.lastName === "") {
      setError(true);
      return;
    }

    dispatch(updateUserProfile({ token, updatedInfos }));
    handleCloseUpdateForm();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUpdatedInfos({
      ...updatedInfos,
      [name]: value,
    });
    setError(false);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 w-full space-y-4 px-4">
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <input
          className="rounded-sm p-2"
          placeholder={firstName}
          type="text"
          name="firstName"
          value={updatedInfos.firstName}
          onChange={handleChange}
        />
        <input
          className="rounded-sm p-2"
          placeholder={lastName}
          type="text"
          name="lastName"
          value={updatedInfos.lastName}
          onChange={handleChange}
        />
      </div>
      {error && (
        <p className="text-red-500">
          Please provide your first name and last name.
        </p>
      )}
      <div className="space-x-4">
        <Button type="update">Save</Button>
        <Button onClick={handleCloseUpdateForm} type="secondary">
          Cancel
        </Button>
      </div>
    </form>
  );
}

UpdateUserForm.propTypes = {
  handleCloseUpdateForm: PropTypes.func,
};

export default UpdateUserForm;
