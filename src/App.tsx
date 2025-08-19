import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <div className="w-screen h-full background text-red-950 font-mono">
        <div className="lg:w-1/2 lg:px-0 mx-auto relative w-full px-5">
          <Header />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
