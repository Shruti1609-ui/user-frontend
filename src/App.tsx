import React, { useState } from 'react';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { UserProfile } from './components/profile/UserProfile';

function App() {
  const [currentView, setCurrentView] = useState<'login' | 'register' | 'profile'>('login');

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-indigo-600">User Management</h1>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setCurrentView('login')}
                className={`inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md ${
                  currentView === 'login'
                    ? 'text-white bg-indigo-600'
                    : 'text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setCurrentView('register')}
                className={`inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md ${
                  currentView === 'register'
                    ? 'text-white bg-indigo-600'
                    : 'text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                Register
              </button>
              <button
                onClick={() => setCurrentView('profile')}
                className={`inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md ${
                  currentView === 'profile'
                    ? 'text-white bg-indigo-600'
                    : 'text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                Profile
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-center items-center">
            {currentView === 'login' && <LoginForm />}
            {currentView === 'register' && <RegisterForm />}
            {currentView === 'profile' && <UserProfile />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;