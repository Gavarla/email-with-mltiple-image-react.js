import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import'./mailbox.css'
import "./mailbody.css";

  

const mailIdFrom = [
  { label: "admin@gmail.com", value: "admin@gmail.com" },
  { label: "hrmaneger@gmail", value: "hrmaneger@gmail" },
  
];

const mailIdTo = [
    { label: "gavarladurgaprasad@gmail.com", value: "gavarladurgaprasad@gmail.com" },
    { label: "suresh@gmail.com", value:"suresh@gmail.com" },
    { label: "teja@gmail.com", value:"teja@gmail.com" },
  ];
  
  
const Example = () => {

  const [selectedfrom, setSelectedfrom] = useState([]);
  const [selectedto, setSelectedto] = useState([]);
  <pre>{JSON.stringify(selectedfrom)}</pre>
  // console.log(<pre>{JSON.stringify(selectedto)}</pre>)
  //  console.log(selectedto)

  const [selectedFiles, setSelectedFiles] = useState([]);

  const [data ,setData ] =useState({selectedfrom:{selectedfrom}},
    {selectedto:{selectedto}},
    {selectedFiles:{selectedFiles}},)

    // const {from,to,image } = data


  const handleImageChange = (e) => {
    // console.log(e.target.files[]);
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    // console.log("source: ", source);
    return source.map((photo) => {
      return <img src={photo} alt="" key={photo} />;
    });
  };
  const formSubmit=(e)=>{
    console.log(selectedFiles ,selectedfrom,selectedto)
    e.preventDefault()
    
  }

  return (
    <form onSubmit={formSubmit}>
    <div className="mailcontainer">
    <div className="headermail">
    <div className="multiSelect">
     <div className="email From">
      <h3>Select Email Id From</h3>
      <MultiSelect 
        options={mailIdFrom}
        value={selectedfrom}
        onChange={setSelectedfrom}
        labelledBy="Select"
      />
      </div>

      <div className="email To">
      <h3>Select Email Id To</h3>
      <MultiSelect 
        options={mailIdTo}
        value={selectedto}
        onChange={setSelectedto}
        labelledBy="Select"
      />
      </div>  
    
    </div>
    </div>
    <div className="containerMail">
        <input type="file" id="file" multiple onChange={handleImageChange} />
        <div className="label-holder">
          <label htmlFor="file" className="label">
            <i className="material-icons">add_a_file</i>
          </label>
        </div>
        <div className="result">{renderPhotos(selectedFiles)}</div>
      </div>
</div>
<input type="submit" name="submit" />
</form>
  );
   
};

export default Example;
