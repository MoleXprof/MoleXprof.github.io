import Head from "next/head";
import Header from "../header";
import Image from "next/image";
import ImageCarousel from "../imageCarousel";
import { topAnimes } from "../constants/constants";
import { topMangas } from "../constants/constants";
import { useRouter } from "next/router";
import SubHeader from "../subHeader";
import Hero from "../hero";
import Footer from "../footer";
import Card from "../textCard";

const Home = () => {
  const router = useRouter();
  const domain = router.route.split("/");

  return (
    <div className="bg-gray-50">
      <Head>
        <title>About Me | Kyle Chin</title>
        <meta name="title" content="About Me | Kyle Chin" />
        <meta
          name="description"
          content="Interests and Passions of Kyle Chin"
        />
        <link rel="shortcut icon" href="/images/web-icon-circle.png" />
      </Head>
      <Header currentTab={domain[1]} />
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <Hero
          topText="Hello, my name is"
          title="Kyle Chin"
          backgroundTitle="Programmer"
          subTitle="I am a "
          text="An ethusiatic programmer that is passionate about front-end web designs and is looking to further my technical skills. As an individual, I value hard work, discipline, and respect above all else. These ideals guide my approach to problem solving and life in general."
          titleClassName="text-yellow-400"
          backgroundColour="bg-yellow-400"
          typing
        />
        <div className="flex">
          <div className="relative filter blur-xl ml-20 mt-32">
            <div className="absolute top-0 md:left-36 left-28 lg:w-72 w-48 lg:h-72 h-48 bg-orange-400 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
            <div className="absolute top-0 md:left-72 left-12 lg:w-72 w-48 lg:h-72 h-48 bg-yellow-300 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-24 md:left-20 left-4 lg:w-72 w-48 lg:h-72 h-48 bg-pink-300 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-5000"></div>
          </div>
          <div className="relative sm:mx-auto mr-10 mt-20 hidden">
            <Image
              className="rounded-xl brightness-105 shadow-lg"
              src="/images/kyle-chin.jpeg"
              alt="Kyle Chin"
              height={550}
              width={350}
            />
          </div>
        </div>
      </div>
      <SubHeader
        title="Hobbies"
        backgroundTitle="Hobbies"
        colour="bg-yellow-400"
        right
      />
      <Card
        right
        title="Sports & Fitness"
        category="Passions"
        text={`Ever since I was young, I've always loved playing sports. For as long as I can remember, I have been playing hockey and soccer. I enjoy playing hockey the most because along the way, I have met many of my closest friends through the sport. I also love playing basketball, volleyball, and skiing. Due to the restrictions of the pandemic I was unable to play many of my sports, thus I started trying and getting into other sports such as golf, rock climbing, and, if you count it as a sport, chess.`}
      />
      <Card
        right={false}
        title="Anime & Manga"
        category="Interests"
        text={`On my spare time, I enjoy spending time with family and friends. Though, ever since I was young I have always loved the mediums of anime and manga. I grew up watching the Pokémon and Yu-Gi-Oh shows and was later introduced to manga by friends and family members. It has become a big aspect of my life, since it is an something I thoroughly enjoy whenever I get free time.`}
      />
      <ImageCarousel
        className="mb-10 mt-16"
        title="My Top 10 Animes"
        images={topAnimes}
      />

      <ImageCarousel className="" title="My Top 10 Mangas" images={topMangas} />
      <Footer />
    </div>
  );
};

export default Home;
