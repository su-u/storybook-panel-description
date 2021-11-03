import React from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { styled } from "@storybook/theming";

interface PanelContentProps {
  markdown: string;
}

export const PanelContent: React.FC<PanelContentProps> = ({
  markdown
}) => (
  <Content>
    <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
  </Content>
);

const Content = styled.div`
  padding: 10px;
`;