// packages/ui/src/Header.tsx
import React from "react";

interface HeaderProps {
  title: string;
  bgColor?: string; // 背景色を任意で変更できるように
  textColor?: string; // テキスト色を任意で変更できるように
}

export const Header: React.FC<HeaderProps> = ({
  title,
  bgColor = "bg-gray-800",
  textColor = "text-white"
}) => {
  return (
    <header className={`${bgColor} p-4`}>
      <h1 className={`${textColor} text-4xl font-semibold`}>{title}</h1>
    </header>
  );
};
