import React, { useState } from "react";
import OtpInput from "react-otp-input";
interface IProps {
  otpNumber: number;
  width?: string;
}
export default function OtpComponent({ otpNumber, width }: IProps) {
  const [otp, setOtp] = useState("");

  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={otpNumber}
      renderInput={(props) => <input {...props} />}
      inputStyle={{ width: width, height: "29px", textAlign: "start" }}
    />
  );
}
