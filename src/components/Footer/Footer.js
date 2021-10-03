import React from "react";
import { IoLogoReact } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="footer">
      <p>
        Created with{" "}
        <a href="https://reactjs.org/">
          <IoLogoReact
            style={{
              color: "#7fffd4",
              height: 18,
              width: 22,
              background: "#000",
            }}
          />
        </a>{" "}
        by Piero Sabino
      </p>
    </div>
  );
};

export default Footer;
