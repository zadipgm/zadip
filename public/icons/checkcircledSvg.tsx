interface IProps {
  fill?: string;
  height?: string;
  width?: string;
}
const CheckCircledSvg = ({
  fill = "#86b820",
  height = "24",
  width = "24",
}: IProps) => {
  return (
    <svg
      viewBox="0 0 32 32"
      className="inline vMiddle ml8"
      width={width}
      height={height}
      data-name="iconCheckedCircle"
    >
      <path
        fill={fill}
        d="M16.206 5.956c-5.631 0-10.206 4.575-10.206 10.212s4.575 10.206 10.206 10.206 10.206-4.575 10.206-10.206-4.569-10.213-10.206-10.213zM14.169 21.269l-5.106-5.1 1.438-1.438 3.662 3.656 7.75-7.75 1.438 1.45-9.181 9.181z"
      ></path>
    </svg>
  );
};
export default CheckCircledSvg;
