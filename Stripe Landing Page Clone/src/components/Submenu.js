import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const Submenu = () => {
  const { showSubmenu } = useGlobalContext();

  return <aside className={`${showSubmenu ? "submenu show" : "show"}`}>asdf</aside>;
};

export default Submenu;
