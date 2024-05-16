import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userProfile } from "../store/userSlice";
import Account from "../features/Transaction/Account";
import Button from "../components/Button";
import UpdateUserForm from "../components/UpdateUserForm";

const accounts = [
  {
    id: 1,
    title: "Argent Bank Checking (x8349)",
    amount: 2082.79,
    description: "Available Balance",
  },
  {
    id: 2,
    title: "Argent Bank Savings (x6712)",
    amount: 10928.42,
    description: "Available Balance",
  },
  {
    id: 3,
    title: "Argent Bank Credit Card (x8349)",
    amount: 184.3,
    description: "Current Balance",
  },
];

function User() {
  const [showUpdateName, setShowUpdateName] = useState(false);

  const { token } = useSelector((state) => state.auth);
  const { firstName, lastName } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfile(token));
  }, [token, dispatch]);

  function handleCloseUpdateForm() {
    setShowUpdateName(false);
  }

  return (
    <>
      <div className="mb-8 text-center">
        <h1 className="mt-6 text-3xl font-bold text-white">Welcome back</h1>
        {showUpdateName ? (
          <UpdateUserForm handleCloseUpdateForm={handleCloseUpdateForm} />
        ) : (
          <>
            <h2 className="mb-6 text-3xl font-bold text-white">
              {firstName} {lastName}!
            </h2>
            <Button onClick={() => setShowUpdateName(true)} type="small">
              Edit Name
            </Button>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((acc) => (
        <Account
          key={acc.id}
          title={acc.title}
          amount={acc.amount}
          description={acc.description}
        />
      ))}
    </>
  );
}

export default User;
