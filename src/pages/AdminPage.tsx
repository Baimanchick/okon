import React, { useState } from "react";
import "../css/admin.scss";

function AdminPage() {
  const [activeA, setActiveA] = useState("Новости");

  const handleAClick = (a: string) => {
    setActiveA(a);
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
        {activeA === "dashboard" ? (
          <section className="panel important">
            <h2>Тут все проекты</h2>
          </section>
        ) : null}

        {activeA === "edit" ? (
          <section className="panel important">
            <h2>Тут все блоги</h2>
          </section>
        ) : null}

        {activeA === "write" ? (
          <section className="panel important">
            <h2>Тут добовляют проекты</h2>
          </section>
        ) : null}

        {activeA === "comments" ? (
          <section className="panel important">
            <h2>Тут добовляют блоги</h2>
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
