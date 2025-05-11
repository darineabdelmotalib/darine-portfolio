
import './App.scss'
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";

// function App() {
//   return (
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />}></Route>
//       </Routes>
//     </HashRouter>
//   )
// }

function App() {
  return (
    <div style={{ fontSize: "2rem", padding: "2rem", color: "green" }}>
      ✅ React is rendering!
    </div>
  );
}
export default App;


