import React, { useEffect, useState } from "react";
import Gul from "../css/images/gulshar.jpg";
import "../css/home.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function HomePage() {
  interface blogsI {
    _id: any,
    title: string,
    text: string,
    img: string,
    img1: string,
    text1: string,
    link: string
  }

  const [projects, setProjects] = useState<blogsI[]>([]);
  const [visibleBlogs, setVisibleBlogs] = useState<number>(3);

  const [news, setNews] = useState<blogsI[]>([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`https://okon-a1fcca8c40a0.herokuapp.com/projects`);
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNews = async () => {
    try {
      const response = await axios.get(`https://okon-a1fcca8c40a0.herokuapp.com/blogs`);
      setNews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchNews();
  }, []);

  console.log(news, projects)

  const navigate = useNavigate();

  return (
    <div className="main-content">
      {/*  */}
      <div className="bio-main">
        <div className="bio-container">
          {/*  */}
          <div className="bio-wrapper-left">
            <img src={Gul} />
          </div>

          <div className="bio-wrapper-right">
            <div className="bio-title">
              <h2 className="bio-h2">Гульшаркан Оконовна</h2>
              <h3 className="bio-h3">Бизнесвумен. Депутат ЖК. </h3>
              <p className="bio-p-1">
                У каждого человека есть свое, уникальное предназначение. Мы
                должны стремиться оставить после себя что-то поистине хорошее. В
                этом есть суть формирования культурного общества.
              </p>
              <p className="bio-p-2">
                Моя цель - предоставлять поддержку и вести честную работу,
                принося пользу обществу. Стремлюсь к благотворительной
                деятельности, улучшая жизнь людей. Моя работа основана на
                принципах честности и ответственности, вдохновляя доверие. В
                качестве гражданина, стараюсь быть примером честного и
                преданного труду поведения, способствуя позитивным изменениям в
                обществе.
              </p>
              <button onClick={() => navigate("/about")} className="bio-button">
                Обо мне ⇨
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="proj-main">
        <h2>Проекты</h2>
        <div className="proj-container">
          <div className="proj-card-container">
            {projects.slice(Math.max(projects.length - 3, 0)).map((project, index) => (
              <div
                key={index}
                onClick={() => navigate(`/project/${project._id}`)}
                className="proj-card"
              >
                <div className="proj-img">
                  <img src={project.img ? project.img : "https://data.kaktus.media/image/big/2023-06-09_17-30-46_355822.jpg"} alt={project.title} />
                </div>
                <div className="proj-title">
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <button>Подробнее</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="proj-button-container">
          <button onClick={() => navigate("/project")} className="proj-button">
            Все проекты ⇨
          </button>
        </div>
      </div>

      <div className="news-main">
        <h2> Новости</h2>
        <div className="news-container">
          <div className="news-card-container">
            { news.slice(Math.max(news.length - 3, 0)).map((item, index) => (
              <div key={index} onClick={() => navigate(`/blog/${item._id}`)} className="news-card">
                <img src={item.img} className="news-img" />
                <div className="news-date"></div>
                <div className="news-desc-container">
                  <span className="news-desc">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="news-button-container">
          <button onClick={() => navigate("/blog")} className="news-button">
            Все новости ⇨
          </button>
        </div>
      </div>

      {/*  */}
    </div>
  );
}

export default HomePage;
