import SettingsForm from '../components/Settings/SettingsForm';
import { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    companyName: 'My Business',
    timezone: 'UTC',
    dateFormat: 'MM/DD/YYYY',
    notificationsEnabled: true,
  });

  const handleSave = (newSettings) => {
    setSettings(newSettings);
    // In a real app, you would save to API here
    console.log('Settings saved:', newSettings);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">System Settings</h1>
      <SettingsForm settings={settings} onSave={handleSave} />
    </div>
  );
};

export default Settings;