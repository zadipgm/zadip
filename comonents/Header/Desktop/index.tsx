import Link from "next/link";
import * as React from "react";
import { useTheme } from "styled-components";
import CloudSvg from "../../../public/icons/cloudSvg";
import header_data from "../../../DataLayer/header.json";
import IconDownArrowHead from "../../../public/icons/dropdownArrowSvg";
import {
  LangButton,
  MenuListcontainer,
  MenuListWrapper,
  NavBar,
  NavbarItems,
  NavbarItemsLink,
  NavbarItemsList,
  NavBarList,
} from "../header.styled.components";
import ServicesSvg from "../../../public/icons/servicesSvg";
import IconComponent from "../../ReuseAbleComponents/IconComponent";
import { useRouter } from "next/router";
import ModalComponent from "../../ReuseAbleComponents/Modal";
const DesktopHeader = () => {
  const [open, setOpen] = React.useState(false);
  const { translations, isLTR, locale } = useTheme();
  const router = useRouter();
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open);
  };
  const changeLocale = React.useCallback(() => {
    if (locale === "en-US" || locale === "en") {
      router.push(`${router.asPath}`, `${router.asPath}`, {
        locale: "en",
      });
    } else {
      router.push(`${router.asPath}`, `${router.asPath}`, { locale: "ar" });
    }
  }, [locale]);
  const navigateToPage = (item: any) => {
    return router.push(`/${locale}${item.link}`);
  };
  return (
    <>
      <NavBar>
        {/* ========Home======== */}

        <NavBarList>
          <Link href={"/"}>{translations?.home}</Link>
        </NavBarList>

        {/* ========ProductsList======== */}

        <NavBarList>
          {translations?.products} <IconDownArrowHead fill="#fff" />
          <div className="dropdown-content">
            <NavbarItems className="survillence">
              <li>
                <MenuListcontainer>
                  <MenuListWrapper>
                    <CloudSvg fill="#fff" width="30px" height="30px" />
                    <span>
                      {" "}
                      {isLTR ? "Cloud Services" : "الخدمات السحابية"}
                    </span>
                  </MenuListWrapper>
                  <IconDownArrowHead
                    fill="#fff"
                    width="20px"
                    height="20px"
                    className="down-arrow-left"
                  />
                </MenuListcontainer>
                <div>
                  <ul>
                    {header_data.cloud.map((item, index) => {
                      return (
                        <NavbarItemsList key={index}>
                          <NavbarItemsLink
                            href={item.link}
                            target={
                              translations?.muaref ===
                              (isLTR ? item.name_en : item.name_ar)
                                ? ""
                                : "_blank"
                            }
                          >
                            {isLTR ? item.name_en : item.name_ar}
                          </NavbarItemsLink>
                        </NavbarItemsList>
                      );
                    })}
                  </ul>
                </div>
              </li>
            </NavbarItems>

            <NavbarItems className="access-control">
              <li>
                <MenuListcontainer>
                  <MenuListWrapper>
                    <ServicesSvg fill="#fff" width="25px" height="25px" />
                    <span>
                      {" "}
                      {isLTR ? "eGov Services" : "خدمات الحكومة الالكترونية"}
                    </span>
                  </MenuListWrapper>
                  <IconDownArrowHead
                    fill="#fff"
                    width="20px"
                    height="20px"
                    className="down-arrow-left"
                  />
                </MenuListcontainer>
                <ul>
                  {header_data.egov_services.map((item, index) => {
                    return (
                      <NavbarItemsList key={index}>
                        <NavbarItemsLink href={`/${locale}${item.link}`}>
                          {isLTR ? item.name_en : item.name_ar}
                        </NavbarItemsLink>
                      </NavbarItemsList>
                    );
                  })}
                </ul>
              </li>
            </NavbarItems>
          </div>
        </NavBarList>

        {/* ========ServicesList======== */}

        <NavBarList>
          {translations?.services} <IconDownArrowHead fill="#fff" />
          <div className="dropdown-content other-items">
            <NavbarItems>
              <NavbarItemsLink href={`/${locale}/professional_services`}>
                <ServicesSvg fill="#fff" width="30px" height="30px" />
                <span>
                  {" "}
                  {isLTR ? "Professional Services" : "خدمات احترافية"}
                </span>
              </NavbarItemsLink>
            </NavbarItems>
          </div>
        </NavBarList>
        <NavBarList>
          {translations?.aboutUs} <IconDownArrowHead fill="#fff" />
          <div className="dropdown-content other-items">
            <NavbarItems>
              {header_data.about_us.map((item, index) => {
                return (
                  <NavbarItemsList key={index}>
                    <NavbarItemsLink href={`/${locale}${item.link}`}>
                      <IconComponent
                        icon={item.icon}
                        fill={"#fff"}
                        width="20px"
                        height="20px"
                      />{" "}
                      {isLTR ? item.name_en : item.name_ar}
                    </NavbarItemsLink>
                  </NavbarItemsList>
                );
              })}
            </NavbarItems>
          </div>
        </NavBarList>

        <NavBarList>
          <Link href={"tel:// 9200 10047"}>920010047</Link>
        </NavBarList>
        <div>
          {locale === "ar" ? (
            <LangButton
              href={`/en${router.asPath}`}
              onClick={() => changeLocale()}
            >
              English
            </LangButton>
          ) : (
            <LangButton
              href={`/ar${router.asPath}`}
              onClick={() => changeLocale()}
            >
              العربية
            </LangButton>
          )}
        </div>
      </NavBar>
    </>
  );
};
export default DesktopHeader;
