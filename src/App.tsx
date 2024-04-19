import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import OcrPage from "./pages/OcrPage";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <CssBaseline />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/kb_ocr" element={<Home />} />
          <Route path="/kb_ocr/ocr" element={<OcrPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
