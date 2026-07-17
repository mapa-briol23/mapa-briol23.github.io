import { Calendar, Users } from "lucide-react";
import Card from "./Card";

function SeminarCard({ seminar }) {
  return (
    <Card as="article" className="group flex h-full flex-col gap-4">
      <h3 className="text-card text-balance text-ink transition duration-300 group-hover:text-secondary">
        {seminar.title}
      </h3>

      <dl className="flex flex-col gap-2 text-sm text-muted">
        <div className="flex items-center gap-2.5">
          <Users className="h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
          <dt className="sr-only">Organizer</dt>
          <dd>{seminar.organizer}</dd>
        </div>
        <div className="flex items-center gap-2.5">
          <Calendar className="h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
          <dt className="sr-only">Date</dt>
          <dd>{seminar.date}</dd>
        </div>
      </dl>

      <div aria-hidden="true" className="h-px bg-linear-to-r from-secondary/25 to-transparent" />

      <p className="text-base leading-relaxed text-muted">{seminar.description}</p>
    </Card>
  );
}

export default SeminarCard;
