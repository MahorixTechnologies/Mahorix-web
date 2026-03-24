"use client";
import React, { useState } from "react";
import styles from "./contactus.module.scss";
import { Card } from "@mui/material";
import { Button, Input, Text, TextArea } from "@/components";
import { LuPhoneCall } from "react-icons/lu";
import { IoMail } from "react-icons/io5";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import { Flex } from "antd";
import { colors } from "@/assets";
import { Layout } from "@/partials";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // 'sending' | 'success' | 'error'

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

const handleSubmit = async () => {
  setStatus('sending');
  try {
    await fetch('https://script.google.com/macros/s/AKfycbyiN_LNo6om2A8x-p1eDFqD0OmHM8fb0zzGPmz5qZUbdat8AL5NZSbO57J02ntc1Xuvcw/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    setStatus('success');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  } catch (err) {
    setStatus('error');
  }
};

  return (
    <Layout className={"flex flex-col"}>
      <div className={styles.contactus}>
        <div className={styles.heroInner}>
          <Text type="h1" color={colors.secondary1}>
            Contact Us
          </Text>
          <Text type="h3" align="center" color={colors.main1}>
            Any question or remarks? Just write us a message!
          </Text>
        </div>
      </div>

      <Card className={styles.card} elevation={3}>
        <div className={styles.left}>
          <div className={styles.leftInner + " flex flex-col gap-4"}>
            <Text weight={600} type="h4" color="white">
              CONTACT INFORMATION
            </Text>
            <Text type="subtitle">Say something to start a live chat!</Text>
            <Text
              className={"!flex items-center "}
              weight={500}
              type="subtitle"
              color="white"
            >
              <LuPhoneCall fill="white" className="mr-4" size={17} />
              <span className="block">
                08144660073, 08085503290, <br /> 07051441713
              </span>
            </Text>
            <Text weight={500} type="subtitle" color="white">
              <IoMail className="inline mr-4" size={17} />{" "}
              mahorixtechnologies@gmail.com
            </Text>
            <Text weight={500} type="subtitle" color="white">
              <FaMapMarkerAlt className="inline mr-4" size={17} /> 371 borno
              way, Alagomeji, Yaba, lagos
            </Text>
            <div className="flex gap-2">
              <div className={styles.circle}>
                <FaLinkedinIn color="white" />
              </div>
              <div className={styles.circle}>
                <FaFacebookF color="white" />
              </div>
              <div className={styles.circle}>
                <FaTwitter color="white" />
              </div>
            </div>
          </div>
        </div>

        <Flex vertical className={styles.right + " gap-[24px] sm:gap-[60px]"}>
          <Flex wrap className="w-full gap-[16px] sm:gap-[40px]">
            <Input
              rootClass={"w-full sm:flex-[45%]"}
              label="First Name"
              value={formData.firstName}
              onChange={handleChange("firstName")}
            />
            <Input
              rootClass={"w-full sm:flex-[45%]"}
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange("lastName")}
            />
          </Flex>
          <Flex wrap className="w-full gap-[16px] sm:gap-[40px]">
            <Input
              rootClass={"w-full sm:flex-[45%]"}
              label="Email"
              value={formData.email}
              onChange={handleChange("email")}
            />
            <Input
              rootClass={"w-full sm:flex-[45%]"}
              label="Phone Number"
              value={formData.phone}
              onChange={handleChange("phone")}
            />
          </Flex>

          <TextArea
            rootClass={"w-[100%]"}
            label="Message"
            placeholder="Write a message..."
            value={formData.message}
            onChange={handleChange("message")}
          />

          {status === "success" && (
            <Text type="subtitle" color="green">
              ✅ Message sent successfully!
            </Text>
          )}
          {status === "error" && (
            <Text type="subtitle" color="red">
              ❌ Something went wrong. Please try again.
            </Text>
          )}

          <Flex justify="end">
            <Button
              width="100px"
              height="50px"
              onClick={handleSubmit}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send"}
            </Button>
          </Flex>
        </Flex>
      </Card>
    </Layout>
  );
};

export default ContactUs;
