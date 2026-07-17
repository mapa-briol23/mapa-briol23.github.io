import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { ConcentricCircles } from "../components/Decor";
import { seminars } from "../data/seminars";

/** A stacked list, not a grid: title left, organizer and date right, a hairline
    between each. Rows slide right and light a blue edge on hover. */
function Seminars() {
  return (
    <SectionContainer id="seminars" tone="deep">
      <ConcentricCircles size={440} className="-top-32 -left-48 -z-10 hidden lg:block" />
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-0 -z-10"
      />

      <SectionHeader label="Seminars" title="Seminars Attended" align="right" className="mb-16" />

      <ul className="flex flex-col">
        {seminars.map((seminar, index) => {
          // Rows light alternately blue and violet on hover, down the list.
          const borderAccent =
            index % 2 === 0 ? "hover:border-l-secondary" : "hover:border-l-iris";
          const textAccent =
            index % 2 === 0 ? "group-hover:text-secondary" : "group-hover:text-lilac";

          return (
          <Reveal key={seminar.id} as="li" delay={(index % 3) * 100}>
            <div className={`group flex flex-col gap-2 border-b border-l-[3px] border-b-secondary/8 border-l-transparent py-6 pl-5 transition-all duration-300 ease-out hover:translate-x-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 ${borderAccent}`}>
              <h3 className={`max-w-2xl text-xl font-semibold text-balance text-ink transition duration-300 sm:text-2xl ${textAccent}`}>
                {seminar.title}
              </h3>
              <p className="shrink-0 text-sm text-muted sm:text-right">
                <span className="block">{seminar.organizer}</span>
                <span className="block text-dim">{seminar.date}</span>
              </p>
            </div>
          </Reveal>
          );
        })}
      </ul>
    </SectionContainer>
  );
}

export default Seminars;
