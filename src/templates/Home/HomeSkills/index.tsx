import { HomeH2 } from "../../../components/HomeH2";

export const HomeSkills = () => {
  return (
    <>
      <div className="flex items-center ml-52 mt-[300px]">
        <HomeH2 title="skills" />
      </div>
      <div className="flex">
        <div className="ml-[250px] flex">
          <img src="/assets/images/SkillsDots.svg" alt="" />
        </div>

        <div className="grid grid-cols-3 ml-60 gap-3 w-[584px] mt-11">
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
    </>
  );
};
