import { useMemo } from 'react';
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

  const csvContent = useMemo(() => {
    const header = ['Date','User','Action','Details'];
    const rows = logs.map(l => [new Date(l.timestamp).toISOString(), l.user, l.action, l.details]);
    const csv = [header, ...rows]
      .map(r => r.map(field => `"${String(field).replace(/"/g, '""')}"`).join(','))
      .join('\n');
    return 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
  }, [logs]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Reports</h1>
      <div className="mb-4 flex gap-3">
        <a
          href={csvContent}
          download={`logs_${new Date().toISOString().slice(0,10)}.csv`}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Export Logs (CSV)
        </a>
      </div>
      <LogsTable logs={logs} />
    </div>
  );
};

export default Reports;