const ArrowUpSvg = ({
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
      viewBox="0 0 1920 1920"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M994.034 694.296c-18.796-27.296-49.269-27.3-68.067 0l-351.074 509.836c-18.797 27.296-7.18 49.424 25.959 49.424h718.297c33.133 0 44.757-22.125 25.959-49.424L994.034 694.296Z"
        fillRule="evenodd"
      />
    </svg>
  );
};
export default ArrowUpSvg;
