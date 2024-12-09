# User Management System

A modern, responsive user management system built with React, TypeScript, and Tailwind CSS. This project demonstrates best practices in form handling, validation, and user interface design.

## Features

- **User Authentication**
  - Login form with email and password validation
  - Registration form with comprehensive validation
  - Password strength requirements
  - Real-time form validation feedback

- **User Profile Management**
  - View and edit user profile information
  - Profile picture upload capability
  - Responsive design for all screen sizes
  - Clean and intuitive interface

- **Form Validation**
  - Email format validation
  - Password strength requirements
  - Matching password confirmation
  - Required field validation
  - Real-time error feedback

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── LoginForm.tsx    # Login form component
│   │   └── RegisterForm.tsx # Registration form component
│   └── profile/
│       └── UserProfile.tsx  # User profile component
├── utils/
│   └── validation.ts        # Validation utility functions
├── App.tsx                  # Main application component
├── main.tsx                # Application entry point
└── index.css               # Global styles
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shruti1609-ui/user-frontend.git
   cd user-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Technology Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Form Validation**: Custom validation utilities
- **Development Tools**: ESLint, TypeScript ESLint

## Best Practices Implemented

1. **Component Structure**
   - Modular component design
   - Separation of concerns
   - Reusable components
   - Clear component hierarchy

2. **Form Handling**
   - Controlled components
   - Form validation
   - Error handling
   - Real-time feedback

3. **State Management**
   - Local state management with React hooks
   - Proper state updates
   - Controlled form inputs

4. **Code Organization**
   - Clear file structure
   - Utility functions separation
   - Consistent naming conventions
   - Type definitions

5. **UI/UX Considerations**
   - Responsive design
   - Accessible forms
   - Clear error messages
   - Loading states
   - Visual feedback

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.