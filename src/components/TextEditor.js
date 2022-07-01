import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextEditor({ input, setInput }) {
  return <ReactQuill theme="snow" value={input} onChange={setInput} />;
}

export default TextEditor;
