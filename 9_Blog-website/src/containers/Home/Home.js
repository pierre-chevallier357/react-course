import React, { useEffect } from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../../redux/articles/articleReducer";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const { articles } = useSelector((state) => ({
    ...state.articleReducer,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (articles.length === 0) {
      dispatch(getArticles());
    }
  }, []);

  return (
    <>
      <h1 className="home-title">Articles</h1>
      <div className="cards-container">
        {articles.map((item) => {
          return (
            <Card key={uuidv4()}>
              <h2>{item.title}</h2>
              <a href="#">Read the article</a>
            </Card>
          );
        })}
      </div>
    </>
  );
}
