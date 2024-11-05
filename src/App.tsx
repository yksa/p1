import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Happening from "./components/Happening";
import Header from "./components/Header";
import Trending from "./components/Trending";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="bg-[#faf6f5]">
        <main className="px-8 py-12 max-w-[1000px] mx-auto">
          <Trending />
          <Happening />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
