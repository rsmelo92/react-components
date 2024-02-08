import React from "react";
import { useState } from "react";
import Accordion from "./";

import type { Meta } from "@storybook/react";

const meta: Meta<typeof Accordion> = {
  title: "Accordion",
  component: Accordion,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    sections: [
      {
        title: "Advanced topics",
        content: (
          <>
            <p>Charm bundles</p>
            <p>Machine authentication</p>
            <p>Migrating models</p>
            <p>Using storage</p>
            <p>Working with actions</p>
            <p>Working with resources</p>
            <p>Cloud image metadata</p>
            <p>Tools</p>
          </>
        ),
      },
      {
        title: "Networking",
        content: (
          <>
            <p>Working offline</p>
            <p>Fan container networking</p>
            <p>Network spaces</p>
          </>
        ),
      },
      {
        title: "Miscellaneous",
        content: (
          <>
            <p>Juju GUI</p>
            <p>CentOS support</p>
            <p>Collecting Juju metrics</p>
          </>
        ),
      },
    ],
  },
};

export const ExternalState = () => {
  const [expandedSection, setExpandedSection] = useState("");
  return (
    <Accordion
      expanded={expandedSection}
      externallyControlled
      onExpandedChange={(id) => setExpandedSection(id)}
      sections={[
        {
          title: "Advanced topics",
          key: "advanced-topics",
          content: (
            <>
              <p>Charm bundles</p>
              <p>Machine authentication</p>
              <p>Migrating models</p>
              <p>Using storage</p>
              <p>Working with actions</p>
              <p>Working with resources</p>
              <p>Cloud image metadata</p>
              <p>Tools</p>
            </>
          ),
        },
        {
          title: "Networking",
          key: "networking",
          content: (
            <>
              <p>Working offline</p>
              <p>Fan container networking</p>
              <p>Network spaces</p>
            </>
          ),
        },
        {
          title: "Miscellaneous",
          key: "miscellaneous",
          content: (
            <>
              <p>Juju GUI</p>
              <p>CentOS support</p>
              <p>Collecting Juju metrics</p>
            </>
          ),
        },
      ]}
    />
  );
};

export const Headings = {
  args: {
    ...Default.args,
    titleElement: "h3",
  },
};
