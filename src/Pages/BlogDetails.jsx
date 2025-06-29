import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backendurl } from "../App";
import { formatDistanceToNow } from "date-fns";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [commentImage, setCommentImage] = useState(null);
  const [hasLiked, setHasLiked] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const navigate = useNavigate();

  const fetchBlog = async () => {
    try {
      const res = await fetch(`${backendurl}/api/blogs/${id}`);
      if (res.ok) {
        const data = await res.json();
        setBlog(data);
      } else {
        setNotFound(true);
      }
    } catch (err) {
      console.log(err);
      setNotFound(true); // Set not found on error
    }
  };

  useEffect(() => {
    const updateViewCount = async () => {
      try {
        await fetch(`${backendurl}/api/blogs/${id}/view`, {
          method: "PUT",
        });
        fetchBlog(); // Refresh the blog data after updating the view count
      } catch (err) {
        console.log("Error updating view count:", err);
      }
    };
    updateViewCount();
  }, [id]);

  const handleLike = async () => {
    const token = localStorage.getItem("token");
    const url = `${backendurl}/api/blogs/${id}/${hasLiked ? "unlike" : "like"}`;
    const method = hasLiked ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method: method,
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setHasLiked(!hasLiked);
        fetchBlog();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", commentText);
    if (commentImage) formData.append("image", commentImage);
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`${backendurl}/api/blogs/${id}/comments`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (res.ok) {
        setCommentText("");
        setCommentImage(null);
        fetchBlog();
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (notFound) {
    return (
      <div className="text-center text-xl text-gray-600 mt-20">
        🚫 No blog found.
      </div>
    );
  }

  if (!blog) {
    return <Loader />;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline">
        ← Back
      </button>

      {blog.imageUrl && (
        <div className="relative group">
          <img
            loading="lazy"
            src={
              blog.imageUrl.startsWith("http")
                ? blog.imageUrl
                : `${backendurl}${blog.imageUrl}`
            }
            alt={blog.title}
            className="w-full object-cover rounded-lg cursor-pointer"
            onClick={() =>
              setFullscreenImage(
                blog.imageUrl.startsWith("http")
                  ? blog.imageUrl
                  : `${backendurl}${blog.imageUrl}`
              )
            }
          />
          <button
            onClick={() =>
              setFullscreenImage(
                blog.imageUrl.startsWith("http")
                  ? blog.imageUrl
                  : `${backendurl}${blog.imageUrl}`
              )
            }
            className="absolute bottom-2 right-2 bg-black/60 text-white px-3 py-1 text-sm rounded-md opacity-0 group-hover:opacity-100 transition">
            <i className="fa-solid fa-expand"></i>
          </button>
        </div>
      )}

      <h1 className="text-4xl font-extrabold text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {blog.title}
      </h1>
      <p className="text-lg text-gray-800 whitespace-pre-line  mulish">
        {blog.content}
      </p>

      <div className="text-gray-600 text-sm flex flex-wrap gap-6 items-center mt-2">
        {/* Date */}
        <span className="flex items-center gap-2 text-gray-500">
          <i className="fa-regular fa-calendar text-lg"></i>
          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
        </span>

        {/* Like Button */}
        <button
          onClick={handleLike}
          className="flex items-center cursor-pointer hover:bg-slate-100 px-2 rounded gap-2 text-blue-600 hover:text-blue-800 transition-all font-medium">
          <i className="text-xl hover:text-blue-700">
            {hasLiked ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </i>
          <span>{blog.likes}</span> Like
        </button>

        {/* Toggle Comments */}
        <button className="flex items-center gap-2 text-gray-600 cursor-pointer">
          <i className="fa-regular fa-comment text-lg"></i>
          <span>{blog.comments?.length || 0} Comments</span>
        </button>

        {/* Toggle Views */}
        <button className="flex items-center gap-2 text-gray-600 cursor-pointer">
          <i className="fa-solid fa-eye text-lg"></i>
          <span>{blog.views} Views</span>
        </button>
      </div>

      {/* Comment Form */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Leave a comment</h2>
        <form onSubmit={handleCommentSubmit} className="space-y-4">
          <textarea
            className="w-full p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            rows={3}
            placeholder="Write something awesome..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />

          {/* Image Input and Emoji Toggle */}
          <div className="flex items-center flex-wrap gap-4">
            {/* Custom File Upload Button */}
            <label className="cursor-pointer bg-gray-100 border border-gray-300 px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-200 transition">
              📁 Choose Image
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setCommentImage(e.target.files[0])}
                className="hidden"
              />
            </label>

            {/* Optional Quick Emojis */}
            <div className="flex flex-wrap gap-2 text-lg">
              {["😀", "😂", "😍", "👍", "🔥", "💯"].map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setCommentText((prev) => prev + emoji)}
                  className="hover:scale-110 transition text-xl"
                  title="Insert emoji">
                  {emoji}
                </button>
              ))}
            </div>

            {/* Preview Selected Image */}
            {commentImage && (
              <div className="relative w-20 h-20">
                <img
                  loading="lazy"
                  src={URL.createObjectURL(commentImage)}
                  alt="Preview"
                  className="rounded-md w-full h-full object-cover border"
                />
                <button
                  type="button"
                  onClick={() => setCommentImage(null)}
                  className="absolute -top-2 -right-2 bg-white border border-gray-300 rounded-full text-xs w-5 h-5 flex items-center justify-center hover:bg-red-100 transition"
                  title="Remove">
                  ✕
                </button>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:text-blue-600  border-2 cursor-pointer border-blue-500 hover:bg-transparent  text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300 shadow-md hover:shadow-lg">
            💬 Post Comment
          </button>
        </form>
      </div>
      {fullscreenImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="relative max-w-6xl w-full mx-4">
            <img
              loading="lazy"
              src={fullscreenImage}
              alt="Full"
              className="w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full shadow-md hover:bg-red-600 hover:text-white transition">
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Conditional Rendering of Comments */}
      <div className="bg-white p-6 rounded-xl shadow-md space-y-5">
        <h2 className="text-2xl font-semibold">Comments</h2>
        {blog.comments
          .filter((c) => (c.text && c.text.trim() !== "") || c.imageUrl)
          .map((comment, idx) => (
            <div
              key={idx}
              className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-lg shadow-sm">
              {comment.text && (
                <p className="text-gray-800 text-base mb-2">{comment.text}</p>
              )}

              {comment.imageUrl && (
                <img
                  src={comment.imageUrl}
                  alt="Comment"
                  className="w-32 h-auto rounded-md mb-2 cursor-pointer"
                  onClick={() => setFullscreenImage(comment.imageUrl)}
                />
              )}

              <div className="text-sm text-gray-500 italic">
                —
                {formatDistanceToNow(new Date(comment.createdAt), {
                  addSuffix: true,
                })}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogDetails;
