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
import EditProfile from "./pages/EditProfile.jsx";
import Notices from "./pages/Notices.jsx";
import FAQ from "./pages/FAQ.jsx";
import Inquiry from "./pages/Inquiry.jsx";
import Feedback from "./pages/Feedback.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import Notifications from "./pages/Notifications.jsx";

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
        <Route path="/settings/edit-profile" element={<EditProfile />} />
        <Route path="/settings/notices" element={<Notices />} />
        <Route path="/settings/faq" element={<FAQ />} />
        <Route path="/settings/inquiry" element={<Inquiry />} />
        <Route path="/settings/feedback" element={<Feedback />} />
        <Route path="/settings/terms" element={<Terms />} />
        <Route path="/settings/privacy" element={<Privacy />} />
        <Route path="/settings/notifications" element={<Notifications />} />

        <Route path="/chat" element={<Chat />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
