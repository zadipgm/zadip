const DownloadSvg = ({
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
      viewBox="0 0 325 325"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path
        d="M260.232,83.385h-54.253V2.5h-86.957v80.885H64.769L162.5,214.211L260.232,83.385z M139.021,103.385V22.5h46.957v80.885
				h34.349L162.5,180.793l-57.827-77.408H139.021z"
      />
      <path d="M260,182.5v70H65v-70H0v140h325v-140H260z M305,302.5H20v-100h25v70h235v-70h25V302.5z" />
    </svg>
  );
};
export default DownloadSvg;
