const TransactionSvg = ({
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
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path d="M512.21 256 290.32 384.08V640l63.37 36.55-.41-255.84 158.51-91.61 158.52 91.63v255.74L733.68 640V383.87zm31.48 420.58L512 694.9l-31.79-18.22V420.73l-63.37 36.55.1 255.84L512 768l95-54.88V457.28l-63.37-36.55z" />
    </svg>
  );
};
export default TransactionSvg;
