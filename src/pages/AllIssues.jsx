import { Link, useLoaderData } from "react-router";
import { useState, useEffect } from "react";

const AllIssues = () => {
  const issues = useLoaderData();
  const [filteredIssues, setFilteredIssues] = useState(issues);
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  // 🔍 Filter logic
  useEffect(() => {
    let filtered = issues;

    if (category !== "All") {
      filtered = filtered.filter((issue) => issue.category === category);
    }

    if (status !== "All") {
      filtered = filtered.filter((issue) => issue.status === status);
    }

    setFilteredIssues(filtered);
  }, [category, status, issues]);

  return (
    <div className="mx-auto px-4 py-10 max-w-7xl">
      <h2 className="text-3xl font-bold text-center mb-10">
        All Reported Issues
      </h2>

      {/* 🧭 Filter Section */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered w-full sm:w-64"
        >
          <option value="All">All Categories</option>
          <option value="Garbage">Garbage</option>
          <option value="Road Damage">Road Damage</option>
          <option value="Water Pollution">Water Pollution</option>
          <option value="Other">Other</option>
        </select>

        {/* Status Filter */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="select select-bordered w-full sm:w-64"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="ongoing">Ongoing</option>
          <option value="Resolved">Resolved</option>
          <option value="In Progress">In Progress</option>
        </select>
      </div>

      {/* 🧱 Grid Layout */}
      {filteredIssues.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIssues.map((issue) => (
            <div
              key={issue._id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 rounded-2xl"
            >
              <figure>
                <img
                  src={issue.image}
                  alt={issue.title}
                  className="h-56 w-full object-cover rounded-t-2xl"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg font-semibold">
                  {issue.title}
                </h2>
                <p className="text-sm text-gray-600">📍 {issue.location}</p>
                <p className="text-sm text-gray-600">
                  🏷️ Category: {issue.category}
                </p>
                <p className="text-sm text-gray-600">
                  ⚙️ Status:{" "}
                  <span
                    className={`font-medium ${
                      issue.status === "Resolved"
                        ? "text-green-600"
                        : issue.status === "Pending"
                        ? "text-yellow-600"
                        : "text-blue-600"
                    }`}
                  >
                    {issue.status}
                  </span>
                </p>
                <p className="text-sm font-medium text-gray-700">
                  💰 Budget: ৳{issue.amount}
                </p>

                <div className="card-actions justify-end mt-4">
                  <Link
                    to={`/issues/${issue._id}`}
                    className="btn btn-sm bg-green-600 text-white hover:bg-green-700 hover:scale-105 hover:shadow-md transition-all duration-300 mt-6"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">
          No issues found for selected filters 😕
        </p>
      )}
    </div>
  );
};

export default AllIssues;
