import React from "react";
import { AddonPanel } from "@storybook/components";
import { PanelContent } from "./components/PanelContent";
import { useParameter } from "@storybook/api";
import { PARAM_KEY } from "./constants";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  const markdown = useParameter(PARAM_KEY, '');
  return (
    <AddonPanel {...props}>
      <PanelContent
        markdown={markdown}
      />
    </AddonPanel>
  );
};
