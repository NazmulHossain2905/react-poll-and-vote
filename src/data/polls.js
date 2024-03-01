import { randomIdGenerator } from "../utils/randomIdGenerator";

export const polls = [
  {
    id: randomIdGenerator(),
    userId: "p29ek-v9hhc-2dmc4-v83rp-gc80k",
    title: "What's your favorite programming language?",
    description:
      "There are a lot of programming languages out there. Which one do you prefer the most?",
    createdAt: new Date().toDateString(),
    totalVote: 80,
    options: [
      {
        id: randomIdGenerator(),
        value: "PHP",
        vote: 5,
        voters: [],
      },
      {
        id: randomIdGenerator(),
        value: "Rust",
        vote: 20,
        voters: [],
      },
      {
        id: randomIdGenerator(),
        value: "TypeScript",
        vote: 30,
        voters: [
          {
            userId: "p29ek-v9hhc-2dmc4-v83rp-gc80k",
          },
        ],
      },
      {
        id: randomIdGenerator(),
        value: "Kotlin",
        vote: 25,
        voters: [],
      },
    ],
    comments: [
      {
        id: randomIdGenerator(),
        user: {
          name: "Emily Johnson",
        },
        comment: "I find TypeScript very useful for web development.",
      },
      {
        id: randomIdGenerator(),
        user: {
          name: "Michael Brown",
        },
        comment: "Rust has been my favorite lately, it's quite powerful.",
      },
    ],
  },
  {
    id: randomIdGenerator(),
    userId: "p29ek-v9hhc-2dmc4-v83rp-gc80k",
    title: "What's your favorite programming language?",
    description:
      "There are a lot of programming languages available. Among them, what is your favorite one?",
    createdAt: new Date().toDateString(),
    totalVote: 326,
    options: [
      {
        id: randomIdGenerator(),
        value: "C++",
        vote: 25,
        voters: [],
      },
      {
        id: randomIdGenerator(),
        value: "Swift",
        vote: 10,
        voters: [],
      },
      {
        id: randomIdGenerator(),
        value: "Ruby",
        vote: 8,
        voters: [
          {
            userId: "p29ek-v9hhc-2dmc4-v83rp-gc80k",
          },
        ],
      },
      {
        id: randomIdGenerator(),
        value: "Go",
        vote: 15,
        voters: [],
      },
    ],
    comments: [
      {
        id: randomIdGenerator(),
        user: {
          name: "John Doe",
        },
        comment: "My favorite programming language is Swift.",
      },
      {
        id: randomIdGenerator(),
        user: {
          name: "Jane Smith",
        },
        comment: "I love coding in C++.",
      },
    ],
  },
  {
    id: randomIdGenerator(),
    title: "Which frontend framework do you prefer?",
    description:
      "Frontend frameworks are essential for building interactive user interfaces. Share your preference!",
    createdAt: new Date().toDateString(),
    totalVote: 220,
    options: [
      {
        id: randomIdGenerator(),
        value: "React",
        vote: 85,
        voters: [],
      },
      {
        id: randomIdGenerator(),
        value: "Vue.js",
        vote: 65,
        voters: [],
      },
      {
        id: randomIdGenerator(),
        value: "Angular",
        vote: 30,
        voters: [],
      },
      {
        id: randomIdGenerator(),
        value: "Svelte",
        vote: 40,
        voters: [],
      },
    ],
    comments: [
      {
        id: randomIdGenerator(),
        user: {
          name: "Sarah",
        },
        comment: "Vue.js has made frontend development so much easier for me.",
      },
      {
        id: randomIdGenerator(),
        user: {
          name: "Max",
        },
        comment:
          "I'm a big fan of React due to its flexibility and huge ecosystem.",
      },
    ],
  },
  {
    id: randomIdGenerator(),
    userId: "p29ek-v9hhc-2dmc4-v83rp-gc80k",
    title: "Which database technology do you prefer?",
    description:
      "Databases are fundamental to storing and managing data in applications. Let's see which one is the most popular!",
    createdAt: new Date().toDateString(),
    totalVote: 180,
    options: [
      {
        id: randomIdGenerator(),
        value: "MongoDB",
        vote: 50,
        voters: [],
      },
      {
        id: randomIdGenerator(),
        value: "MySQL",
        vote: 40,
        voters: [],
      },
      {
        id: randomIdGenerator(),
        value: "PostgreSQL",
        vote: 45,
        voters: [],
      },
      {
        id: randomIdGenerator(),
        value: "SQLite",
        vote: 25,
        voters: [],
      },
    ],
    comments: [
      {
        id: randomIdGenerator(),
        user: {
          name: "Alice",
        },
        comment:
          "PostgreSQL offers great features for complex data structures.",
      },
      {
        id: randomIdGenerator(),
        user: {
          name: "Bob",
        },
        comment:
          "I prefer MongoDB for its scalability and ease of use in NoSQL scenarios.",
      },
    ],
  },
];
