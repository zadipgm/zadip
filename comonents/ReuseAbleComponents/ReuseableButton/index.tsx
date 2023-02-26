import * as React from "react";
import DownloadSvg from "../../../public/icons/downloadSvg";
import { Button } from "./styled.components";
interface IButtonProps {
  title: string;
  classname?: string;
  href?: string;
}
const ReuseableButton: React.FC<IButtonProps> = ({
  title,
  classname,
  href,
}) => {
  return (
    <Button className={classname} href={href} target={"_blank"}>
      {title} <DownloadSvg />
    </Button>
  );
};
export default ReuseableButton;
