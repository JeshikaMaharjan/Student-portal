import { useState } from "react";
import { tokenInstance } from "../http-common";

function Image() {
  const [image, setImage] = useState("");

  const convertToBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        console.log("onload");
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        console.log("onerror");
        reject(error);
      };
    });
  };

  const onFileSelected = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage(base64);
    console.log("File");
  };

  console.log({ image });

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="file"
        label="Image"
        name="myFile"
        accept=".jpeg, .png, .jpg"
        onChange={(e) => onFileSelected(e)}
      />

      <button
        onClick={() => {
          console.log("click");
          console.log("try");
          tokenInstance
            .post("/image", { image })
            .then((res) => {
              console.log("resss");
              console.log(res);
            })
            .catch((e) => console.log(e));
        }}
      >
        Submit
      </button>
    </form>
  );
}
export default Image;
