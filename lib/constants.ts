import { Thread } from "@/features/threads/types";

export const DUMMY_THREADS: Thread[] = [
  {
    id: 1,
    title: "Introduction to Programming",
    body: "Programming is the process of creating a set of instructions that tell a computer how to perform a task. It involves writing code in a programming language like JavaScript, Python, or C++. To get started, it's important to first understand the basics: variables, loops, conditionals, and functions. These are the building blocks of any program, and once you understand them, you'll be able to write simple programs. As you progress, you'll learn more complex concepts like data structures, algorithms, and object-oriented programming.",
    recentContributors: [
      {
        id: 1,
        username: "user1",
        avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        id: 2,
        username: "user2",
        avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        id: 3,
        username: "user3",
        avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
      },
    ],
    replies: 12,
    views: 150,
    activity: "2025-01-07T10:30:00Z",
  },
  {
    id: 2,
    title: "React Best Practices",
    body: "React is one of the most popular JavaScript libraries used for building user interfaces, especially single-page applications. When developing with React, it's important to follow best practices to ensure that your code is efficient, maintainable, and scalable. Some key practices include using functional components, keeping components small and focused on one task, utilizing hooks for managing state and side effects, and optimizing performance by avoiding unnecessary re-renders. React's component-based architecture makes it easy to build reusable UI elements, which is a crucial part of writing clean, modular code.",
    recentContributors: [
      {
        id: 2,
        username: "user2",
        avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        id: 3,
        username: "user3",
        avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
        id: 4,
        username: "user4",
        avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
      },
    ],
    replies: 8,
    views: 120,
    activity: "2025-01-06T14:45:00Z",
  },
  {
    id: 3,
    title: "JavaScript ES6 Features",
    body: "ECMAScript 6 (ES6) is a major update to JavaScript that introduced several new features to make development easier and more efficient. Some of the key features include arrow functions, template literals, destructuring, and the spread/rest operators. Arrow functions simplify function syntax, while template literals make string interpolation easier. Destructuring allows for easier access to nested data, and the spread/rest operators simplify handling of arrays and objects. ES6 also introduced classes for object-oriented programming, promises for asynchronous operations, and modules for better code organization.",
    recentContributors: [
      {
        id: 3,
        username: "user3",
        avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
        id: 4,
        username: "user4",
        avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        id: 5,
        username: "user5",
        avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg",
      },
    ],
    replies: 15,
    views: 200,
    activity: "2025-01-05T09:00:00Z",
  },
  {
    id: 4,
    title: "Async/Await in JavaScript",
    body: "Asynchronous programming in JavaScript can be challenging, but the introduction of async/await syntax in ES8 has made it much easier to work with. The async keyword is used to define a function that will return a promise, and the await keyword is used to pause the execution of the function until the promise is resolved. This makes asynchronous code look and behave more like synchronous code, which improves readability and reduces the need for nested callbacks. Async/await is built on top of promises, and it allows developers to write cleaner and more concise code for handling asynchronous operations.",
    recentContributors: [
      {
        id: 4,
        username: "user4",
        avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        id: 5,
        username: "user5",
        avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        id: 6,
        username: "user6",
        avatarUrl: "https://randomuser.me/api/portraits/women/6.jpg",
      },
    ],
    replies: 5,
    views: 85,
    activity: "2025-01-04T16:20:00Z",
  },
  {
    id: 5,
    title: "State Management in React",
    body: "State management is a crucial aspect of React development, especially as applications grow in complexity. React offers a variety of state management solutions, including built-in hooks like useState and useReducer, as well as external libraries like Redux and MobX. The Context API is another powerful tool for managing global state in React applications. Choosing the right state management solution depends on the size and complexity of your application. For smaller applications, React's built-in hooks might be sufficient, but for larger applications, a more robust solution like Redux can help keep state management organized and predictable.",
    recentContributors: [
      {
        id: 5,
        username: "user5",
        avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        id: 6,
        username: "user6",
        avatarUrl: "https://randomuser.me/api/portraits/women/6.jpg",
      },
      {
        id: 1,
        username: "user1",
        avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      },
    ],
    replies: 20,
    views: 300,
    activity: "2025-01-03T11:15:00Z",
  },
  {
    id: 6,
    title: "Debugging Tips for JavaScript",
    body: "Debugging is an essential skill for any developer. JavaScript provides several built-in tools for debugging, including the console object, which allows you to log information to the browser's console. In addition, modern browsers come with powerful developer tools that allow you to inspect elements, debug JavaScript code step by step, and monitor network requests. Other helpful tools include breakpoints, watch expressions, and debugging extensions for code editors. Being proficient with these debugging techniques can save you time and frustration when working on complex JavaScript applications.",
    recentContributors: [
      {
        id: 6,
        username: "user6",
        avatarUrl: "https://randomuser.me/api/portraits/women/6.jpg",
      },
      {
        id: 1,
        username: "user1",
        avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        id: 2,
        username: "user2",
        avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      },
    ],
    replies: 18,
    views: 250,
    activity: "2025-01-02T08:45:00Z",
  },
];
