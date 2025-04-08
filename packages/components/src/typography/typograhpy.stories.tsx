import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./typography";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
      ],
      description: "The variant to use",
    },
    component: {
      control: "text",
      description: "The component used for the root node",
    },
    gutterBottom: {
      control: "boolean",
      description: "If true, the text will have a bottom margin",
    },
    children: {
      control: "text",
      description: "The content of the component",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: "This is a typography component",
  },
};

export const Heading1: Story = {
  args: {
    variant: "h1",
    children: "Heading 1",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
    children: "Heading 2",
  },
};

export const Body1: Story = {
  args: {
    variant: "body1",
    children: "This is body1 text which is commonly used for general content.",
  },
};

export const WithGutterBottom: Story = {
  args: {
    gutterBottom: true,
    children: "This typography has a bottom margin (gutterBottom).",
  },
};
