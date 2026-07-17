const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variants = {
  primary:
    "bg-primary text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_14px_32px_-8px_rgba(37,99,235,0.7)]",
  secondary:
    "border border-white/60 bg-white/70 text-ink backdrop-blur-md hover:-translate-y-0.5 hover:border-accent hover:text-primary hover:shadow-[0_12px_28px_-12px_rgba(37,99,235,0.4)]",
};

function Button({ as: Component = "button", variant = "primary", className = "", children, ...props }) {
  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}

export default Button;
