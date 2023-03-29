import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">Main</main>
      <Footer />
    </div>
  );
}

export default App;
