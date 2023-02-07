const DownArrowSvg = ({
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
      viewBox="0 0 490 490"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path
        d="M490,165.37l-91.698-88.842L245,231.766L91.698,76.528L0,165.37l245,248.102L490,165.37z M91.219,119.611L245,275.343
	l153.781-155.732l47.717,46.237L245,369.91L43.502,165.848L91.219,119.611z"
      />
    </svg>
  );
};
export default DownArrowSvg;
