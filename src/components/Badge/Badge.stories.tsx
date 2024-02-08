import { Meta } from "@storybook/react";
import Badge from "./";
import { BadgeType } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    value: 9,
  },
};

export const ColourCoding = {
  args: {
    value: 9,
    isNegative: true,
  },
};

export const UndefinedLargeNumber = {
  args: {
    value: 1000,
    badgeType: BadgeType.UNDEFINED_LARGE_NUMBER,
  },
};

export const RoundedLargeNumber = {
  args: {
    value: 1234,
    badgeType: BadgeType.ROUNDED_LARGE_NUMBER,
  },
};
