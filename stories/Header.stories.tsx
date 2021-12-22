import React from "react";
import { Story, Meta } from "@storybook/react";
import { Header as HeaderComponent,HeaderProps } from "../components/Header";

export default {
  title: "components",
  component: HeaderComponent,
  argTypes: {},
} as Meta;

const Template: Story<HeaderProps> = (args) => <HeaderComponent {...args} />;

export const Header = Template.bind({});

Header.argTypes = {
  
}

Header.args = {
  purpose:"purpose",
};