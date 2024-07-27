import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownEditor from './components/MarkdownEditor';

function handleContentChange(content) {
  console.log('Content changed:', content);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <MarkdownEditor onContentChange={handleContentChange} />
);
