import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
