import React from "react";
import {
  NavBarBottom,
  NavBarTop,
  NewsletterHorizontal,
  NewsletterVertical,
  PasswordReset,
  SlideBar,
  WaitList,
} from "./components";

export default function Header() {
  return (
    
    <>
      <NewsletterHorizontal />
      <NewsletterVertical />
      <PasswordReset />
      <SlideBar />
      <WaitList />
      <NavBarTop />
      <NavBarBottom/>
    </>
  );
}
