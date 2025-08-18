import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ user }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const adminLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { name: 'Managers', path: '/managers', icon: 'people' },
    { name: 'Cashiers', path: '/cashiers', icon: 'person' },
    { name: 'Reports', path: '/reports', icon: 'assessment' },
    { name: 'Settings', path: '/settings', icon: 'settings' },
  ];

  const managerLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { name: 'Cashiers', path: '/cashiers', icon: 'person' },
    { name: 'Reports', path: '/reports', icon: 'assessment' },
  ];

  const cashierLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
  ];

  const links = user?.role === 'admin' 
    ? adminLinks 
    : user?.role === 'manager' 
      ? managerLinks 
      : cashierLinks;

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-gray-800">
        <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <nav className="flex-1 px-2 space-y-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  isActive(link.path)
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span className="mr-3">{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;