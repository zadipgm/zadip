const PassWordSvg = ({
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
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <g xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2">
        <g id="invisible_box" data-name="invisible box">
          <rect width="48" height="48" fill="none" />
        </g>
        <g id="Layer_7" data-name="Layer 7">
          <g>
            <path d="M39,18H35V13A11,11,0,0,0,24,2H22A11,11,0,0,0,11,13v5H7a2,2,0,0,0-2,2V44a2,2,0,0,0,2,2H39a2,2,0,0,0,2-2V20A2,2,0,0,0,39,18ZM15,13a7,7,0,0,1,7-7h2a7,7,0,0,1,7,7v5H15ZM37,42H9V22H37Z" />
            <circle cx="15" cy="32" r="3" />
            <circle cx="23" cy="32" r="3" />
            <circle cx="31" cy="32" r="3" />
          </g>
        </g>
      </g>
    </svg>
  );
};
export default PassWordSvg;
