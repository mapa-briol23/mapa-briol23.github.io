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

      <SectionHeader label="Seminars" title="Seminars Attended" align="right" className="mb-16" />

      <ul className="flex flex-col">
        {seminars.map((seminar, index) => (
          <Reveal key={seminar.id} as="li" delay={(index % 3) * 100}>
            <div className="group flex flex-col gap-2 border-b border-l-[3px] border-b-secondary/8 border-l-transparent py-6 pl-5 transition-all duration-300 ease-out hover:translate-x-2 hover:border-l-secondary sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <h3 className="max-w-2xl text-xl font-semibold text-balance text-ink transition duration-300 group-hover:text-secondary sm:text-2xl">
                {seminar.title}
              </h3>
              <p className="shrink-0 text-sm text-muted sm:text-right">
                <span className="block">{seminar.organizer}</span>
                <span className="block text-dim">{seminar.date}</span>
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </SectionContainer>
  );
}

export default Seminars;
