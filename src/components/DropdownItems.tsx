import TDropdownItem from "../types/dropdown";

type TDropdownItemProps = {
  dropdownDecoration?: string;
  dropdownData?: TDropdownItem[];
};

const DropdownItems = ({
  dropdownDecoration = "mobile-dropdown-items",
  dropdownData,
}: TDropdownItemProps) => {
  return (
    <ul className={`${dropdownDecoration}`}>
      {dropdownData &&
        dropdownData.map((data) => (
          <li
            key={data.title}
            className="flex gap-3 left-80 items-center py-2 text-cusgray font-medium text-lg lg:hover:button-hover active:button-hover"
          >
            {data.icon && (
              <img src={data.icon} className="size-5 object-cover" />
            )}
            {data.title}
          </li>
        ))}
    </ul>
  );
};

export default DropdownItems;
