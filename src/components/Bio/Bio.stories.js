import React from "react";
import Bio from "./Bio.js";

export default {
  title: "components/Bio",
  component: Bio
};

const Template = () => (
  <Bio
  headshot="https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/40790535_10212694670058757_1223783096281726976_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=eUeVnZmxNkAAX_BBlDW&_nc_ht=scontent-lcy1-1.xx&oh=b3986f3bea84d215de51eb48b5b25342&oe=615B59E4"
  name='Joanna Frackiewicz'
  tagline='Learning React by creating this project'
  role='UI UX Designer'
/>
);

export const Closed = Template.bind({});
Closed.args = {};

export const Open = Template.bind({});
Open.args = { open: true };
