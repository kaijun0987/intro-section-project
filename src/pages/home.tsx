import Button from "../components/Button";
import IconDataBiz from "/public/assets/client-databiz.svg?react";
import IconAudioPhile from "/public/assets/client-audiophile.svg?react";
import IconMeet from "/public/assets/client-meet.svg?react";
import IconMaker from "/public/assets/client-maker.svg?react";
import { useState } from "react";
import MobileMenu from "../components/MobileMenu";
import NavBar from "../components/NavBar";
import useUser from "../states/user-state";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
// import { usePost } from "../hooks/useAxios";

const HomePage = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  //0: close 1; 1: Features Open, Company close; 2: Company open, Feature close;
  // 3&&4 same with 1&&2 but mobile Dropdown handle;
  const [openDropdown, setOpenDropdown] = useState(0);

  const { username, updateUsername } = useUser();

  const navigator = useNavigate();

  const queryClient = useQueryClient();

  function handleOnClickButtonLogin() {
    navigator("login");
  }

  function handleOnClickButtonRegister() {
    navigator("register");
  }

  function handleOnClickButtonLogout() {
    localStorage.removeItem("token");
    updateUsername("");
    queryClient.clear();
  }

  return (
    <div className="bg-cuswhite flex h-screen min-w-full lg:w-full flex-col ">
      <NavBar
        onMobileMenuClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        loginUsername={`${username}`}
        onClickLoginButton={handleOnClickButtonLogin}
        onClickRegisterButton={handleOnClickButtonRegister}
        onClickLogoutButton={handleOnClickButtonLogout}
      />
      <div className="mt-4 flex flex-row justify-center lg:hidden">
        <img
          src="./src/assets/images/image-hero-mobile.png"
          className="max-w-md"
        />
      </div>

      <div
        className="lg:flex lg:flex-row justify-center items-center  lg:max-w-screen-2xl lg:m-auto px-3 lg:px-8 gap-28"
        onClick={() => setOpenDropdown(0)}
      >
        <div>
          <h1 className="text-4xl lg:text-8xl font-bold py-12 text-center lg:text-start">
            Make <br className="hidden lg:flex" /> remote work
          </h1>
          <h2 className=" font-medium text-lg lg:text-default text-cusgray px-3 pb-8 lg:pb-12 lg:max-w-lg text-center lg:text-start">
            Get your team in sync,no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.
          </h2>
          <div className="flex justify-center lg:justify-start">
            <Button
              bgColor="bg-cusblack"
              textColor="text-cuswhite"
              isBorder
              verticalPadding="px-7"
              horizontalPadding="py-3"
            >
              Learn more
            </Button>
          </div>

          <div className="flex flex-row gap-x-5 lg:gap-x-12 pt-12 lg:pt-28 justify-center lg:justify-start">
            <IconDataBiz className="scale-75 lg:scale-100" />
            <IconAudioPhile className="scale-75 lg:scale-100" />
            <IconMeet className="scale-75 lg:scale-100" />
            <IconMaker className="scale-75 lg:scale-100" />
          </div>
        </div>

        <img
          src="./src/assets/images/image-hero-desktop.png"
          className="max-w-xl scale-90 hidden lg:flex"
        />
      </div>

      {/* Mobile Menu bar */}
      <div className="lg:hidden flex">
        {isOpenMobileMenu && (
          <MobileMenu
            onClickCloseMenuIcon={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            loginUsername={username}
            onClickLoginButton={handleOnClickButtonLogin}
            onClickRegisterButton={handleOnClickButtonRegister}
            onClickLogoutButton={handleOnClickButtonLogout}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
