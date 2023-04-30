const ClockIcon = ({
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
      fill={"#fff"}
    >
      <path
        opacity="0.1"
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        fill={"#fff"}
      />
      <path
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke={fill}
        strokeWidth="2"
      />
      <path
        d="M12 7L12 11.5L12 11.5196C12 11.8197 12.15 12.1 12.3998 12.2665V12.2665L15 14"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ClockIcon;
