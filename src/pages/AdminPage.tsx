import React, { useEffect, useState } from "react";
import "../css/admin.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  interface blogsI {
    id: number;
    title: string;
    text: string;
    img: string;
    img1: string;
    text1: string;
  }

  const [projects, setProjects] = useState<blogsI[]>([]);
  const [visibleBlogs, setVisibleBlogs] = useState<number>(3);
  const [blogs, setBlogs] = useState<blogsI[]>([]);

  const [addForm, setAddForm] = useState(false);
  const [addForm2, setAddForm2] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [text1, setText1] = useState("");
  const [img1, setImg1] = useState("");
  const [activeA, setActiveA] = useState(() => {
    return localStorage.getItem("activeA") || "dashboard";
  });

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`https://tao-db.vercel.app/projects`);
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const deleteF = async (id: number) => {
    try {
      await axios.delete(`https://tao-db.vercel.app/projects/${id}`);
      navigate(0);
      fetchProjects();
    } catch (error) {
      navigate("/admin");
      console.log(error);
    }
  };

  const deleteBlog = async (id: number) => {
    try {
      await axios.delete(`https://tao-db.vercel.app/blogs/${id}`);
      navigate(0);
      fetchBlogs();
    } catch (error) {
      navigate("/admin");
      console.log(error);
    }
  };

  const fetchBlogs = async () => {
    const response = await axios.get(`https://tao-db.vercel.app/blogs`);
    setBlogs(response.data);
  };

  useEffect(() => {
    fetchProjects();
    fetchBlogs();
    localStorage.setItem("activeA", activeA);
  }, [activeA]);

  const handleAClick = (a: string) => {
    setActiveA(a);
  };

  const handleAddProject = async (value: any) => {
    try {
      const response = await axios.post(
        "https://tao-db.vercel.app/projects",
        value
      );
      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddBlog = async (value: any) => {
    try {
      const response = await axios.post(
        "https://tao-db.vercel.app/blogs",
        value
      );
      fetchBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <header role="banner">
        <h2>Admin Panel</h2>
        <ul className="utilities">
          <br />
          <li className="users">
            <a href="#">Admin User</a>
          </li>
          <li className="logout warn">
            <a href="">Выйти</a>
          </li>
        </ul>
      </header>

      <div className="nav-admin" role="navigation">
        <ul className="main">
          <li
            className={activeA === "dashboard" ? "activeA" : "dashboard"}
            onClick={() => handleAClick("dashboard")}
          >
            <a> Все Проекты</a>
          </li>
          <li
            className={activeA === "edit" ? "activeA" : "edit"}
            onClick={() => handleAClick("edit")}
          >
            <a> Все Блоги</a>
          </li>
          <li
            className={activeA === "write" ? "activeA" : "write"}
            onClick={() => handleAClick("write")}
          >
            <a>Добавить Проект</a>
          </li>
          <li
            className={activeA === "comments" ? "activeA" : "comments"}
            onClick={() => handleAClick("comments")}
          >
            <a>Добавить Блог</a>
          </li>
          <li
            className={activeA === "users" ? "activeA" : "users"}
            onClick={() => handleAClick("users")}
          >
            <a>Manage Users</a>
          </li>
        </ul>
      </div>

      <main role="main">
        {activeA === "dashboard"
          ? projects.map((project) => {
              return (
                <section className="panel important">
                  <h2>{project.title}</h2>
                  <button type="submit" onClick={() => deleteF(project.id)}>
                    Удалить проект
                  </button>
                </section>
              );
            })
          : null}

        {activeA === "edit"
          ? blogs.map((blog) => (
              <section className="panel important">
                <h2>{blog.title}</h2>
                <button type="submit" onClick={() => deleteBlog(blog.id)}>
                  Удалить блог
                </button>
              </section>
            ))
          : null}

        {activeA === "write" ? (
          <section className="panel important">
            <h2 onClick={() => setAddForm(true)} style={{ cursor: "pointer" }}>
              Добавить проект
            </h2>
            {addForm && (
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Text"
                  onChange={(e) => setText(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="img src url"
                  onChange={(e) => setImg(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="text 1"
                  onChange={(e) => setText1(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="img 1"
                  onChange={(e) => setImg1(e.target.value)}
                />
                <button
                  onClick={() => {
                    const formValue = {
                      title: title,
                      text: text,
                      img: img,
                      text1: text1,
                      img1: img1,
                    };
                    console.log(formValue);
                    handleAddProject(formValue);
                  }}
                >
                  Добавить проект
                </button>
              </form>
            )}
          </section>
        ) : null}

        {activeA === "comments" ? (
          <section className="panel important">
            <h2 onClick={() => setAddForm2(true)} style={{ cursor: "pointer" }}>
              Добавить блог
            </h2>
            {addForm2 && (
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Text"
                  onChange={(e) => setText(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="img src url"
                  onChange={(e) => setImg(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="text 1"
                  onChange={(e) => setText1(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="img 1"
                  onChange={(e) => setImg1(e.target.value)}
                />
                <button
                  onClick={() => {
                    const formValue = {
                      title: title,
                      text: text,
                      img: img,
                      text1: text1,
                      img1: img1,
                    };
                    console.log(formValue);
                    handleAddBlog(formValue);
                  }}
                >
                  Добавить проект
                </button>
              </form>
            )}
          </section>
        ) : null}

        {activeA === "users" ? (
          <section className="panel important">
            <h2>Я не придумал что тут</h2>
          </section>
        ) : null}
      </main>
    </div>
  );
}

export default AdminPage;
