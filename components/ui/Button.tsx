"use client";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ style, ...props }: Props) {
  return (
    <button
      {...props}
      style={{
        padding: "10px 14px",
        borderRadius: 10,
        border: "1px solid #ddd",
        background: "#111",
        color: "#fff",
        cursor: "pointer",
        ...style,
      }}
    />
  );
}
