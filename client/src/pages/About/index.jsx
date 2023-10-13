import React, { useEffect } from "react";

const About = ({ setMenu }) => {
  useEffect(() => {
    setMenu("about");
  }, []);
  return (
    <div style={{padding:"20px"}}>
      <h1>About me</h1>
      <p>Cao Nguyễn Minh Khôi</p>
      <p>(+84)0936582182</p>
      <a href="https://www.facebook.com/khoi.cao.ng/">
        https://www.facebook.com/khoi.cao.ng/
      </a>
    </div>
  );
};

export default About;
