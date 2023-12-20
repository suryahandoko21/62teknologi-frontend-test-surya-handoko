import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Business from './component/Business';
import Details from './component/Detail';
import './styles.css';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route >
          <Route path="/" element={<Business />} />
          <Route path="detail" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

