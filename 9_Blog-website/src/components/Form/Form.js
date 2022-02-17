import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import "./Form.css";

export default function Form() {
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const newArticle = {
      title: inputsRef.current[0].value,
      body: inputsRef.current[1].value,
    };
    dispatch({
      type: "ADD_ARTICLE",
      payload: newArticle,
    });
    e.target.reset();
  };

  const inputsRef = useRef([]);

  const addRef = (el) => {
    if (el && !inputsRef.current.includes(el)) {
      inputsRef.current.push(el);
    }
  };

  return (
    <>
      <h1 className="form-title">Write an article</h1>
      <form onSubmit={submitForm} className="form-container">
        <label htmlFor="title">Title</label>
        <input
          ref={addRef}
          type="text"
          id="title"
          placeholder="Title of the article"
          className="title-input"
        />
        <label htmlFor="article">Your article</label>
        <textarea
          ref={addRef}
          id="article"
          placeholder="Your article"
          className="body-input"
        ></textarea>
        <button>Submit the article</button>
      </form>
    </>
  );
}
