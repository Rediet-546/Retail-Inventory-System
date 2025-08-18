import { useState } from 'react';

const CreateUser = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'cashier' // Default role
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    setFormData({ username: '', password: '', role: 'cashier' });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-4">Create New User</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded"
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Role:</label>
          <select
            className="w-full p-2 border rounded"
            value={formData.role}
            onChange={(e) => setFormData({...formData, role: e.target.value})}
          >
            <option value="cashier">Cashier</option>
            <option value="manager">Manager</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;