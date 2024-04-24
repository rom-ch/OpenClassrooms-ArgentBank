import Account from "../features/Transaction/Account";
import Button from "../components/Button";

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
    amount: 184.30,
    description: "Current Balance",
  },
];

function User() {
  return (
    <>
      <div className="mb-8 text-center">
        <h1 className="my-6 text-3xl font-bold text-white">
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <Button type="small">Edit Name</Button>
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
