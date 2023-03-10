const CloudSvg = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.125 9.03333C17.5583 6.15833 15.0333 4 12 4C9.59167 4 7.5 5.36667 6.45833 7.36667C3.95 7.63333 2 9.75833 2 12.3333C2 15.0917 4.24167 17.3333 7 17.3333H17.8333C20.1333 17.3333 22 15.4667 22 13.1667C22 10.9667 20.2917 9.18333 18.125 9.03333ZM14.1675 8.58002L14.99 9.40835L10.3233 14.075L7.98999 11.7475L8.81832 10.925L10.3233 12.4242L14.1675 8.58002Z"
      />
    </svg>
  );
};
export default CloudSvg;
