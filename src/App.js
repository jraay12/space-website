import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace={true} />} />
      <Route path="/home" element={<Homepage />}></Route>
      <Route path="/Destination" element={<Destination />} />
      <Route path="/Crew" element={<Crew />} />
    </Routes>
  );
}
