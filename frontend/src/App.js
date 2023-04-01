import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

import "./scss/main.scss";
import LogementState from "./context/LogementState";

function App() {
  return (
    <div className="App">
      <LogementState>
        <Router>
          <Header />
          <AppRoutes />
          <Footer />
        </Router>
      </LogementState>
    </div>
  );
}

export default App;
