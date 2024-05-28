import { companys } from "../data/company";
import { features } from "../data/features";
import Button from "./Button";
import DropdownButton from "./DropdownButton";
import MobileMenuIcon from "/public/assets/icon-menu.svg?react";

type NavBarProps = {
  onMobileMenuClick: () => void;
  openDropdown: number;
  setOpenDropdown: React.Dispatch<React.SetStateAction<number>>;
  loginUsername?: string;
  onClickLoginButton?: () => void;
  onClickRegisterButton?: () => void;
  onClickLogoutButton?: () => void;
};

const NavBar = ({
  onMobileMenuClick,
  openDropdown,
  setOpenDropdown,
  loginUsername,
  onClickLoginButton,
  onClickRegisterButton,
  onClickLogoutButton,
}: NavBarProps) => {
  return (
    <nav className="flex px-4 gap-x-16 mt-3">
      <div className="font-bold text-cusblack text-4xl/[1]">
        snap
        <div className="size-2" />
      </div>
      <div className="hidden lg:flex gap-x-16 ">
        <DropdownButton
          text="Features"
          dropdownDecoration="desktop-dropdown-items left-32"
          dropdownData={features}
          isOpenDropdown={openDropdown === 1}
          setIsOpenDropdown={() => setOpenDropdown(openDropdown === 1 ? 0 : 1)}
        />
        <DropdownButton
          text="Company"
          dropdownDecoration="desktop-dropdown-items left-80"
          dropdownData={companys}
          isOpenDropdown={openDropdown === 2}
          setIsOpenDropdown={() => setOpenDropdown(openDropdown === 2 ? 0 : 2)}
        />
        <Button text="Careers" fontSize="text-base" />
        <Button text="About" fontSize="text-base" />
      </div>
      <div className="hidden lg:flex gap-x-16 py-0 ms-auto ">
        {loginUsername == "" ? (
          <Button
            text="Login"
            fontSize="text-base"
            marginInline="ms-auto"
            onClick={onClickLoginButton}
          />
        ) : (
          <Button
            text={`${loginUsername}`}
            fontSize="text-base"
            marginInline="ms-auto"
            onClick={() => {}}
          />
        )}
        {loginUsername == "" ? (
          <Button
            text="Register"
            fontSize="text-base"
            isBorder
            borderRadius="rounded-xl"
            horizontalPadding="px-5"
            onClick={onClickRegisterButton}
          />
        ) : (
          <Button
            text="Logout"
            fontSize="text-base"
            isBorder
            borderRadius="rounded-xl"
            horizontalPadding="px-5"
            onClick={onClickLogoutButton}
          />
        )}
      </div>

      <MobileMenuIcon
        className="lg:hidden flex ml-auto mt-3"
        role="button"
        onClick={onMobileMenuClick}
      />
    </nav>
  );
};

export default NavBar;
