import HeroSection from "../components/HeroSection";
import Category from "../components/Category";
import CommunityStats from "../components/CommunityStats";
import VolunteerSection from "../components/VolunteerSection";
import ComplaintCard from "../components/ComplaintCard";
import { useState } from "react";
import { useLoaderData } from "react-router";
import Banner from "../components/Banner";

const Home = () => {
  const issues = useLoaderData();
  const [stats, setStats] = useState({ users: 120, resolved: 45, pending: 75 });

  return (
    <div>
      <Banner></Banner>
      <HeroSection />
      <Category />

      {/* Recent Complaints */}
      <section className="my-10 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Recent Complaints
        </h2>
        {issues.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {issues.map((issue) => (
              <ComplaintCard key={issue._id} issue={issue} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No complaints found</p>
        )}
      </section>

      <CommunityStats stats={stats} />

      <VolunteerSection />
    </div>
  );
};

export default Home;
