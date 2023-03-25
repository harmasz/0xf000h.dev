import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";

const Home = () => {
  return (
    <Layout>
      <title>0xf000h.dev</title>
      <meta name="description" content="Piotr Harmasz's personal website" />
      <meta name="keywords" content="PH, Piotr Harmasz, Website" />
      <meta name="author" content="Piotr Harmasz" />

      <Navbar />
      <AboutMe />
    </Layout>
  );
};

export default Home;
