import { useState } from "react";
import Arrowdown from "/public/assets/icon-arrow-down.svg?react";
import Arrowup from "/public/assets/icon-arrow-up.svg?react";
import TDropdownItem from "../types/dropdown";
import DropdownItems from "./DropdownItems";

type TDropdownButtonProps = {
  text: string;
  dropdownDecoration?: string;
  dropdownData?: TDropdownItem[];
  isItemUnderDropdown?: boolean;
  isOpenDropdown: boolean;
  setIsOpenDropdown: () => void;
};

const DropdownButton = ({
  text,
  dropdownDecoration,
  dropdownData,
  isItemUnderDropdown = true,
  isOpenDropdown,
  setIsOpenDropdown,
}: TDropdownButtonProps) => {
  const [onMouseOver, setOnMouseOver] = useState(false);

  function handleOnMouseOver() {
    setOnMouseOver(true);
  }

  function handleOnMouseLeave() {
    setOnMouseOver(false);
  }

  return (
    <button
      className={`flex flex-row gap-2 items-center font-medium text-base  ${
        isOpenDropdown ? "text-cusblack" : "text-cusgray"
      } hover:button-hover`}
      onClick={setIsOpenDropdown}
      onMouseOver={handleOnMouseOver}
      onMouseLeave={handleOnMouseLeave}
    >
      {text}
      <div>
        <div className="size-1" />

        {isOpenDropdown ? (
          <Arrowup className="text-cusblack" />
        ) : (
          <Arrowdown
            className={`${onMouseOver ? "text-cusblack" : "text-cusgray"}`}
          />
        )}
        {isItemUnderDropdown && isOpenDropdown && (
          <DropdownItems
            dropdownDecoration={dropdownDecoration}
            dropdownData={dropdownData}
          />
        )}
      </div>
    </button>
  );
};
export default DropdownButton;
