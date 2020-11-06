export default {
  categories: [
    {
      category: "Productivity",
      id: "1",
    },
    {
      category: "Fitness",
      id: "2",
    },
    {
      category: "Finance",
      id: "3",
    },
    {
      category: "Travel",
      id: "4",
    },
  ],
  // folders: [
  //   {
  //     id: "1",
  //     category: "Productivity",
  //     folder_name: "Read books",
  //     completed: false,
  //   },
  //   {
  //     id: "2",
  //     category: "Fitness",
  //     folder_name: "Take cycling classes",
  //     completed: false,
  //   },
  //   {
  //     id: "3",
  //     category: "Finance",
  //     folder_name: "Save money",
  //     completed: false,
  //   },
  //   {
  //     id: "4",
  //     category: "Travel",
  //     folder_name: "Fly to Italy",
  //     completed: false,
  //   },
  //   {
  //     id: "5",
  //     category: "Travel",
  //     folder_name: "Visit friends in Taiwan",
  //     completed: true,
  //   },
  // ],
  todos: [
    {
      id: "1",
      category: "productivity",
      name: "Get productive",
      description: "Read LOTR trilogy",
      start_date: "2020-01-03T00:00:00.000Z",
      end_date: "2020-04-03T00:00:00.000Z",
      checked: false,
      folder_id: "1",
    },
    {
      id: "2",
      name: "Get fit",
      category: "fitness",
      description: "Run first half marathon",
      start_date: "2020-01-03T00:00:00.000Z",
      end_date: "2020-04-03T00:00:00.000Z",
      checked: false,
      folder_id: "2",
    },
    {
      id: "3",
      name: "Get saving",
      category: "finance",
      description: "Save $1,000 before 2022",
      start_date: "2020-01-03T00:00:00.000Z",
      end_date: "2021-01-03T00:00:00.000Z",
      checked: false,
      folder_id: "3",
    },
    {
      id: "4",
      name: "Get traveling",
      category: "travel",
      description: "Visit friends in Taiwan",
      start_date: "2020-01-03T00:00:00.000Z",
      end_date: "2022-05-03T00:00:00.000Z",
      checked: true,
      folder_id: "4",
    },
  ],
};
