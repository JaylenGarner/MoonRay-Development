"use client";

import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <InlineWidget
      url="https://calendly.com/jaylen-garner"
      styles={{ height: "600px" }}
      pageSettings={{ primaryColor: "212121", textColor: "212121" }}
    />
  );
};

export default Calendly;
