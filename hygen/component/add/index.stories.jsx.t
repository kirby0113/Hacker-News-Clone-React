---
to: src/stories/<%= name %>.stories.jsx
unless_exists: true
---
import React from "react";
import { <%= name %> as <%= name %>Component} from "../<%= category %>/<%= name %>";

export default {
  title: "<%= category %>",
  component: <%= name %>Component,
  argTypes: {},
};

const Template = (args) => <<%= name %>Component {...args} />;

export const <%= name %> = Template.bind({});

<%= name %>.argTypes = {
  
}

<%= name %>.args = {
  purpose:"purpose",
};