import DesktopHeaderDashboard from "./desktopHeaderDashboard";
import MobileHeaderDashboard from "./mobileHeaderDashboard";
import { HeadersContainer } from "./styled.components";

const Header = () => {
  return (
    <HeadersContainer>
      <div className="mobile">
        <MobileHeaderDashboard />
      </div>
      <div className="desktop">
        <DesktopHeaderDashboard />
      </div>
    </HeadersContainer>
  );
};
export default Header;
