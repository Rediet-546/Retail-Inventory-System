const QuickLinks = ({ user }) => {
  const links = [
    { name: 'Add Manager', path: '/managers/new', icon: '👨‍💼', visible: user?.role === 'admin' },
    { name: 'Add Cashier', path: '/cashiers/new', icon: '👩‍💼', visible: user?.role !== 'cashier' },
    { name: 'View Reports', path: '/reports', icon: '📊', visible: true },
    { name: 'Settings', path: '/settings', icon: '⚙️', visible: user?.role === 'admin' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        {links
          .filter(link => link.visible)
          .map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="group p-3 border border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">{link.icon}</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-700">
                  {link.name}
                </span>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};

export default QuickLinks;