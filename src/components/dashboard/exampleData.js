const projects = [
  {
    projectName: "Project 1",
    participants: ["user1", "user2", "user3", "user4"],
    notes: [
      {
        title: "Note1",
        content: "Content of note1",
        priority: 1,
        // creation data
        participants: ["user2", "user4"],
        project: "current project",
        complete: true
      },
      {
        title: "Note2",
        content: "Content of note2",
        priority: 2,
        // creation data
        participants: ["user1"],
        project: "current project",
        complete: false
      },
      {
        title: "Note3",
        content: "Content of note3",
        priority: 1,
        // creation data
        participants: ["user1", "user3"],
        project: "current project",
        complete: true
      },
      {
        title: "Note4",
        content: "Content of note4",
        priority: 1,
        // creation and update date
        participants: ["user4"],
        project: "current project",
        complete: false
      }
    ],
    // creation and update date
    owner: "userid",
    organizationName: "org name"
  },
  {
    projectName: "Project 2",
    participants: ["user1", "user2", "user3", "user4"],
    notes: [
      {
        title: "Note1",
        content: "Content of note1",
        priority: 1,
        // creation data
        participants: ["user2", "user4"],
        project: "current project",
        complete: true
      },
      {
        title: "Note2",
        content: "Content of note2",
        priority: 2,
        // creation data
        participants: ["user1"],
        project: "current project",
        complete: false
      },
      {
        title: "Note3",
        content: "Content of note3",
        priority: 1,
        // creation data
        participants: ["user1", "user3"],
        project: "current project",
        complete: true
      },
      {
        title: "Note4",
        content: "Content of note4",
        priority: 1,
        // creation and update date
        participants: ["user4"],
        project: "current project",
        complete: false
      }
    ],
    // creation and update date
    owner: "userid3",
    organizationName: "org name3"
  }
]

export default projects
