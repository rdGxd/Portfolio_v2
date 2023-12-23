import { HomeH2 } from "../../../components/HomeH2";

export const HomeSkills = () => {
  return (
    <article>
      <div className="flex items-center 2xl:ml-52 mt-[300px] md:ml-10">
        <HomeH2 title="skills" />
      </div>
      <div className="flex">
        <div className="flex xl:ml-20 2xl:ml-96 lg:ml-10">
          <img src="/assets/images/SkillsDots.svg" alt="" />
        </div>

        <div className="grid grid-cols-3 xl:ml-52 gap-3 w-[584px] xl:mt-11 md:grid-flow-row ">
          <div className="border border-gray">
            <h3 className="p-2 text-white">Languages</h3>
            <div className="p-2 border-t border-gray text-gray">
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>Python</p>
            </div>
          </div>

          <div className="border border-gray">
            <h3 className="p-2 text-white">Databases</h3>
            <div className="p-2 border-t border-gray text-gray">
              <p>MongoDB</p>
              <p>PostgreSQL</p>
              <p>MySQL</p>
            </div>
          </div>

          <div className="border border-gray ">
            <h3 className="p-2 text-white">Tools</h3>
            <div className="p-2 border-t border-gray text-gray ">
              <p>VSCode</p>
              <p>Figma</p>
              <p>Git</p>
              <p>GoogleFonts</p>
            </div>
          </div>
          <br />
          <div className="border border-gray ">
            <h3 className="p-2 text-white">Other</h3>
            <div className="p-2 border-t border-gray text-gray">
              <p>HTML</p>
              <p>CSS</p>
              <p>EJS</p>
              <p>REST</p>
              <p>SCSS</p>
            </div>
          </div>
          <div className="border border-gray ">
            <h3 className="p-2 text-white">FrameWorks</h3>
            <div className="p-2 border-t border-gray text-gray">
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
