import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Services.scss";

function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query).then((data) => {
      setServices(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">Our Services</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {services.map((service) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={service.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: service.bgColor }}
              >
                <motion.img
                  whileHover={{ y: [0, -20], scale: [1, 1.2] }}
                  src={urlFor(service.icon)}
                  alt={service.name}
                />
              </div>
              <p className="p-text">{service.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Services, "app__skills"),
  "services",
  "app__whitebg"
);
