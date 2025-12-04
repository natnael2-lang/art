import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import Announcements from "../components/Announcements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Announcements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
