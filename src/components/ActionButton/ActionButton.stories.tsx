import ActionButton from "./ActionButton";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof ActionButton> = {
  title: "ActionButton",
  component: ActionButton,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    appearance: "positive",
    children: "Click me!",
  },
};

export const Loading = {
  args: {
    appearance: "positive",
    loading: true,
    disabled: true,
    children: "Click me!",
  },
};
