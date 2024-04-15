import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SignUp from "./pages/SignUp.jsx";
import Home from "./pages/Home.jsx";
import SubmitQuote from "./pages/SubmitQuote.jsx";
import MySchedule from "./pages/MySchedule.jsx";
import QuoteManagement from "./pages/QuoteManagement.jsx";
import ReservationManagement from "./pages/ReservationManagement.jsx";
import Chat from "./pages/Chat.jsx";
import Settings from "./pages/Settings.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/submit-quote" element={<SubmitQuote />} />
        <Route path="/my-schedule" element={<MySchedule />} />
        <Route path="/quote-management" element={<QuoteManagement />} />

        <Route path="/chat" element={<Chat />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
