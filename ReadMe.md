# Task Manager Application

A modern, feature-rich task management application built with React. This application helps users organize their tasks with features like drag-and-drop reordering, filtering, sorting, and real-time statistics.

## Features

- ✨ Create, update, and delete tasks
- 🔍 Search and filter tasks
- 🔄 Drag-and-drop task reordering
- 📊 Real-time statistics dashboard
- 🏷️ Category and priority management
- 🔔 Toast notifications
- 📱 Responsive design
- 🎨 Modern UI with smooth animations

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Required dependencies:
```bash
npm install react lucide-react
# or
yarn add react lucide-react
```

## Project Structure

```
task-manager/
├── src/
│   ├── components/
│   │   ├── TaskManager.js
│   │   └── TaskManagerUI.js
│   ├── styles/
│   │   └── taskManager.css
│   └── App.js
├── public/
└── package.json
```

## Usage

1. Import the TaskManagerUI component in your app:

```jsx
import TaskManagerUI from './components/TaskManagerUI';

function App() {
  return (
    <div className="container mx-auto">
      <TaskManagerUI />
    </div>
  );
}
```

2. Make sure all styles are imported in your application:

```jsx
import './styles/taskManager.css';
```

## Component Features

### Task Management
- Create new tasks with title, description, category, and priority
- Mark tasks as complete/incomplete
- Delete tasks
- Drag and drop to reorder tasks

### Filtering and Sorting
- Search tasks by title or description
- Filter by category
- Filter by priority
- Sort by date, priority, or title
- Toggle sort direction

### Statistics
- Total tasks count
- Completed tasks count
- In-progress tasks count
- High priority tasks count

## Customization

### Categories
You can modify the available categories by updating the `categories` array in `TaskManager.js`:

```javascript
const categories = ['Work', 'Personal', 'Shopping', 'Health'];
```

### Priorities
Modify the available priorities by updating the `priorities` array in `TaskManager.js`:

```javascript
const priorities = ['High', 'Medium', 'Low'];
```

### Styling
The application uses a modular CSS approach. You can customize the appearance by modifying the `taskManager.css` file. Key customizable variables include:

```css
:root {
  --primary: #7c3aed;
  --primary-dark: #6d28d9;
  --text: #1f2937;
  --text-light: #6b7280;
  --card: #ffffff;
  --background: #f3f4f6;
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

## Browser Support

The application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons provided by [Lucide Icons](https://lucide.dev/)
- UI components inspired by modern design principles
- Drag and drop functionality built on native HTML5 API

## Support

For support, please open an issue in the GitHub repository or contact the maintenance team.