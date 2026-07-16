import Card from "./Card";

function TimelineItem({ entry }) {
  return (
    <li className="relative pl-10 sm:pl-14">
      <span
        className="absolute top-7 left-2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-primary bg-white sm:left-3"
        aria-hidden="true"
      />

      <Card as="article" className="flex flex-col gap-4">
        <div>
          <h3 className="text-card text-ink">{entry.year}</h3>
          <p className="text-sm text-muted">{entry.period}</p>
        </div>

        <p className="text-base text-muted">{entry.summary}</p>

        <div>
          <h4 className="mb-2 text-sm font-semibold text-ink">Milestones</h4>
          <ul className="flex list-disc flex-col gap-1 pl-5 text-base text-muted marker:text-accent">
            {entry.milestones.map((milestone) => (
              <li key={milestone}>{milestone}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold text-ink">Achievements</h4>
          <ul className="flex list-disc flex-col gap-1 pl-5 text-base text-muted marker:text-accent">
            {entry.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
      </Card>
    </li>
  );
}

export default TimelineItem;
