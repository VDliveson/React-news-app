import logo from "./logo.svg";
import "./App.css";

import News from "./components/news";
import React, { useState } from "react";
import Navbar from "./components/navbar";
import LoadingBar from "react-top-loading-bar";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  let title = "News App";
  let pageSize = 9;
  const [progress, setProgress] = useState(0);
  const [query, updateQuery] = useState("");

    console.log(query)
  return (
    <BrowserRouter>
      <div>
        <Navbar updateQuery={updateQuery}></Navbar>
        <LoadingBar
          color="#f11946"
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            path="/search"
            element={
              <News
                key="search"
                setProgress={setProgress}
                pageSize={pageSize}
                category={""}
                query={query}
              />
            }
          />
          <Route
            path="/"
            element={
              <News query = ""
                key="general"
                setProgress={setProgress}
                pageSize={pageSize}
                category={"general"}
              />
            }
          />
          <Route
            path="/business"
            element={
              <News query = ""
                key="business"
                setProgress={setProgress}
                pageSize={pageSize}
                category={"business"}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News query = ""
                key="entertainment"
                setProgress={setProgress}
                pageSize={pageSize}
                category={"entertainment"}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News query = ""
                key="health"
                setProgress={setProgress}
                pageSize={pageSize}
                category={"health"}
              />
            }
          />
          <Route
            path="/science"
            element={
              <News query = ""
                key="science"
                setProgress={setProgress}
                pageSize={pageSize}
                category={"science"}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News query = ""
                key="sports"
                setProgress={setProgress}
                pageSize={pageSize}
                category={"sports"}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News query = ""
                key="technology"
                setProgress={setProgress}
                pageSize={pageSize}
                category={"technology"}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// export default class App extends Component {
//   // constructor() {
//   //   super();
//   //   this.state = {

//   //   };
//   // }

//   // setProgress = (progress)=> {
//   //   this.setState({ progress: progress });
//   // }

//   render() {
//     return (

// }
