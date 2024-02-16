'use client';

import parse from 'html-react-parser';

interface HtmlProps {
  content?: string;
}

export default function Html({ content }: HtmlProps) {
  return <>{content ? parse(content) : null}</>;
}
