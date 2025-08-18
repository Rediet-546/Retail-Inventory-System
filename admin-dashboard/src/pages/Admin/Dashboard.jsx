import Cards from '../components/Dashboard/Cards';
import SalesChart from '../components/Dashboard/SalesChart';
import QuickLinks from '../components/Dashboard/QuickLinks';

const Dashboard = ({ user }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <Cards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div>
          <QuickLinks user={user} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;