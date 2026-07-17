function SkillBadge({ children }) {
  return (
    <li className="rounded-full border border-secondary/15 bg-primary/12 px-4 py-2 text-sm font-medium text-accent transition duration-300 ease-out hover:-translate-y-0.5 hover:border-lilac/40 hover:bg-primary/25 hover:shadow-[0_0_18px_rgba(139,92,246,0.18)]">
      {children}
    </li>
  );
}

export default SkillBadge;
