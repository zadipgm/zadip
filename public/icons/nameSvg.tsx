const NameSvg = ({
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
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <ellipse
        xmlns="http://www.w3.org/2000/svg"
        cx="32"
        cy="24"
        rx="12"
        ry="16"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M22 33.46s-10.09 2.68-12 8A33 33 0 0 0 8 56h48a33 33 0 0 0-1.94-14.54c-1.93-5.32-12-8-12-8"
      />
    </svg>
  );
};
export default NameSvg;
