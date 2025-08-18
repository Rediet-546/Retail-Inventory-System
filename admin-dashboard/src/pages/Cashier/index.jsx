import CashierForm from '../../components/Cashier/CashierForm';

const CashierFormPage = ({ cashiers, onSubmit }) => {
  return <CashierForm cashiers={cashiers} onSubmit={onSubmit} />;
};

export default CashierFormPage;