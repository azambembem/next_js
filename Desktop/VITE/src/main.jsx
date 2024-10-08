// MemoryRouter ->  yani bu faqat comni xotirasida saqlab url yani localhostda o'zgarmaydi.

import ReactDOM from "react-dom/client";
import { MemoryRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => <h2>Home Page</h2>;

const About = () => <h2>About Page</h2>;

const App = () => {
  return (
    // MemoryRouter initialEntries={["/"]} ->  nima activeligi ko'rsatish uchun
    <MemoryRouter initialEntries={["/"]}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MemoryRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
