const CodeSvg = ({
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
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path d="M19.498 7c-.182 0-.35.1-.437.26l-8.987 15.988c-.328.58.542 1.072.87.492L19.93 7.75c.196-.332-.045-.75-.432-.75zm3.03 2c.112.006.22.05.304.125l6.994 5.996c.232.2.232.56 0 .76l-6.994 5.995c-.48.43-1.14-.352-.652-.757l6.554-5.618-6.554-5.618c-.368-.308-.132-.882.348-.882zM7.472 9c-.112.006-.22.05-.304.125L.174 15.12c-.232.2-.232.56 0 .76l6.994 5.995c.48.43 1.14-.352.652-.757L1.266 15.5 7.82 9.882C8.188 9.574 7.952 9 7.472 9z" />
    </svg>
  );
};
export default CodeSvg;
