import React from "react";
import PostForm from "./PostForm.js";

export default {
  title: "components/PostForm",
  component: PostForm,
};

const Template = () => (
  <PostForm />
);

export const Closed = Template.bind({});
Closed.args = {};

export const Open = Template.bind({});
Open.args = { open: true };
