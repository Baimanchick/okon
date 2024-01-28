import React, { useEffect, useState } from "react";
import "../css/project.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProjectPage() {
  interface blogsI {
    title: string,
    text: string,
    img: string,
    img1: string,
    text1: string
  }

  const [ projects, setProjects ] = useState<blogsI[]>([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`https://okon-a1fcca8c40a0.herokuapp.com/projects`);
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="main-content">
      <header className="about-header">
        <div className="about-title">
          <span>
            <strong onClick={() => navigate("/")}>НА ГЛАВНУЮ</strong> ► ПРОЕКТЫ
          </span>
        </div>
        <h2 className="about-h2">Проекты</h2>
      </header>

      <div className="proj-page-main">
        <div className="proj-page-container">
          <div className="proj-page-card-container">

            { projects?.map(( project ) => {
              return(
                <div
                  onClick={() => navigate("/projectdetail")}
                  className="proj-page-card"
                >
                  <div className="proj-page-img">
                    <img src={project.img} />
                  </div>
                  <div className="proj-page-title">
                    <h3>{ project.title }</h3>
                    <p>
                      { project.text }
                    </p>
                    <button>Подробнее</button>
                  </div>
                </div>
              )
            }) }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
