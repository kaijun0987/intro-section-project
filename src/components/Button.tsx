type TButtonProps = {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  isBorder?: boolean;
  fontSize?: string;
  borderColor?: string;
  borderRadius?: string;
  fontWeight?: string;
  horizontalPadding?: string;
  verticalPadding?: string;
  marginInline?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  bgColor = "bg-cuswhite",
  textColor = "text-cusgray",
  fontWeight = "font-medium",
  isBorder = false,
  fontSize = "text-default",
  borderColor = "border-cusblack",
  borderRadius = "rounded-2xl",
  horizontalPadding,
  verticalPadding,
  marginInline,
  onClick,
}: TButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={` ${marginInline} ${horizontalPadding} ${verticalPadding}  items-center ${bgColor} ${textColor} ${fontSize} ${fontWeight} ${
        isBorder && `border ${borderRadius} ${borderColor}`
      } hover:button-hover`}
    >
      {children}
    </button>
  );
};

export default Button;
