const UsersSvg = ({
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
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <circle cx="16" cy="13" r="5" />
      <path d="M23,28A7,7,0,0,0,9,28Z" />
      <path d="M24,14a5,5,0,1,0-4-8" />
      <path d="M25,24h6a7,7,0,0,0-7-7" />
      <path d="M12,6a5,5,0,1,0-4,8" />
      <path d="M8,17a7,7,0,0,0-7,7H7" />
    </svg>
  );
};
export default UsersSvg;
