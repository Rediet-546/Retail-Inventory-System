import { useState } from 'react';

const SettingsForm = ({ settings, onSave }) => {
  const [formData, setFormData] = useState(settings || {
    companyName: '',
    timezone: 'UTC',
    dateFormat: 'MM/DD/YYYY',
    notificationsEnabled: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 max-w-2xl mx-auto">
      <h2 className="text-lg font-medium text-gray-900 mb-4">System Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
            Timezone
          </label>
          <select
            name="timezone"
            id="timezone"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={formData.timezone}
            onChange={handleChange}
          >
            <option value="UTC">UTC</option>
            <option value="EST">Eastern Time (EST)</option>
            <option value="PST">Pacific Time (PST)</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label htmlFor="dateFormat" className="block text-sm font-medium text-gray-700">
            Date Format
          </label>
          <select
            name="dateFormat"
            id="dateFormat"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={formData.dateFormat}
            onChange={handleChange}
          >
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          </select>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="notificationsEnabled"
              id="notificationsEnabled"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              checked={formData.notificationsEnabled}
              onChange={handleChange}
            />
            <label htmlFor="notificationsEnabled" className="ml-2 block text-sm text-gray-700">
              Enable Email Notifications
            </label>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsForm;