import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendurl } from "../App";
import Heading from "../components/Heading";
import Loader from "../components/Loader"; // ← Import the Loader component
import HomeContact from "../components/HomeContact";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${backendurl}/api/blogs`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="max-w-6xl min-h-screen mx-auto px-4 py-10">
        <div>
          <Heading text1="All" text2="Blogs" />
        </div>

        <div className="mb-8 flex justify-end">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {loading ? (
          <Loader /> // ← Show the loader while loading
        ) : filteredBlogs.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white shadow-md hover:shadow-xl transition-shadow transio duration-300 rounded-xl p-5 space-y-4 transform hover:scale-[1.05] hover:border-blue-500 border border-transparent hover:border">
                {blog.imageUrl && (
                  <img
                    loading="lazy"
                    src={
                      blog.imageUrl.startsWith("http")
                        ? blog.imageUrl
                        : `${backendurl}${blog.imageUrl}`
                    }
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                )}

                <h2 className="text-xl font-bold text-gray-800">
                  {blog.title}
                </h2>
                <p className="text-gray-600">{blog.content.slice(0, 100)}...</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                  <span>👍 {blog.likes}</span>
                  <span>💬 {blog?.comments?.length || 0}</span>
                  <span>
                    📅 {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <button
                  className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-white hover:text-blue-600 border-2 border-blue-600 transition"
                  onClick={() => navigate(`/blogs/${blog._id}`)}>
                  Read More →
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg mt-20">
            🚫 No blogs found. Try a different keyword.
          </div>
        )}
      </div>
      <HomeContact />
    </>
  );
};

export default Blog;
