import ArticlePagination from "./ArticlePagination";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof ArticlePagination> = {
  title: "ArticlePagination",
  component: ArticlePagination,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    nextLabel: "Consectetur adipisicing elit",
    nextURL: "#next",
    previousLabel: "Lorem ipsum dolor sit amet",
    previousURL: "#previous",
  },
};
