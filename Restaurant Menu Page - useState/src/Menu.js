import React from "react";

const Menu = ({ items, category }) => {
  return (
    <div className="menu-item">
      {items.map((item) => {
        if (category === "All" || item.category === category) {
          const { id, title, price, img, desc } = item;
          return (
            <div>
              <img className="photo" src={img} alt={title} />
              
            </div>
          )
        }
      })}
    </div>
  );
};

export default Menu;
