"use client";
import { useEffect, useState } from "react";

const Page = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await fetch("/api/Subscriptions");
        if (!response.ok) {
          throw new Error("Failed to fetch subscriptions");
        }
        const data = await response.json();

        // Normalize MongoDB data if needed
        const formattedData = data.map((sub) => ({
          id: sub._id?.$oid || sub._id,
          email: sub.email,
          createdAt: new Date(
            sub.createdAt?.$date?.$numberLong || sub.createdAt
          ),
        }));

        setSubscriptions(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
        Subscribed Emails
      </h1>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid gap-4">
          {subscriptions.length > 0 ? (
            subscriptions.map((sub, index) => (
              <div
                key={sub._id}
                className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 flex justify-between items-center hover:shadow-lg transition">
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-gray-600 dark:text-gray-300 w-6 text-center">
                    {index + 1}.
                  </span>
                  <div>
                    <p className="text-gray-900 dark:text-gray-100 font-medium">
                      {sub.email}
                    </p>
                    <p className="text-sm text-gray-500">
                      Subscribed on:{" "}
                      {sub.createdAt.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">
                  ID: {sub.id.slice(0, 6)}...
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No subscriptions yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
