import PropTypes from "prop-types";
import Button from "../../components/Button";
import { formatCurrency } from "../../utils/helpers";

function Account({ title, amount, description }) {
  return (
    <section className="mx-auto mb-8 flex w-[80%] flex-col justify-between border border-black bg-white p-6 md:flex-row md:items-center">
      <div>
        <h3>{title}</h3>
        <p className="text-[2.5rem] font-bold leading-10">
          {formatCurrency(amount)}
        </p>
        <p>{description}</p>
      </div>
      <div className="mt-4">
        <Button type="primary">View transactions</Button>
      </div>
    </section>
  );
}

Account.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  description: PropTypes.string,
};

export default Account;
