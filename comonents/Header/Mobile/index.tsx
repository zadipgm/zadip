import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import BurgerSvg from "../../../public/icons/burgerSvg";
import CloudSvg from "../../../public/icons/cloudSvg";
import ServicesSvg from "../../../public/icons/servicesSvg";
import ModalComponent from "../../ReuseAbleComponents/Modal";
import {
  BurgerMenu,
  CloseIconWrapper,
  IconWrapper,
  InnerList,
  LangButton,
  ListTitle,
  MobileHeaderList,
  MobileHeaderListItem,
  MobileHeaderListLink,
  NestedList,
  NestedListItems,
  NestedListItemsLink,
} from "../header.styled.components";
import header_data from "../../../DataLayer/header.json";
import IconComponent from "../../ReuseAbleComponents/IconComponent";
import CloseSvg from "../../../public/icons/closeSvg";

const MobileHeader = () => {
  const { isLTR, translations, locale, device } = useTheme();
  const router = useRouter();

  const navigateToPage = (item: any) => {
    return router.push(`/${locale}${item.link}`);
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(open);
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
  return (
    <>
      <BurgerMenu onClick={handleOpen}>
        <BurgerSvg fill="#fff" width="30px" height="30px" />
        <ModalComponent
          open={open}
          handleClose={handleClose}
          classname={"mobile-header"}
        >
          <div>
            <CloseIconWrapper onClick={handleClose}>
              {locale === "ar" ? (
                <LangButton
                  href={`/en${router.asPath}`}
                  onClick={() => changeLocale()}
                  className={"mobile-lang"}
                >
                  English
                </LangButton>
              ) : (
                <LangButton
                  href={`/ar${router.asPath}`}
                  onClick={() => changeLocale()}
                  className={"mobile-lang"}
                >
                  العربية
                </LangButton>
              )}

              <CloseSvg width="40px" height="40px" fill="#fff" />
            </CloseIconWrapper>
            <MobileHeaderList>
              <MobileHeaderListItem>
                <MobileHeaderListLink href="/">
                  {translations?.home}
                </MobileHeaderListLink>
              </MobileHeaderListItem>
              <MobileHeaderListItem>
                <ListTitle>{translations?.products}</ListTitle>
                <InnerList>
                  <li>
                    <IconWrapper>
                      <CloudSvg fill="#fff" width="30px" height="30px" />
                      {isLTR ? "Cloud Services" : "الخدمات السحابية"}
                    </IconWrapper>
                    <NestedList>
                      {header_data.cloud.map((item, index) => {
                        return (
                          <NestedListItems key={index}>
                            <NestedListItemsLink href={item.link}>
                              {isLTR ? item.name_en : item.name_ar}
                            </NestedListItemsLink>
                          </NestedListItems>
                        );
                      })}
                    </NestedList>
                  </li>
                  <li>
                    <IconWrapper>
                      <ServicesSvg fill="#fff" width="25px" height="25px" />
                      {isLTR ? "eGov Services" : "خدمات الحكومة الالكترونية"}
                    </IconWrapper>
                    <InnerList>
                      {header_data.egov_services.map((item, index) => {
                        return (
                          <NestedListItems key={index}>
                            <NestedListItemsLink
                              href={`/${locale}${item.link}`}
                            >
                              {isLTR ? item.name_en : item.name_ar}
                            </NestedListItemsLink>
                          </NestedListItems>
                        );
                      })}
                    </InnerList>
                  </li>
                </InnerList>
              </MobileHeaderListItem>
              <MobileHeaderListItem>
                <IconWrapper>
                  {" "}
                  <ServicesSvg fill="#fff" width="30px" height="30px" />
                  {translations?.services}
                </IconWrapper>

                <InnerList>
                  <li>
                    <NestedListItemsLink
                      href={`/${locale}/professional_services`}
                    >
                      {isLTR ? "Professional Services" : "خدمات احترافية"}
                    </NestedListItemsLink>
                  </li>
                </InnerList>
              </MobileHeaderListItem>
              <MobileHeaderListItem>
                <MobileHeaderListLink href="#">
                  {translations?.aboutUs}
                </MobileHeaderListLink>
              </MobileHeaderListItem>
              <NestedList>
                {header_data.about_us.map((item, index) => {
                  return (
                    <li key={index}>
                      <NestedListItemsLink onClick={() => navigateToPage(item)}>
                        <IconComponent
                          icon={item.icon}
                          fill={"#fff"}
                          width="20px"
                          height="20px"
                        />{" "}
                        {isLTR ? item.name_en : item.name_ar}
                      </NestedListItemsLink>
                    </li>
                  );
                })}
              </NestedList>
              <li>
                <NestedListItemsLink href={"tel:// 9200 10047"}>
                  920010047
                </NestedListItemsLink>
              </li>
            </MobileHeaderList>
          </div>
        </ModalComponent>
      </BurgerMenu>
    </>
  );
};
export default MobileHeader;
