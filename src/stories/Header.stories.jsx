import React from "react";
import { Header as HeaderComponent } from "../components/Header";

export default {
  title: "components",
  component: HeaderComponent,
  argTypes: {},
};

const Template = (args) => <HeaderComponent {...args} />;

export const Header = Template.bind({});

Header.argTypes = {};

Header.args = {};
