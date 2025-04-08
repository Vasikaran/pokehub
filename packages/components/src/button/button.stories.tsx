import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["contained", "outlined", "text"],
      description: "The button variant to use",
      defaultValue: "contained",
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "error", "warning", "info", "success"],
      description: "The color of the button",
      defaultValue: "primary",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "The size of the button",
      defaultValue: "medium",
    },
    disabled: {
      control: "boolean",
      description: "If true, the button will be disabled",
      defaultValue: false,
    },
    fullWidth: {
      control: "boolean",
      description:
        "If true, the button will take up the full width of its container",
      defaultValue: false,
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "contained",
    color: "primary",
  },
};

export const Outlined: Story = {
  args: {
    children: "Outlined Button",
    variant: "outlined",
    color: "primary",
  },
};

export const Text: Story = {
  args: {
    children: "Text Button",
    variant: "text",
    color: "primary",
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" color="error">
        Error
      </Button>
      <Button variant="contained" color="warning">
        Warning
      </Button>
      <Button variant="contained" color="info">
        Info
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <Button variant="contained" size="small">
        Small
      </Button>
      <Button variant="contained" size="medium">
        Medium
      </Button>
      <Button variant="contained" size="large">
        Large
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "contained",
    color: "primary",
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    variant: "contained",
    color: "primary",
    fullWidth: true,
  },
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Button variant="contained" startIcon={<span>→</span>}>
        With Start Icon
      </Button>
      <Button variant="contained" endIcon={<span>←</span>}>
        With End Icon
      </Button>
      <Button
        variant="contained"
        startIcon={<span>→</span>}
        endIcon={<span>←</span>}
      >
        With Both Icons
      </Button>
    </div>
  ),
};
