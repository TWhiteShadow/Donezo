import { Outlet, Route, Routes } from 'react-router'
import './App.css'
import ActiveTasks from './pages/ActivesTasks'
import Navbar from './components/Navbar';
import CompletedTasks from './pages/CompletedTasks';
import Settings from './pages/Settings';

function NavbarLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {

  return (
    <Routes>
      <Route element={<NavbarLayout />}>
        <Route path="/" element={<ActiveTasks />} />
        <Route path="/completed" element={<CompletedTasks />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
