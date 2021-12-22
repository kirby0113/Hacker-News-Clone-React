---
to: stories/<%= name %>.stories.tsx
unless_exists: true
---
import React from "react";
import { Story, Meta } from "@storybook/react";
import { <%= name %> as <%= name %>Component,<%= name %>Props } from "../<%= category %>/<%= name %>";

export default {
  title: "<%= category %>",
  component: <%= name %>Component,
  argTypes: {},
} as Meta;

const Template: Story<<%= name %>Props> = (args) => <<%= name %>Component {...args} />;

export const <%= name %> = Template.bind({});

<%= name %>.argTypes = {
  
}

<%= name %>.args = {
  purpose:"purpose",
};