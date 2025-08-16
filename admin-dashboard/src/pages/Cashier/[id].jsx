import CashierForm from '../../components/Cashier/CashierForm';

const CashierFormPage = ({ cashiers, onSubmit }) => {
  return <CashierForm cashiers={cashiers} onSubmit={onSubmit} />;
};

// This is the crucial line that was missing
export default CashierFormPage;