// // CommunityStats.jsx
// const CommunityStats = ({ stats }) => {
//   return (
//     <div className="bg-gray-100 py-10 text-center">
//       <h2 className="text-2xl font-bold mb-4">Community Stats</h2>
//       <div className="flex justify-center gap-10">
//         <div>
//           <p className="text-4xl font-bold">{stats.users}</p>
//           <p>Registered Users</p>
//         </div>
//         <div>
//           <p className="text-4xl font-bold">{stats.resolved}</p>
//           <p>Issues Resolved</p>
//         </div>
//         <div>
//           <p className="text-4xl font-bold">{stats.pending}</p>
//           <p>Pending Issues</p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CommunityStats;

// CommunityStats.jsx
import { FaUsers, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";

const CommunityStats = ({ stats }) => {
  const statCards = [
    {
      title: "Registered Users",
      value: stats.users,
      icon: <FaUsers className="text-white text-3xl" />,
      bg: "bg-gradient-to-r from-green-400 to-blue-500",
    },
    {
      title: "Issues Resolved",
      value: stats.resolved,
      icon: <FaCheckCircle className="text-white text-3xl" />,
      bg: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      title: "Pending Issues",
      value: stats.pending,
      icon: <FaHourglassHalf className="text-white text-3xl" />,
      bg: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Community Stats</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg ${stat.bg} text-white transform hover:scale-105 transition-transform duration-300`}
          >
            <div className="mb-4">{stat.icon}</div>
            <p className="text-4xl font-extrabold">{stat.value}</p>
            <p className="text-lg mt-2">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityStats;
