import React from "react";

const Navbar = (props) => {
  const { data } = props;
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <a href={item.url}>
            {item.icon}
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;

//rafce
