import LogsTable from '../components/Reports/LogsTable';

const Reports = () => {
  // Mock logs data
  const logs = [
    {
      timestamp: '2023-05-01T10:30:00Z',
      user: 'admin',
      action: 'Login',
      details: 'User logged in successfully'
    },
    {
      timestamp: '2023-05-01T11:15:00Z',
      user: 'admin',
      action: 'Create',
      details: 'Created new manager: John Doe'
    },
    {
      timestamp: '2023-05-02T09:45:00Z',
      user: 'manager',
      action: 'Update',
      details: 'Updated cashier details'
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Reports</h1>
      <LogsTable logs={logs} />
    </div>
  );
};

export default Reports;