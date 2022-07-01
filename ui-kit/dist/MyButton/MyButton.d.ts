import React from 'react';
import "./MyButton.css";
export interface MyButtonProps {
    color: string;
    big?: boolean;
    children: React.ReactNode;
}
declare const MyButton: React.FC<MyButtonProps>;
export default MyButton;
