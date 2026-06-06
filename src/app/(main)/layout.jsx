import BreakingNews from "@/components/Navbar/BrekingNews/BreakingNews";
import NavigationMenuBar from "@/components/Navbar/NavigationMenuBar";
import TopHeader from "@/components/TopHeader/TopHeader";
import React from "react";

const LayoutPage = ({ children }) => {
  return (
    <div>
      <TopHeader />
      <BreakingNews />
      <NavigationMenuBar />

      {children}
    </div>
  );
};

export default LayoutPage;
