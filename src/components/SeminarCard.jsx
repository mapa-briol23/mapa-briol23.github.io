import { Calendar, Users } from "lucide-react";
import Card from "./Card";

function SeminarCard({ seminar }) {
  return (
    <Card as="article" className="flex flex-col gap-3">
      <h3 className="text-card text-ink">{seminar.title}</h3>

      <dl className="flex flex-col gap-2 text-sm text-muted">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 shrink-0" aria-hidden="true" />
          <dt className="sr-only">Organizer</dt>
          <dd>{seminar.organizer}</dd>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
          <dt className="sr-only">Date</dt>
          <dd>{seminar.date}</dd>
        </div>
      </dl>

      <p className="text-base text-muted">{seminar.description}</p>
    </Card>
  );
}

export default SeminarCard;
