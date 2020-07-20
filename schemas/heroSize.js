export default {
  name: "heroSize",
  title: "Hero Size",
  type: "string",
  options: {
    list: [
      { name: "small", title: "Small", value: "" },
      { name: "medium", title: "Medium", value: "is-medium" },
      { name: "large", title: "Large", value: "is-large" },
      {
        name: "Fullheight",
        title: "Fullheight",
        value: "is-fullsheight-with-navbar",
      },
    ],
  },
};
