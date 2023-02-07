const BurgerSvg = ({
  width = "24",
  height = "24",
  className = "inline vMiddle",
  fill = "#0d4a76",
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path d="M5 12H20" stroke={fill} strokeWidth="2" strokeLinecap="round" />
      <path d="M5 17H20" stroke={fill} strokeWidth="2" strokeLinecap="round" />
      <path d="M5 7H20" stroke={fill} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
export default BurgerSvg;
