import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Form.css";

export default function Form() {
  const [article, setArticle] = useState({
    title: "",
    body: "",
  });

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_ARTICLE",
      payload: article,
    });
    setArticle({
      title: "",
      body: "",
    });
  };

  const handleInputs = (e) => {
    if (e.target.classList.contains("title-input")) {
      const newObjState = { ...article, title: e.target.value };
      setArticle(newObjState);
    } else if (e.target.classList.contains("body-input")) {
      const newObjState = { ...article, body: e.target.value };
      setArticle(newObjState);
    }
  };

  console.log(article);

  return (
    <>
      <h1 className="form-title">Write an article</h1>
      <form onSubmit={submitForm} className="form-container">
        <label htmlFor="title">Title</label>
        <input
          onInput={handleInputs}
          value={article.title}
          type="text"
          id="title"
          placeholder="Write your name"
          className="title-input"
        />
        <label htmlFor="article">Your article</label>
        <textarea
          onChange={handleInputs}
          value={article.body}
          id="article"
          placeholder="Your article"
          className="body-input"
        ></textarea>
        <button>Submit the article</button>
      </form>
    </>
  );
}
