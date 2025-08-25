"use client";
import { useState, useEffect } from "react";

export default function BlogClientPage({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1 className="text-3xl font-bold">Blog Post {id}</h1>
      {data ? (
        <div>
          <h2 className="text-2xl font-semibold">{data.title}</h2>
          <p>{data.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
