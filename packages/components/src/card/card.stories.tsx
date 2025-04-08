import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the card",
    },
    description: {
      control: "text",
      description: "The description text for the card",
    },
    image: {
      control: "text",
      description: "URL of the image to display",
    },
    imageAlt: {
      control: "text",
      description: "Alt text for the image",
    },
    imageHeight: {
      control: { type: "number" },
      description: "Height of the image in pixels",
    },
    children: {
      description: "Additional content to render inside the card",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Card Title",
    description:
      "This is a simple card component with a title and description.",
    image: "https://picsum.photos/300/200",
    imageAlt: "Sample image",
  },
};

export const WithCustomImageHeight: Story = {
  args: {
    title: "Custom Height Image",
    description: "This card has a custom image height of 150px.",
    image: "https://picsum.photos/300/150",
    imageAlt: "Sample image with custom height",
    imageHeight: 150,
  },
};

export const WithChildren: Story = {
  args: {
    title: "Card With Children",
    description: "This card contains additional child components.",
    image: "https://picsum.photos/300/200",
    imageAlt: "Sample image",
    children: (
      <div style={{ padding: "16px", backgroundColor: "#f5f5f5" }}>
        <p>This is custom content inside the card!</p>
      </div>
    ),
  },
};
