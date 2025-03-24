interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { children } = props;
  return (
    <button
      style={{
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#0070f3",
        color: "white",
        cursor: "pointer",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export type { ButtonProps };
