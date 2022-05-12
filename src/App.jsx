import InfoSection from "./components/InfoSection";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";
import ThemeContextProvider from "./context/ThemeContext";
import ModeButton from "./components/ModeButton";

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <InfoSection />
        <Main />
        <Footer />
        <ModeButton />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
