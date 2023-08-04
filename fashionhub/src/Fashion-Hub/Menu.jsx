import React from "react";
import { Menubar } from "primereact/menubar";
import { Card } from "primereact/card";

const Menu = () => {
  const menuItem = [
    {
      label: "Home",
    },
    {
      label: "Shop",
    },
    {
      label: "Collection",
    },
    {
      label: "Pages",
    },
    {
      label: "Blog",
    },
    {
      label: "Contact-us",
    },
  ];
  return (
    <div className="container">
      <Menubar model={menuItem} />
    </div>
  );
};

export default Menu;
