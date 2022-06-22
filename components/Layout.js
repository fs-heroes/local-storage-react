import data from "../data";
import { useState, useEffect } from "react";
import Check from "./Check";

const Layout = ({ children }) => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    let progress = JSON.parse(localStorage.getItem("progress")) || {};
    setProgress(progress);
  }, []);

  return (
    <div className="my-20 max-w-5xl mx-auto px-8">
      <h1 className="text-center font-bold text-3xl">Local storage in React</h1>
      <div className="grid grid-cols-5 gap-8 mt-12">
        <ul className="col-span-2 bg-blue-100 p-4 rounded-lg">
          {data.map((lesson) => {
            return (
              <li key={lesson.id}>
                <a
                  href={`/course/${lesson.id}/`}
                  className="hover:underline font-semibold flex w-full justify-between items-center gap-2 hover:text-gray-700"
                >
                  <span>- {lesson.name}</span>

                  {progress.hasOwnProperty(lesson.id) &&
                  progress[lesson.id].visited ? (
                    <Check />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="col-span-3 border border-dashed border-gray-300 p-8 rounded-lg">
          <div>
            <h2 className="text-2xl font-bold mb-4">Content</h2>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
