import NavigationMenuBar from "@/components/Navbar/NavigationMenuBar";
import React from "react";

const LayoutPage = ({ children }) => {
  return (
    <div>
      <NavigationMenuBar />
      {children}
    </div>
  );
};

export default LayoutPage;
