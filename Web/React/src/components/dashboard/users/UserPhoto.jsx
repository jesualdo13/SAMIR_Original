import { useContext, useState } from "react";
import { IconFolder, IconTrashBin } from "../../../base/Icons";
import { ContextUser } from "../../../contexts/ContextUser";
import Avatar from "../../../images/profile-picture.jpg";

export default ({defaultPhoto, onLoaded}) => {

  const [photoPreview, setPhotoPreview] = useState(defaultPhoto)
  const { user } = useContext(ContextUser);

  const deletePreview = () => {
    setPhotoPreview(null)
  }

  const uploadPhoto = async (file) =>  {
    const formData = new FormData();
    formData.append('photo', file);   

    try{
      const response = await fetch('https://samirapp.royaltics.com/v1/users/photo/2',{
        method: 'PATCH',
        body: formData,
        headers: {
          Authorization: "Bearer " + user.private_key,
        }
      });
      const result = await response.json();
      onLoaded('https://picsum.photos/200/300')
      console.log(result);
    }catch(e){
      console.log(e);
      setPhotoPreview(null)
    }

  }

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    setPhotoPreview(URL.createObjectURL(e.target.files[0]));
    uploadPhoto(e.target.files[0]);
  };
  
  return <>
    <div className="avatar">
      <img src={photoPreview ?? Avatar} alt="" />
    </div>
    <div className="buttons">
      <input
        type="file"
        id="business-avatar-file"
        onChange={onSelectFile}
      />
      <label htmlFor="business-avatar-file" className="button-xl">
        <IconFolder />
        Cambiar avatar
      </label>
      <button className="button-xl red" onClick={deletePreview}>
        <IconTrashBin />
        Eliminar avatar
      </button>
    </div>
  </>
}