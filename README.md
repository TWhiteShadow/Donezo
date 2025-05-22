<p align="center">
  <img src="https://github.com/TWhiteShadow/Donezo/blob/master/public/DonezoLogo.webp" alt="Logo">
</p>

# Donezo

A modern and efficient task management application built with React and Vite.

Donezo helps you organize your tasks with a clean and intuitive interface.

## ✨ Features

- 📋 Task Management

  - Display tasks in an organized list view
  - Tasks sorted by creation date
  - Add new tasks with a simple text input
  - Mark tasks as completed
  - Bulk delete completed tasks

- 🎨 Customization

  - Theme color selection in Settings page
  - Modern and responsive design
  - Clean user interface

## 🛠️ Prerequisites

- [Docker](https://www.docker.com/) & [Docker Compose Plugin](https://docs.docker.com/compose/)
  OR
- [Node.js](https://nodejs.org/) version 20.0 or higher
- [Yarn](https://yarnpkg.com/) package manager

## 🚀 Installation & Deployment

1. Clone the repository:

   ```bash
   git clone https://github.com/TWhiteShadow/Donezo.git
   cd Donezo
   ```

2. Configure .env file !

   ```bash
   VITE_BACKEND_URL=XXX
   ```

3. With docker :

   ```bash
   make dcu
   ```

OR

Wihtout docker :

```bash
make update
```

```bash
make up
```

The application will be available at `http://localhost:5173` in development mode.

## 📚 Technologies Used

- **[React](https://reactjs.org/)** - Frontend library for building user interfaces
- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling
- **[React Router v7](https://reactrouter.com/)** - Navigation and routing
- **[TailwindCSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Axios](https://axios-http.com/)** - HTTP client for API requests
- **[Tanstack Query](https://tanstack.com/query/latest)** - Data synchronization
- **[ShadCN](https://ui.shadcn.com/docs/tailwind-v4)** - Minimalist & accessible UI
- **[Sonner](https://sonner.emilkowal.ski/)** - Easiest Toast notifications
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Theme management

## 🔄 API Endpoints

The application interacts with the following REST endpoints:

- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

Nothing more, nothing less. Donezo!
