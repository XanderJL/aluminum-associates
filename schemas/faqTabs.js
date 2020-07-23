export default {
  name: "faqTabs",
  title: "FAQ Tabs",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
