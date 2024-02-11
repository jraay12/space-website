import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace={true}/>}/>
      <Route path="/home" element={<Homepage />} />
    </Routes>
  );
}
