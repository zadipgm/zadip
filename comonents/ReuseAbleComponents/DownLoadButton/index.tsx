import * as React from "react";
import DownloadSvg from "../../../public/icons/downloadSvg";
import { Button } from "./styled.components";
interface IButtonProps {
  title: string;
}
const DownLoadButton: React.FC<IButtonProps> = ({ title }) => {
  return (
    <Button>
      {title} <DownloadSvg />
    </Button>
  );
};
export default DownLoadButton;
