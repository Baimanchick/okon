import React, { useEffect, useState } from "react";
import "../css/admin.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { notify } from "../components/Toastify";

function AdminPage() {
  interface blogsI {
    _id: any;
    title: string;
    text: string;
    img: string;
    img1: string;
    text1: string;
    link: string;
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
  const [link, setLink] = useState("");
  const [activeA, setActiveA] = useState(() => {
    return localStorage.getItem("activeA") || "dashboard";
  });

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `https://okon-a1fcca8c40a0.herokuapp.com/projects`
      );
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const deleteF = async (id: any) => {
    try {
      await axios.delete(
        `https://okon-a1fcca8c40a0.herokuapp.com/projects/${id}`
      );
      await fetchProjects();
      notify("Вы успешно удалил проект!");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBlog = async (id: any) => {
    try {
      await axios.delete(`https://okon-a1fcca8c40a0.herokuapp.com/blogs/${id}`);
      await fetchBlogs();
      notify("Вы успешно удалил блог!");
    } catch (error) {
      navigate("/admin");
      console.log(error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `https://okon-a1fcca8c40a0.herokuapp.com/blogs`
      );
      setBlogs(response.data);
    } catch (error) {
      navigate("/admin");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchBlogs();
  }, []);

  console.log(blogs);

  const handleAClick = (a: string) => {
    setActiveA(a);
  };

  const handleAddProject = async (value: any) => {
    try {
      const response = await axios.post(
        "https://okon-a1fcca8c40a0.herokuapp.com/projects",
        value
      );
      await fetchProjects();
      setTitle("");
      setText("");
      setImg("");
      setText1("");
      setImg1("");
      setLink("");
      notify("вы успешно добавили проект!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddBlog = async (value: any) => {
    try {
      const response = await axios.post(
        "https://okon-a1fcca8c40a0.herokuapp.com/blogs",
        value
      );
      await fetchBlogs();
      setTitle("");
      setText("");
      setImg("");
      setText1("");
      setImg1("");
      setLink("");
      notify("вы успешно добавили блог!");
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
                  <button type="submit" onClick={() => deleteF(project._id)}>
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
                <button type="submit" onClick={() => deleteBlog(blog._id)}>
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
                  value={title}
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  value={text}
                  placeholder="Text"
                  onChange={(e) => setText(e.target.value)}
                />
                <input
                  type="text"
                  value={img}
                  placeholder="img src url"
                  onChange={(e) => setImg(e.target.value)}
                />
                <input
                  type="text"
                  value={text1}
                  placeholder="text 1"
                  onChange={(e) => setText1(e.target.value)}
                />
                <input
                  type="text"
                  value={img1}
                  placeholder="img 1"
                  onChange={(e) => setImg1(e.target.value)}
                />
                <input
                  type="text"
                  value={link}
                  placeholder="link"
                  onChange={(e) => setLink(e.target.value)}
                />
                <button
                  onClick={() => {
                    const formValue = {
                      title: title,
                      text: text,
                      img: img,
                      text1: text1,
                      img1: img1,
                      link: link,
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
                  value={title}
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  value={text}
                  placeholder="Text"
                  onChange={(e) => setText(e.target.value)}
                />
                <input
                  type="text"
                  value={img}
                  placeholder="img src url"
                  onChange={(e) => setImg(e.target.value)}
                />
                <input
                  type="text"
                  value={text1}
                  placeholder="text 1"
                  onChange={(e) => setText1(e.target.value)}
                />
                <input
                  type="text"
                  value={img1}
                  placeholder="img 1"
                  onChange={(e) => setImg1(e.target.value)}
                />
                <input
                  type="text"
                  value={link}
                  placeholder="link"
                  onChange={(e) => setLink(e.target.value)}
                />
                <button
                  onClick={() => {
                    const formValue = {
                      title: title,
                      text: text,
                      img: img,
                      text1: text1,
                      img1: img1,
                      link: link,
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
            <h2>Я еще не придумал что тут</h2>
          </section>
        ) : null}
      </main>
    </div>
  );
}

export default AdminPage;
