import React from "react";
import "./MyInput.css";
export interface MyInputProps {
    big: boolean;
    placeholder: string;
    label: string;
    children: React.ReactNode;
}
declare const MyInput: React.FC<MyInputProps>;
export default MyInput;
