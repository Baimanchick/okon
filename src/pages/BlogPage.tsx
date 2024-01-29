import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/blog.scss";
import axios from 'axios'
 
function BlogPage() {

  interface blogsI {
    _id: any
    title: string,
    text: string,
    img: string,
    img1: string,
    text1: string
  }

  const [ blogs, setBlogs ] = useState<blogsI[]>([]);
  const [visibleBlogs, setVisibleBlogs] = useState<number>(3);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`https://okon-a1fcca8c40a0.herokuapp.com/blogs`);
      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const loadMoreBlogs = () => {
    setVisibleBlogs((prev) => prev + 3);
  };

  const navigate = useNavigate();

  return (
    <div className="main-content">
      <header className="about-header">
        <div className="about-title">
          <span>
            <strong onClick={() => navigate("/")}>НА ГЛАВНУЮ</strong> ► БЛОГ
          </span>
        </div>
        <h2 className="about-h2">Блог</h2>
      </header>

      <div className="blog-card-main">
        <div className="blog-card-container">
          { blogs?.slice(0, visibleBlogs).map(( blog, index ) => (
            <div onClick={() => navigate(`/blog/${blog._id}`)} className="blog-card">
              <img
                src={ blog?.img ? blog.img : "https://st-1.akipress.org/cdn-st-0/qdX/P/2141725.9bb9f0e305be4d88f468a1bf98ca6060.jpg" }
                className="blog-card-img"
                alt="img blog"
              />
              <div className="blog-card-title-container">
                <h3>{ blog?.title }</h3>
                <p>
                  { blog?.text }
                </p>
              </div>
            </div>
          )) }
        </div>
      </div>

      <div className="blog-button-container">
        {visibleBlogs < blogs.length && (
          <button onClick={loadMoreBlogs}>Загрузить еще</button>
        )}
      </div>
      
    </div>
  );
}

export default BlogPage;
