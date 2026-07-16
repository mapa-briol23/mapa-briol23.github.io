function Card({ as = "div", className = "", children, ...props }) {
  const Component = as;

  return (
    <Component
      className={`rounded-2xl border border-line bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-lg ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Card;
