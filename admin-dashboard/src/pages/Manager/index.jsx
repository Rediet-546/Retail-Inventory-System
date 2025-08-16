import ManagerTable from '../../components/Manager/ManagerTable';

const ManagersPage = ({ managers, onDelete }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Managers</h1>
      <ManagerTable managers={managers} onDelete={onDelete} />
    </div>
  );
};

export default ManagersPage;