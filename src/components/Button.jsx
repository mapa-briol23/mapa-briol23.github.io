const base =
  "items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

/* Matches a Tailwind display utility, with or without a variant prefix (`hidden`,
   `sm:inline-flex`). Anchored on a class boundary so `items-center` and friends
   cannot match. */
const displayUtility =
  /(?:^|\s)(?:[\w-]+:)*(?:block|inline-block|inline|flex|inline-flex|grid|inline-grid|contents|hidden)(?=\s|$)/;

const variants = {
  primary:
    "bg-primary text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_14px_32px_-8px_rgba(37,99,235,0.7)]",
  secondary:
    "border border-white/60 bg-white/70 text-ink backdrop-blur-md hover:-translate-y-0.5 hover:border-accent hover:text-primary hover:shadow-[0_12px_28px_-12px_rgba(37,99,235,0.4)]",
};

function Button({ as: Component = "button", variant = "primary", className = "", children, ...props }) {
  /* Two display utilities in one class list do not resolve by intent — the class
     attribute is unordered, so the stylesheet decides, and the caller silently loses.
     Standing our own down whenever the caller brings one keeps `hidden sm:inline-flex`
     (and anything like it) meaning what it reads as. */
  const display = displayUtility.test(className) ? "" : "inline-flex";

  return (
    <Component className={`${display} ${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}

export default Button;
