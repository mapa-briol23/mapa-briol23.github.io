function SkillBadge({ children }) {
  return (
    <li className="rounded-full border border-secondary/15 bg-primary/12 px-4 py-2 text-sm font-medium text-accent transition duration-300 ease-out hover:border-secondary/35 hover:bg-primary/25">
      {children}
    </li>
  );
}

export default SkillBadge;
