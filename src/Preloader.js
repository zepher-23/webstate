import React, { useState, useEffect } from "react";
import './Preloader.css'



const Preloader = () => {
    const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
    return (
        <div id="preloader" className=" justify-content-center align-items-center" style={{ display: show ? 'flex' : 'none' }}>
            Loading....
</div>
    );
};

export default Preloader;
