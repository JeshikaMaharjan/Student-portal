import { tokenInstance } from "../../http-common";
import { useRef } from "react";

function EditDetails({detail}){
    const name = useRef(null);
    
    function handleChange(){
        const putData = {
            name :name.current.value
        }
        try {        
            tokenInstance.put(`/student/${detail.username}`, putData)
            .then((res) => {
                console.log(res);

            }) 
            
          } catch (err) {
            console.log(err);
          }
    }
    return(
        <>
            <input type = "text" value={detail.name} ref={name}>name</input>
            <button onClick={handleChange}>Save</button>
        </>
    )

}
export default EditDetails;