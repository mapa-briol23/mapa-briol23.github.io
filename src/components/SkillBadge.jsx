function SkillBadge({ children }) {
  return (
    <li className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition duration-200 hover:border-accent hover:text-primary">
      {children}
    </li>
  );
}

export default SkillBadge;
