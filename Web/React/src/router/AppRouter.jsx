import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ContextUser } from "../contexts/ContextUser";

// Components
import AuthPage from "../components/auth/AuthPage";
import Login from "../components/auth/Login";
import Recovery from "../components/auth/Recovery";
import BusinessPage from "../components/dashboard/business/BusinessPage";
import DashboardPage from "../components/dashboard/DashboardPage";
import PluginsPage from "../components/dashboard/plugins/PluginsPage";
import QuickAccessPage from "../components/dashboard/quickAccess/QuickAccessPage";
import StoragePage from "../components/dashboard/storage/StoragePage";
import Account from "../components/dashboard/user/Account";
import AccountSuspension from "../components/dashboard/user/AccountSuspension";
import Bills from "../components/dashboard/user/Bills";
import Notifications from "../components/dashboard/user/Notifications";
import Payments from "../components/dashboard/user/Payments";
import Plans from "../components/dashboard/user/Plans";
import Profile from "../components/dashboard/user/Profile";
import UserPage from "../components/dashboard/user/UserPage";
import UsersPage from "../components/dashboard/users/UsersPage";
import RegisterPage from "../components/register/RegisterPage";
import VerificationPage from "../components/accounts/VerificationPage";
import WorkspacePage from "../components/workspace/WorkspacePage";
import UserFormPage from "../components/dashboard/users/UserFormPage";
import PdfPage from "../components/dashboard/pdf/PdfPage";

const AppRouter = () => {
  const { user } = useContext(ContextUser);

  return (
    <Routes>
      {/* Public */}

      <Route path="/auth" element={<AuthPage />}>
        <Route index element={<Login />} />
        <Route path="recovery" element={<Recovery />}>
          <Route path="*" element={<Navigate to={-1} />} />
        </Route>
        <Route path="*" element={<Navigate to={-1} />} />
      </Route>
      <Route path="/register" element={<RegisterPage />}>
        <Route path="*" element={<Navigate to={-1} />} />
      </Route>

      {/* Verificación */}
      <Route path="/accounts/verify/:token_uuid" element={<VerificationPage />}>
        <Route path="*" element={<Navigate to={-1} />} />
      </Route>

      {/* Private */}
      {/* {true && ( */}
      {user.isLogged && (
        <>
          {/* Dashboard */}
          <Route path="/dashboard" element={<DashboardPage />}>
            <Route index element={<QuickAccessPage />} />
            <Route path="user" element={<UserPage />}>
              <Route index element={<Profile />} />
              <Route path="account" element={<Account />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="plan" element={<Plans />} />
              <Route path="bills" element={<Bills />} />
              <Route path="payments" element={<Payments />} />
              <Route
                path="account-suspension"
                element={<AccountSuspension />}
              />
            </Route>
            <Route path="business/:id" element={<BusinessPage />} />
            <Route path="storage" element={<StoragePage />} />
            <Route path="plugins" element={<PluginsPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="users/create" element={<UserFormPage />} />
            <Route path="users/:id" element={<UserFormPage />} />
            <Route path="pdf" element={<PdfPage />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Route>

          {/* Workspace */}
          <Route path="/workspace" element={<WorkspacePage />}>
            <Route path="*" element={<Navigate to="/workspace" />} />
          </Route>
        </>
      )}

      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  );
};

export default AppRouter;
