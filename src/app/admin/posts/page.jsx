"use client";
import { useEffect, useState } from "react";

const AdminPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Failed to load posts", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setPosts(posts.filter((post) => post._id !== id));
        alert("✅ Blog deleted successfully!");
      } else {
        alert("❌ Failed to delete blog");
      }
    } catch (error) {
      alert("⚠️ Something went wrong!");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
      <h2 className="text-2xl font-semibold mb-4">All Posts</h2>

      <div className="space-y-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post._id}
              className="flex items-center justify-between p-4 bg-gray-800 text-white rounded-lg shadow">
              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={post.authorImg || "/default-avatar.png"}
                  alt={post.author}
                  className="w-12 h-12 rounded-full border"
                />
                <div>
                  <h3 className="text-lg font-bold">{post.title}</h3>
                  <p className="text-sm text-gray-300">
                    ✍️ {post.author} | 📌 {post.category}
                  </p>
                </div>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(post._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow">
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
