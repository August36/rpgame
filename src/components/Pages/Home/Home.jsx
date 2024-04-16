import Heroimg from "./Heroimg";
import HomeNews from "./HomeNews";

export const Home = () => {
  return (
    <>
      <Heroimg src="/heroImg.jpg" altText="Art piece"/>
      <HomeNews title="Nyt kunstværk" 
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            adipisci magnam neque ipsum assumenda nisi impedit maxime
            voluptatem. Aut labore ab odit voluptate repellat accusantium?"
      linkName="Læs mere"
            />
      <HomeNews title="Fernisering!" 
      text="Kom til fernis på galleriet på lørdag det bliver sjoovt!!"
      linkName="Læs mere"
            />
      <HomeNews title="Yoooo" 
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            adipisci magnam neque ipsum assumenda nisi impedit maxime
            voluptatem. Aut labore ab odit voluptate repellat accusantium?"
      linkName="Læs mere"
            />
    </>
  );
};

export default Home;
