import React from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import { useSelector, useDispatch } from "redux";
import { useEffect, useState } from "react";
import { getArticles } from "../../redux/articles/articleReducer";

export default function Home() {
  return (
    <>
      <h1 className="home-title">Articles</h1>
      <div className="cards-container">
        <Card>
          <h2>Test article</h2>
        </Card>
      </div>
    </>
  );
}
