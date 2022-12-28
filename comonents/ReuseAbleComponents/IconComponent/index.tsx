import dynamic from "next/dynamic";
import * as React from "react";
interface IProps {
  icon?: string;
  fill: string;
  width: string;
  height: string;
}
const IconComponent: React.FC<IProps> = ({ icon, fill, width, height }) => {
  const Icon: React.ComponentType<{
    fill: string;
    width: string;
    height: string;
  }> = dynamic(() =>
    import(`../../../public/icons/${icon ?? ""}`).then((mod) => {
      return mod.default;
    })
  );
  return (
    <div>
      <Icon fill={fill} width={width} height={height} />
    </div>
  );
};
export default IconComponent;
