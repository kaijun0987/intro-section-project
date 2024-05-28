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
  } = useGet("/auth/me", localStorage.getItem("token") || "");
  useEffect(() => {
    if (localStorage.getItem("token") == null || !isSuccess) return;
    updateUsername(res?.data.username || "");
  }, [isSuccess, res, updateUsername]);

  return (
    <>
      {isLoading ? (
        <div className="flex h-screen w-full justify-center items-center">
          <Refresh />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
