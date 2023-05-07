const SortUp = ({
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
      <g id="Complete">
        <g id="arrow-up">
          <g>
            <polyline
              data-name="Right"
              fill="none"
              id="Right-2"
              points="7 7.5 12 2.5 17 7.5"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />

            <line
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="12"
              x2="12"
              y1="21.3"
              y2="4.8"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
export default SortUp;
