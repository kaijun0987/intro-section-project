import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import { useEffect } from "react";
import useUser from "./states/user-state";
import { useGet } from "./hooks/useAxios";
import Refresh from "./components/Refresh";

function App() {
  const { updateUsername } = useUser();
  const {
    data: res,
    isSuccess,
    isLoading,
    error,
  } = useGet("/auth/me", localStorage.getItem("token") || "", "getme");

  useEffect(() => {
    if (error) {
      localStorage.removeItem("token");
    }

    if (localStorage.getItem("token") == null || !isSuccess) return;
    updateUsername(res?.data.username || "");
  }, [isSuccess, res, updateUsername, error]);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full justify-center items-center">
        <Refresh />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
