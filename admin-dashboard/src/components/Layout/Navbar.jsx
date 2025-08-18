import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">Admin Dashboard</span>
            </div>
          </div>
          <div className="flex items-center">
            {user && (
              <>
                <span className="text-gray-500 mr-4">Welcome, {user.username}</span>
                <button
                  onClick={onLogout}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;