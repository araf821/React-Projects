import React from "react";

const Menu = ({ items, category }) => {
  return (
    <>
      {items.map((item) => {
        if (category === "All" || item.category === category) {
          const { id, title, price, img, desc } = item;
          return (
            <article className="menu-item">
              <img className="photo" src={img} alt={title} />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <p className="price">{price}</p>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          );
        }
      })}
    </>
  );
};

export default Menu;
