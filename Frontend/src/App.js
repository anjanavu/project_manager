import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import RegisterForm from "./pages/RegisterForm";
import ManagerLayout from "./ManagerLayout";
import ManagerTicket from "./pages/ManagerTicket";
import ManagerNewTicket from "./pages/ManagerNewTicket";
import ManagerNotification from "./pages/ManagerNotification";
import ManagerSingleTicket from "./pages/ManagerSingleTicket";
import ManagerProfile from "./pages/ManagerProfile";
import ManagerPassword from "./pages/ManagerPassword";
import AddPeople from "./pages/AddPeople";

function App() {
  return (
    <>
      <div class="flex min-h-screen flex-col bg-gray-100">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<RegisterForm />} />
          <Route
            path="/ProjectManager/Ticket"
            element={
              <ManagerLayout>
                <ManagerTicket />
              </ManagerLayout>
            }
          />
          <Route
            path="/ProjectManager/ManagerPassword"
            element={
              <ManagerLayout>
                <ManagerPassword />
              </ManagerLayout>
            }
          />
          <Route
            path="/ProjectManager/AddPeople"
            element={
              <ManagerLayout>
                <AddPeople />
              </ManagerLayout>
            }
          />
          <Route
            path="/ProjectManager/ManagerProfile"
            element={
              <ManagerLayout>
                <ManagerProfile />
              </ManagerLayout>
            }
          />
          <Route
            path="/ProjectManager/ManagerNotification"
            element={
              <ManagerLayout>
                <ManagerNotification />
              </ManagerLayout>
            }
          />
          <Route
            path="/ProjectManager/SingleTicket"
            element={
              <ManagerLayout>
                <ManagerSingleTicket />
              </ManagerLayout>
            }
          />
          <Route
            path="/ProjectManager/ManagerNewTicket"
            element={
              <ManagerLayout>
                <ManagerNewTicket />
              </ManagerLayout>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
