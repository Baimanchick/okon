import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import "../css/projectdetailpage.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function BlogDetailPage() {
  interface blogsI {
    _id: any;
    title: string;
    text: string;
    img: string;
    img1: string;
    text1: string;
    link: string;
  }

  const { id } = useParams();
  const [project, setProject] = useState<blogsI | null>(null);
  const [projects, setProjects] = useState<blogsI[]>([]);

  const navigate = useNavigate();

  const fetchProjectDetails = async () => {
    try {
      const response = await axios.get(
        `https://okon-a1fcca8c40a0.herokuapp.com/blogs/${id}`
      );
      setProject(response.data);
    } catch (error) {
      console.error("Error fetching project details:", error);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `https://okon-a1fcca8c40a0.herokuapp.com/blogs`
      );
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjectDetails();
  }, [id]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const navigateToProject = (projectId: any) => {
    navigate(`/project/${projectId}`);
  };

  const findProjectIndex = () => {
    return projects.findIndex((item) => item._id === id);
  };

  const currentIndex = findProjectIndex();

  const nextProjectId = projects[currentIndex + 1]
    ? projects[currentIndex + 1]._id
    : null;
  const prevProjectId = projects[currentIndex - 1]
    ? projects[currentIndex - 1]._id
    : null;
    
  let link = "https://www.youtube.com/embed/dQw4w9WgXcQ?si=3MEPsuCOsTD6Rs9U";

  return project ? (
    <div className="main-content">
      <div className="project-detail-container">
        <div className="project-detail-wrapper-left">
          {/*  */}
          <div className="project-detail-container-left">
            <div className="project-detail-title-container">
              <h2 className="project-detail-h2">{project.title}</h2>
              <p className="project-detail-p">{project.text}</p>
              <img src={project.img} className="project-detail-img" />
              <p className="project-detail-p">{project.text1}</p>
              <img src={project.img1} className="project-detail-img" />
            </div>
            <iframe
              className="video-container"
              src={project.link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="project-detail-utils-container">
              <h3>Поделитесь с друзьями</h3>
              <div className="project-detail-icons">
                <a href="">
                  <FaFacebook className="icon-item" />
                </a>

                <a href="">
                  <FaTelegramPlane className="icon-item" />
                </a>

                <a href="">
                  <IoLogoWhatsapp className="icon-item" />
                </a>
              </div>
            </div>
            <div className="project-detail-pagination-main">
              <div className="project-detail-pagination-container">
                <div className="project-detail-pagination-wrapper-left">
                  <img
                    src={
                      projects.find((item) => item._id === prevProjectId)?.img
                    }
                    className="project-detail-pegination-img"
                  />
                  <div
                    className="project-detail-pagination-title-container-left"
                    onClick={() =>
                      prevProjectId && navigateToProject(prevProjectId)
                    }
                  >
                    <span className="project-detail-pagination-span">
                      ПРЕД. ЗАПИСЬ
                    </span>
                    <p className="project-detail-pagination-p">
                      {prevProjectId
                        ? projects.find((item) => item._id === prevProjectId)
                            ?.title
                        : "Нет предыдущей записи"}
                    </p>
                    <span className="project-detail-pagination-none-span">
                      ПРЕД
                    </span>
                  </div>
                </div>
                <hr className="project-detail-pagination-hr" />
                <div
                  className="project-detail-pagination-wrapper-right"
                  onClick={() =>
                    nextProjectId && navigateToProject(nextProjectId)
                  }
                >
                  <div className="project-detail-pagination-title-container-right">
                    <span className="project-detail-pagination-span">
                      СЛЕД. ЗАПИСЬ
                    </span>
                    <p className="project-detail-pagination-p">
                      {nextProjectId
                        ? projects.find((item) => item._id === nextProjectId)
                            ?.title
                        : "Нет предыдущей записи"}
                    </p>
                    <span className="project-detail-pagination-none-span">
                      СЛЕД
                    </span>
                  </div>
                  <img
                    src={
                      projects.find((item) => item._id === nextProjectId)?.img
                    }
                    className="project-detail-pegination-img"
                  />
                </div>
              </div>
            </div>
            <hr className="project-detail-hr" />
            <div className="project-detail-similar-main">
              <h2 className="project-detail-similar-h2">Новые записи</h2>
              <div className="project-detail-similar-container">
                {projects
                  .slice(Math.max(projects.length - 3, 0))
                  .map((item, index) => (
                    <div
                      className="project-detail-simialr-card"
                      key={index}
                      onClick={() => navigate(`/project/${item._id}`)}
                    >
                      <img src={item.img} alt="" />
                      <div className="project-detail-similar-card-title">
                        <p>{item.title}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="project-detail-wrapper-right">
          <hr />
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1>Загрузка данных...</h1>
    </div>
  );
}

export default BlogDetailPage;
