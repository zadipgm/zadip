const SortDown = ({
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
        <g id="arrow-down">
          <g>
            <polyline
              data-name="Right"
              fill="none"
              id="Right-2"
              points="7 16.4 12 21.5 17 16.4"
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
              y1="2.5"
              y2="19.2"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
export default SortDown;
