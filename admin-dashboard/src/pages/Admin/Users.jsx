import { useMemo, useState } from 'react';
import CreateUser from '../../components/Admin/CreateUser';

const AdminUsers = () => {
  const [managers, setManagers] = useState(() => {
    const saved = localStorage.getItem('managers');
    return saved ? JSON.parse(saved) : [];
  });
  const [cashiers, setCashiers] = useState(() => {
    const saved = localStorage.getItem('cashiers');
    return saved ? JSON.parse(saved) : [];
  });
  const [searchManagers, setSearchManagers] = useState('');
  const [searchCashiers, setSearchCashiers] = useState('');

  const filteredManagers = useMemo(() => {
    return managers.filter(m =>
      m.name?.toLowerCase().includes(searchManagers.toLowerCase()) ||
      m.email?.toLowerCase().includes(searchManagers.toLowerCase())
    );
  }, [managers, searchManagers]);

  const filteredCashiers = useMemo(() => {
    return cashiers.filter(c =>
      c.name?.toLowerCase().includes(searchCashiers.toLowerCase()) ||
      c.email?.toLowerCase().includes(searchCashiers.toLowerCase())
    );
  }, [cashiers, searchCashiers]);

  const persist = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const generateId = () => `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

  const handleCreateUser = (data) => {
    const now = new Date().toISOString();
    if (data.role === 'manager') {
      const next = [
        ...managers,
        { id: generateId(), name: data.username, email: `${data.username}@example.com`, createdAt: now },
      ];
      setManagers(next);
      persist('managers', next);
    } else {
      const next = [
        ...cashiers,
        { id: generateId(), name: data.username, email: `${data.username}@example.com`, createdAt: now },
      ];
      setCashiers(next);
      persist('cashiers', next);
    }
  };

  const handleDeleteManager = (id) => {
    const next = managers.filter(m => m.id !== id);
    setManagers(next);
    persist('managers', next);
  };

  const handleDeleteCashier = (id) => {
    const next = cashiers.filter(c => c.id !== id);
    setCashiers(next);
    persist('cashiers', next);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">User Management</h1>

      <CreateUser onCreate={handleCreateUser} />

      <div className="bg-white shadow rounded-lg p-4">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">Managers</h2>
        </div>
        <input
          type="text"
          placeholder="Search managers..."
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm mb-4"
          value={searchManagers}
          onChange={(e) => setSearchManagers(e.target.value)}
        />
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredManagers.map((m) => (
                <tr key={m.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{m.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{m.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(m.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button onClick={() => handleDeleteManager(m.id)} className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">Cashiers</h2>
        </div>
        <input
          type="text"
          placeholder="Search cashiers..."
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm mb-4"
          value={searchCashiers}
          onChange={(e) => setSearchCashiers(e.target.value)}
        />
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCashiers.map((c) => (
                <tr key={c.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{c.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{c.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(c.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button onClick={() => handleDeleteCashier(c.id)} className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;


