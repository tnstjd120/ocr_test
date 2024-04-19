import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <SnackbarProvider maxSnack={2}>
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);
