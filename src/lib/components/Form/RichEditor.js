import React from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const RichEditor = (props) => {
  const {
    value,
    onChange,
    style,
    className
  } = props;

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      className={className}
      style={{height: "200px", marginBottom: 35, minWidth: 200, ...style}}
    />
  )
}

RichEditor.defaultProps = {
  style: {},
  className: ""
}

export default RichEditor;