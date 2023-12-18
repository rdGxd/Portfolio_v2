import { First } from "../../components/First";
import { HomeAbout } from "../../components/HomeAbout";
import { HomeContacts } from "../../components/HomeContacts";
import { HomeProjects } from "../../components/HomeProjects";
import { HomeSkills } from "../../components/HomeSkills";

export const Home = () => {
  return (
    <>
      <First />
      <HomeProjects />
      <HomeSkills />
      <HomeAbout />
      <HomeContacts />
    </>
  );
};
