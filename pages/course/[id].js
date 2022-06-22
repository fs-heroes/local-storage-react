import { useEffect } from "react";
import data from "../../data";
import Layout from "../../components/Layout";

const Lesson = ({ lesson }) => {
  // When you visit a lesson, mark it as visited
  useEffect(() => {
    // either create a new item or initialize a new one if the user doesn't have it
    let progress = JSON.parse(localStorage.getItem("progress")) || {};

    progress[lesson.id] = { visited: true };

    localStorage.setItem("progress", JSON.stringify(progress));
  }, [lesson.id]);

  return <Layout>{lesson.name}</Layout>;
};

export const getStaticProps = async ({ params }) => {
  console.log(params.id);
  const lesson = data.find((item) => item.id === params.id);
  return {
    props: { lesson },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: data.map((item) => {
      return { params: { id: item.id } };
    }),
    fallback: false,
  };
};

export default Lesson;
