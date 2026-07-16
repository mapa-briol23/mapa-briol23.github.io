const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variants = {
  primary: "bg-primary text-white shadow-sm hover:bg-blue-700 hover:shadow-md",
  secondary: "border border-line bg-white text-ink hover:border-primary hover:text-primary",
};

function Button({ as = "button", variant = "primary", className = "", children, ...props }) {
  const Component = as;

  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}

export default Button;
