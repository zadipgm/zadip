interface IProps {
  fill?: string;
  height?: string;
  width?: string;
}
const ArrowDown = ({
  fill = "#86b820",
  height = "24",
  width = "24",
}: IProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="inline vMiddle ml8"
      width={width}
      height={height}
      data-name="iconCheckedCircle"
    >
      <path
        d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z"
        fill={fill}
      />
    </svg>
  );
};
export default ArrowDown;
