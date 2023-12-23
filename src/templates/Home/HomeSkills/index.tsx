import { HomeH2 } from "../../../components/HomeH2";

export const HomeSkills = () => {
  return (
    <article>
      <div className="flex items-center 2xl:ml-52 mt-[300px] md:ml-10">
        <HomeH2 title="skills" />
      </div>
      <div className="flex">
        <div className="lg:ml-20 flex 2xl:ml-96 ">
          <img src="/assets/images/SkillsDots.svg" alt="" />
        </div>

        <div className="grid grid-cols-3 lg:ml-52 gap-3 w-[584px] lg:mt-11">
          <div className="border border-gray">
            <h3 className="text-white p-2">Languages</h3>
            <div className="border-t border-gray p-2 text-gray">
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>Python</p>
            </div>
          </div>

          <div className="border border-gray">
            <h3 className="text-white p-2">Databases</h3>
            <div className="border-t border-gray p-2 text-gray">
              <p>MongoDB</p>
              <p>PostgreSQL</p>
              <p>MySQL</p>
            </div>
          </div>

          <div className="border border-gray  ">
            <h3 className="text-white p-2">Tools</h3>
            <div className="border-t border-gray p-2 text-gray ">
              <p>VSCode</p>
              <p>Figma</p>
              <p>Git</p>
              <p>GoogleFonts</p>
            </div>
          </div>
          <br />
          <div className="border border-gray ">
            <h3 className="text-white p-2">Other</h3>
            <div className="border-t border-gray p-2 text-gray">
              <p>HTML</p>
              <p>CSS</p>
              <p>EJS</p>
              <p>REST</p>
              <p>SCSS</p>
            </div>
          </div>
          <div className="border border-gray ">
            <h3 className="text-white p-2">FrameWorks</h3>
            <div className="border-t border-gray p-2 text-gray">
              <p>React</p>
              <p>NextJS</p>
              <p>ExpressJS</p>
              <p>Tailwind</p>
              <p>And others...</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
