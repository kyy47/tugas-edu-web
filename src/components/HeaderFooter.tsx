import React from "react";
import Header from "./Header";
import Footer from "./Footer";
type HeaderFooter = {
  children: React.ReactNode;
};
function HeaderFooter({ children }: HeaderFooter) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default HeaderFooter;
