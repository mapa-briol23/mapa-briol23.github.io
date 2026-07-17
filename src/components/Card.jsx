/**
 * The frosted surface every card in the portfolio is built on.
 * `padded` is off for cards whose image bleeds to the card edge.
 */
function Card({ as: Component = "div", padded = true, className = "", children, ...props }) {
  return (
    <Component className={`glass glass-hover ${padded ? "p-7 sm:p-8" : ""} ${className}`} {...props}>
      {children}
    </Component>
  );
}

export default Card;
