import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

import Main from "./components/Main";
import Marvel from "./components/Marvel";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:type/:id" element={<Marvel />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
