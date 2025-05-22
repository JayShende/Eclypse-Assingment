import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import PaymentsPage from "./pages/payments-page";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
           <Route path="/payments" element={<PaymentsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
