import React from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { styled } from "@storybook/theming";
import "github-markdown-css/github-markdown-light.css";

interface PanelContentProps {
  markdown: string;
}

export const PanelContent: React.FC<PanelContentProps> = ({
  markdown
}) => (
  <Content>
    <ReactMarkdown className="markdown-body" children={markdown} remarkPlugins={[remarkGfm]} />
  </Content>
);

const Content = styled.div`
  padding: 10px;
`;