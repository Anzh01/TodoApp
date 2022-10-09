import React from "react";
import ReactDOM from "react-dom/client";
import "./todo-app.css";

import Header from "../header/header";
import TodoList from "../task-list/task-list";
import Footer from "../footer/footer";

function App() {
  return (
    <section className="todoapp">
      <Header />
      <section className="main">
        <TodoList />
      </section>
      <Footer />
    </section>
  );
}

export default App;
