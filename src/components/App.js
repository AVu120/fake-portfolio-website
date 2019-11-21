import React from "react";
import Clippy from "../images/clippy.jpg";

// Import the BrowserRouter, Route and Link Components
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./MainPage/About";
import Articles from "./MainPage/Articles";
import TechArticles from "./MainPage/TechArticles";
import Projects from "./MainPage/Projects";
import Navbar from "./Common/Navbar";
import Comments from "./MainPage/Comments/Comments";
import ReactProjects from "./Projects/ReactProjects";
import ReduxProjects from "./Projects/ReduxProjects";
import ExpressProjects from "./Projects/ExpressProjects";
import HangmanProject from "./Projects/HangmanProject";
import ReactArticle from "./Articles/ReactArticle";
import ReduxArticle from "./Articles/ReduxArticle";
import ExpressArticle from "./Articles/ExpressArticle";
import Suscribe from "./MainPage/Suscribe";
import LiveQueryTechArticles from "./Articles/LiveQueryTechArticles";
import ReactTechArticles from "./Articles/ReactTechArticles";
import ReduxTechArticles from "./Articles/ReduxTechArticles";
import ExpressTechArticles from "./Articles/ExpressTechArticles";
import "../styles/App.css";
import PageNotFound from "./PageNotFound";
import ManageCommentsPage from "./MainPage/Comments/ManageCommentsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Practice from "./MainPage/Practice";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Projects} />
          <Route path="/projects" component={Projects} />
          <Route path="/articles" component={Articles} />
          <Route path="/techArticles" component={TechArticles} />
          <Route
            path="/liveQueryTechArticles"
            component={LiveQueryTechArticles}
          />
          <Route path="/Comments" component={Comments} />
          <Route path="/about" component={About} />
          <Route path="/suscribe" component={Suscribe} />
          <Route path="/reactProjects" component={ReactProjects} />
          <Route path="/reduxProjects" component={ReduxProjects} />
          <Route path="/HangmanProject" component={HangmanProject} />
          <Route path="/expressProjects" component={ExpressProjects} />
          <Route path="/reactArticle" component={ReactArticle} />
          <Route path="/reduxArticle" component={ReduxArticle} />
          <Route path="/expressArticle" component={ExpressArticle} />
          <Route path="/reactTechArticles" component={ReactTechArticles} />
          <Route path="/reduxTechArticles" component={ReduxTechArticles} />
          <Route path="/expressTechArticles" component={ExpressTechArticles} />
          <Route path="/manageComments" component={ManageCommentsPage} />
          <Route
            exact
            path="/manageComments/:id"
            render={({ match }) => <ManageCommentsPage match={match} />}
          />
          <Route path="/practice" component={Practice} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
      <img
        src={Clippy}
        className="portfolio-image"
        height="100px"
        width="100px"
        alt="Portfolio"
      />
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
