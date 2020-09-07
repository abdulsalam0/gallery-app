import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  //variables
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // file types that are  allowed
  const types = ["image/png", "image/jpeg"];

  //method used to load the file
  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("please select an image file png or jpeg");
    }
  };

  return (
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
