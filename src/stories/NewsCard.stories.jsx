import React from "react";
import { NewsCard as NewsCardComponent } from "../components/NewsCard";

export default {
  title: "components/Cards",
  component: NewsCardComponent,
  argTypes: {},
};

const Template = (args) => <NewsCardComponent {...args} />;

export const NewsCard = Template.bind({});

NewsCard.argTypes = {};

NewsCard.args = {
  purpose: "purpose",
};
