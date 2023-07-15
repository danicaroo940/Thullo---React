import { Routes, Route } from 'react-router-dom';
import { MainScreen } from '../screens/MainScreen';
import { BoardScreen } from '../screens/BoardScreen';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/boards/:id" element={<BoardScreen />} />
    </Routes>
  );
};
