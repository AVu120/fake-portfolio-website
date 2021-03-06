const comments = [
  {
    id: 1,
    title: "Comment 1",
    userComment: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 2,
    title: "Comment 2",
    userComment: "react-big-picture",
    authorId: 2,
    category: "JavaScript"
  },
  {
    id: 3,
    title: "Comment 3",
    userComment: "react-creating-reusable-components",
    authorId: 3,
    category: "JavaScript"
  },
  {
    id: 4,
    title: "Comment 4",
    userComment: "javascript-development-environment",
    authorId: 2,
    category: "JavaScript"
  },
  {
    id: 5,
    title: "Comment 5",
    userComment: "react-redux-react-router-es6",
    authorId: 3,
    category: "JavaScript"
  },
  {
    id: 6,
    title: "Comment 6",
    userComment: "react-flux-building-applications",
    authorId: 2,
    category: "JavaScript"
  },
  {
    id: 7,
    title: "Comment 7",
    userComment: "writing-clean-code-humans",
    authorId: 3,
    category: "Software Practices"
  },
  {
    id: 8,
    title: "Comment 8",
    userComment: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture"
  },
  {
    id: 9,
    title: "Comment 9",
    userComment: "career-reboot-for-developer-mind",
    authorId: 2,
    category: "Career"
  },
  {
    id: 10,
    title: "Comment 10",
    userComment: "web-components-shadow-dom",
    authorId: 3,
    category: "HTML5"
  }
];

const authors = [
  { id: 1, name: "Anthony Hien Vu" },
  { id: 2, name: "Ee Tan" },
  { id: 3, name: "Bill Gates" }
];

const newComment = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newComment,
  comments,
  authors
};
