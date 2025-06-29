"use client";

import React from "react";
import {Button, Text} from "@/components";
import styles from "./home.module.scss";
import {colors} from "@/assets";
import {useDeviceSize} from "@/hooks";

const Transform = () => {
  const sizes = useDeviceSize();
  const isMobile = sizes.width < 1024;

  return (
    <div className={styles.transform}>
      <Text
        color={colors.secondary1}
        weight={"300"}
        size={isMobile ? "30px" : "50px"}
        lh={isMobile ? "2rem" : "4rem"}
        type='h5'
        block
        align='center'
      >
        Ready to Transform Your Ideas into <br /> Results? Let's Get Started!
      </Text>
      <Button to="/contact-us">Schedule a Call</Button>
    </div>
  );
};

export default Transform;
