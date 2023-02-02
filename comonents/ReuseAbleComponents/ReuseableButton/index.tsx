import * as React from "react";
import DownloadSvg from "../../../public/icons/downloadSvg";
import { Button } from "./styled.components";
interface IButtonProps {
  title: string;
  classname?: string;
}
const ReuseableButton: React.FC<IButtonProps> = ({ title, classname }) => {
  return (
    <Button className={classname}>
      {title} <DownloadSvg />
    </Button>
  );
};
export default ReuseableButton;
