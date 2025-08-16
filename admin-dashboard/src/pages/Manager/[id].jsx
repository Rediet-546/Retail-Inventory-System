import ManagerForm from '../../components/Manager/ManagerForm';

const ManagerFormPage = ({ managers, onSubmit }) => {
  return <ManagerForm managers={managers} onSubmit={onSubmit} />;
};

export default ManagerFormPage;