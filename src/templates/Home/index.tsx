import { GoTop } from "../../components/GoTop";
import { First } from "./First";
import { HomeAbout } from "./HomeAbout";
import { HomeContacts } from "./HomeContacts";
import { HomeProjects } from "./HomeProjects";
import { HomeSkills } from "./HomeSkills";

export const Home = () => {
  return (
    <>
      <First />
      <HomeProjects />
      <HomeSkills />
      <HomeAbout />
      <HomeContacts />
      <GoTop />
    </>
  );
};
