function TagList({ label, items }) {
  return (
    <div>
      <p className="mb-3 text-label text-muted uppercase">{label}</p>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full bg-linear-to-br from-haze to-mist px-3.5 py-1.5 text-sm text-ink/80 ring-1 ring-white/70 ring-inset"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TagList;
