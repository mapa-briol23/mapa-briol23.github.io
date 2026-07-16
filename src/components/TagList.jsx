function TagList({ label, items }) {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-ink">{label}</p>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full bg-surface px-3 py-1 text-sm text-muted ring-1 ring-line ring-inset"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TagList;
