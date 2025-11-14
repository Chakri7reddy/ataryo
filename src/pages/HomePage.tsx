import React, { useEffect } from "react";
import { useContentStore } from "../store/contentStore";
import HomeNavbar from "../components/home/HomeNavbar";
import HomeFooter from "../components/home/HomeFooter";
import HomeHero from "../components/home/HomeHero";
import HomeAbout from "../components/home/HomeAbout";
import HomeCoreValues from "../components/home/HomeCoreValues";
import HomeTeam from "../components/home/HomeTeam";
import HomePartnership from "../components/home/HomePartnership";
import HomeInvestment from "../components/home/HomeInvestment";
import WhyWeExist from "../components/home/WhyWeExist";

const HomePage: React.FC = () => {
  const { content, fetchContent, loading, error } = useContentStore();

  useEffect(() => {
    fetchContent("home");

    // Removes page side-scroll
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflowX = "auto";
    };
  }, [fetchContent]);

  const home = content?.home || {};
  const partnerships = home.partnershipsAndInvestors?.partnership;
  const investment = home.partnershipsAndInvestors?.investment;

  if (loading)
    return <div className="text-center py-20 text-gray-600">Loading...</div>;

  if (error)
    return (
      <div className="text-center py-20 text-red-500">
        Error loading Home Page: {error}
      </div>
    );

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <HomeNavbar data={home.navbar} />
      </div>

      {/* HERO (starts below navbar) */}
      <div className="pt-[80px]"> 
        <HomeHero data={home.hero} />
      </div>

      {/* ABOUT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <HomeAbout data={home.about} />
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <HomeCoreValues data={home.coreValues} />
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <WhyWeExist data={home.whyWeExist} />
        </div>
      </section>

      {/* PARTNERSHIP */}
      {partnerships && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <HomePartnership data={partnerships} />
          </div>
        </section>
      )}

      {/* INVESTMENT */}
      {investment && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <HomeInvestment data={investment} />
          </div>
        </section>
      )}

      {/* TEAM */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <HomeTeam data={home.team} />
        </div>
      </section>

      {/* FOOTER */}
      <HomeFooter data={home.footer} />
    </div>
  );
};

export default HomePage;
