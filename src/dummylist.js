const DUMMY_LIST = [
  {
    id: Date.now(),
    title: "School",
    description: "All the things I gotta do for school.",
    todos: [
      {
        id: Date.now(),
        title: "Do all the homework",
        date: "09/22/2022",
      },
    ],
    isActive: false,
  },
  {
    id: Date.now(),
    title: "Work",
    description: "Workplace section.",
    todos: [
      {
        id: Date.now(),
        title: "Finish the presentation soon",
        date: "09/22/2022",
      },
    ],
    isActive: true,
  },
];

export default DUMMY_LIST;
