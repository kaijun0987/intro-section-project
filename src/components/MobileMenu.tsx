import Button from "./Button";
import DropdownButton from "./DropdownButton";
import CloseMenuIcon from "/public/assets/icon-close-menu.svg?react";
import DropdownItems from "./DropdownItems";
import { features } from "../data/features";
import { companys } from "../data/company";

type TMobileMenuProps = {
  onClickCloseMenuIcon?: () => void;
  openDropdown?: number;
  setOpenDropdown: React.Dispatch<React.SetStateAction<number>>;
  loginUsername?: string;
  onClickLoginButton?: () => void;
  onClickRegisterButton?: () => void;
  onClickLogoutButton?: () => void;
};

const MobileMenu = ({
  onClickCloseMenuIcon,
  openDropdown,
  setOpenDropdown,
  loginUsername,
  onClickLoginButton,
  onClickRegisterButton,
  onClickLogoutButton,
}: TMobileMenuProps) => {
  return (
    <>
      <div
        className="bg-cusblack fixed w-full h-screen z-auto top-0"
        onClick={onClickCloseMenuIcon}
      ></div>
      <div className="absolute top-0 right-0 w-[275px] h-screen bg-cuswhite z-auto duration-300  ">
        <CloseMenuIcon
          role="button"
          className="flex w-7 h-6 ms-auto mt-6 mr-6 mb-6"
          onClick={onClickCloseMenuIcon}
        />
        <div className="flex flex-col items-start pl-5 py-3 gap-y-4">
          <div>
            <DropdownButton
              text="Features"
              isItemUnderDropdown={false}
              isOpenDropdown={openDropdown === 3}
              setIsOpenDropdown={() =>
                setOpenDropdown(openDropdown === 3 ? 0 : 3)
              }
            />
            {openDropdown === 3 && <DropdownItems dropdownData={features} />}
          </div>
          <div>
            <DropdownButton
              text="Company"
              isItemUnderDropdown={false}
              isOpenDropdown={openDropdown === 4}
              setIsOpenDropdown={() =>
                setOpenDropdown(openDropdown === 4 ? 0 : 4)
              }
            />
            {openDropdown === 4 && <DropdownItems dropdownData={companys} />}
          </div>
          <Button children="Careers" fontSize="text-base" />
          <Button children="About" fontSize="text-base" />
        </div>
        <div className="flex flex-col items-center gap-4 mt-5">
          {loginUsername == "" ? (
            <Button
              children="Login"
              fontSize="text-base"
              onClick={onClickLoginButton}
            />
          ) : (
            <Button children={`${loginUsername}`} fontSize="text-base" />
          )}
          {loginUsername == "" ? (
            <Button
              children="Register"
              isBorder
              fontSize="text-base"
              horizontalPadding="px-20"
              verticalPadding="py-2"
              onClick={onClickRegisterButton}
            />
          ) : (
            <Button
              children="Logout"
              isBorder
              fontSize="text-base"
              horizontalPadding="px-20"
              verticalPadding="py-2"
              onClick={onClickLogoutButton}
            />
          )}
          {}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
