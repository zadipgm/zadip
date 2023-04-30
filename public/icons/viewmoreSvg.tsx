const ViewMoreSvg = ({
  width = "24",
  height = "24",
  className = "inline vMiddle",
  fill = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 17 17"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M0 7h7v-7h-7v7zM1 1h5v5h-5v-5zM10 0v7h7v-7h-7zM16 6h-5v-5h5v5zM0 17h7v-7h-7v7zM1 11h5v5h-5v-5zM10 17h7v-7h-7v7zM11 11h5v5h-5v-5z"
        fill={fill}
      />
    </svg>
  );
};
export default ViewMoreSvg;
