import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <div className="w-screen h-full background text-red-950 font-mono">
        <div className="w-1/2 mx-auto relative">
          <Header />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
