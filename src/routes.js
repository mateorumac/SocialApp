import { Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';  // Corrected path
import Profile from './pages/Profile';  // Corrected path
import News from './pages/News';  // Corrected path
import Friends from './pages/Friends';  // Corrected path
import Messages from './pages/Messages';  // Corrected path
import Login from './pages/Login';  // Corrected path
import Signup from './pages/Signup';  // Corrected path

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/feed" element={<Feed />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/news" element={<News />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Feed />} /> {/* Default Route */}
    </Routes>
  );
};

export default AppRoutes;
