import AboutUs from "./AboutUs";
import "./App.css";
import Down from "./Down";
import Footer from "./Footer";
import Header from "./Header";
import MainBody from "./MainBody";
import Products from "./Products";

function App() {
  return (
    <div className="App">
      <Header />
      <MainBody />
      <AboutUs />
      <Products />
      <Down />
      <Footer />
    </div>
  );
}

export default App;
