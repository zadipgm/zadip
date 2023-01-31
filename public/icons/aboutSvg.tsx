const AboutSvg = ({
  width = "24",
  height = "24",
  className = "",
  fill = "#0d4a76",
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path
        d="M789.333333 853.333333H234.666667l-128 128V256c0-70.4 57.6-128 128-128h554.666666c70.4 0 128 57.6 128 128v469.333333c0 70.4-57.6 128-128 128z"
        fill={fill}
      />

      <path
        d="M469.333333 426.666667h85.333334v234.666666h-85.333334z"
        fill="gray"
      />
      <path
        d="M512 320m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z"
        fill="gray"
      />
    </svg>
  );
};
export default AboutSvg;
