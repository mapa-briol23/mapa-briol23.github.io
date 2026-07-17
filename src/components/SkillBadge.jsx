function SkillBadge({ children }) {
  return (
    <li className="rounded-full border border-white/70 bg-linear-to-br from-haze to-mist px-4 py-2 text-sm font-medium text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition duration-300 ease-out hover:border-accent hover:from-accent/25 hover:to-secondary/15 hover:text-primary">
      {children}
    </li>
  );
}

export default SkillBadge;
