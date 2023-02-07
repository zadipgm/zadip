const AndriodSvg = ({
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
      <path d="M24.527 1c.395 0 .59.456.398.764L21.93 6.757c-.34.566-1.16.01-.86-.514l2.997-4.994c.094-.164.272-.25.46-.25zM5.473 1c-.375.007-.59.455-.398.764L8.07 6.757c.338.563 1.174.01.86-.514L5.932 1.25C5.84 1.085 5.66.995 5.473 1zM19.5 13c-.822 0-1.5.678-1.5 1.5v2c0 .822.678 1.5 1.5 1.5s1.5-.678 1.5-1.5v-2c0-.822-.678-1.5-1.5-1.5zm0 1c.286 0 .5.214.5.5v2c0 .286-.214.5-.5.5-.286 0-.5-.214-.5-.5v-2c0-.286.214-.5.5-.5zm-9-1c-.822 0-1.5.678-1.5 1.5v2c0 .822.678 1.5 1.5 1.5s1.5-.678 1.5-1.5v-2c0-.822-.678-1.5-1.5-1.5zm0 1c.286 0 .5.214.5.5v2c0 .286-.214.5-.5.5-.286 0-.5-.214-.5-.5v-2c0-.286.214-.5.5-.5zm-9 8c-.822 0-1.5.678-1.5 1.5v4c0 .822.678 1.5 1.5 1.5h27c.822 0 1.5-.678 1.5-1.5v-4c0-.822-.678-1.5-1.5-1.5zm0 1h27c.286 0 .5.214.5.5v4c0 .286-.214.5-.5.5h-27c-.286 0-.5-.214-.5-.5v-4c0-.286.214-.5.5-.5zM15 7C7.937 7.01 1.772 11.695.062 18.377l-.003.012s-.154.594.032 1.247c.093.326.284.685.63.95.347.263.825.413 1.42.413h25.712c.595 0 1.075-.15 1.42-.414.348-.264.54-.623.632-.95.187-.652.037-1.247.037-1.247l-.004-.013C28.23 11.694 22.064 7.007 15 7zm0 1c6.62.006 12.37 4.386 13.967 10.613 0 .002.078.403-.022.75-.05.174-.13.315-.275.426-.147.11-.383.21-.816.21H2.144c-.435 0-.67-.1-.816-.21-.146-.112-.224-.253-.273-.427-.098-.344-.023-.736-.022-.744C2.63 12.39 8.38 8.01 15 8z" />
    </svg>
  );
};
export default AndriodSvg;
