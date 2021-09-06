import React from "react";
import Post from "./Post.js";

export default {
  title: "components/Post",
  component: Post,
};

const Template = () => (
  <Post
    content="My first awesome post, I’m working in Figma trying to design a new web app that shows all of my tweets!"
    date="26/08/2021"
  />
);

export const Closed = Template.bind({});
Closed.args = {};

export const Open = Template.bind({});
Open.args = { open: true };
