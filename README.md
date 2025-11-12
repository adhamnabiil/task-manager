### Prerequisites

Before running this project, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js) or yarn

### Installation

1. **Navigate to the project directory:**

   ```bash
   cd task-manager
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Open your browser:**
   - The application will automatically open, or you can navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Available Scripts

- **`npm run dev`** - Starts the development server with hot-reload
- **`npm run build`** - Builds the application for production
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## ✨ Features

- **➕ Add Tasks** - Create new tasks with a simple and intuitive interface
- **✏️ Edit Tasks** - Modify existing tasks easily
- **🗑️ Delete Tasks** - Remove tasks you no longer need
- **✅ Toggle Completion** - Mark tasks as complete or incomplete
- **🔍 Search** - Quickly find tasks by searching through your task list
- **🎯 Drag & Drop** - Reorder tasks by dragging and dropping them
- **📱 Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **🔔 Toast Notifications** - Get instant feedback for all actions
- **⚡ Fast & Modern** - Built with Vite for lightning-fast performance

## 🛠️ Tech Stack

### Frontend Framework & Build Tool

- **React 19.2.0** - Modern UI library
- **Vite 7.2.2** - Next-generation frontend tooling

### UI & Styling

- **Material-UI (MUI) 7.3.5** - Comprehensive React component library
  - @mui/material - Core components
  - @mui/icons-material - Icon components
  - @emotion/react & @emotion/styled - CSS-in-JS styling
- **Tailwind CSS 4.1.17** - Utility-first CSS framework

### State Management & API

- **Axios 1.13.2** - Promise-based HTTP client
- **React Toastify 11.0.5** - Toast notification library

### Development Tools

- **ESLint** - Code linting and formatting
- **Vite Plugin React** - Fast refresh and JSX support

## 📁 Project Structure

```
task-manager/
├── public/
│   └── no-items.svg          # Empty state illustration
├── src/
│   ├── api/
│   │   ├── apiRequest.js     # API request handler
│   │   ├── axiosInstance.js  # Axios configuration
│   │   └── tasksAPI.js       # Task-related API endpoints
│   ├── Components/
│   │   ├── Header/
│   │   │   └── index.jsx     # Application header
│   │   └── Tasks/
│   │       ├── AddEditTask.jsx   # Modal for adding/editing tasks
│   │       ├── index.jsx         # Main tasks container
│   │       ├── List.jsx          # Task list with drag & drop
│   │       ├── NoTasks.jsx       # Empty state component
│   │       └── SingleTask.jsx    # Individual task item
│   ├── context/              # Context API (future use)
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles
├── eslint.config.js          # ESLint configuration
├── vite.config.js            # Vite configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

## 🌐 API Integration

This application uses the [DummyJSON API](https://dummyjson.com/) for task management:

- **Base URL:** `https://dummyjson.com/`
- **Endpoints:**
  - `GET /todos` - Fetch all tasks
  - `POST /todos/add` - Add a new task
  - `PUT /todos/{id}` - Update an existing task
  - `DELETE /todos/{id}` - Delete a task

> **Note:** DummyJSON is a fake REST API for testing and prototyping. In a production environment, you would replace this with your own backend API.

## 🎨 Key Components

### Tasks Component

The main component that manages all task-related operations including:

- Fetching tasks from the API
- Adding, editing, and deleting tasks
- Searching and filtering tasks
- Managing loading and submission states

### Task List

Displays all tasks with support for:

- Drag and drop reordering
- Task completion toggling
- Individual task actions (edit, delete)

### Add/Edit Modal

A reusable modal component for both creating new tasks and editing existing ones.

## 🔧 Configuration

### Changing the API Base URL

To use a different API, update the `baseURL` in `src/api/axiosInstance.js`:

```javascript
const axiosInstance = axios.create({
  baseURL: "YOUR_API_URL_HERE",
  timeout: 30000,
  // ... other configurations
});
```

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port. Check the terminal output for the correct URL.

### Dependencies Installation Issues

If you encounter issues during installation, try:

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

## 📝 Future Enhancements

- [ ] User authentication and authorization
- [ ] Task categories and tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Dark mode support
- [ ] Offline support with service workers
- [ ] Task filtering by status
- [ ] Bulk operations (select multiple tasks)

## 📄 License

This project is private and not licensed for public distribution.

## 🤝 Contributing

This is a private project. If you have suggestions or find bugs, please reach out to the project maintainer.

---

**Built with ❤️ using React and Material-UI**
