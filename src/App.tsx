import { AnimatePresence } from "framer-motion";
import RouterContent from "./context/RotuerContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <RouterContent />
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
