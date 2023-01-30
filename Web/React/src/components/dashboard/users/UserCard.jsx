import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Avatar from "../../../images/profile-picture.jpg";


import { IconCreateOutline, IconSync, IconTrashBin } from "../../../base/Icons";
import { ContextUser } from "../../../contexts/ContextUser";
import { customFetch } from "../../../helpers/customFetch";

const endpoint = "https://samirapp.royaltics.com/v1/users";

const UserCard = ({ id, names, email, photo, onDelete }) => {
  // const doSomething = () => {
  // };

  const { user } = useContext(ContextUser);
  const [fetchState, setFetchState] = useState({
    data: null,
    isLoading: false,
    hasError: false,
    message: null,
  });

  const deleteUser = () => {
    const onError = () => {
      toast.success("Error al eliminar el usuario!");
    }

    const onSuccess = () => {
      toast.error("Usuario eliminado!");
      onDelete && onDelete()
    }
    
    const options = {
      method: "DELETE",
      headers: { 
        Authorization: "Bearer " + user.private_key,
      }
    };
  
    customFetch({ fetchState, setFetchState, onSuccess, onError }, `${endpoint}/${id}`, options);
  }

  return (
    <div className="user-card">
      <div className="info">
        <div className="avatar">
          <img src={photo ?? Avatar} alt="" />
        </div>
        <div className="text">
          <p>{names}</p>
          <span>{email}</span>
        </div>
      </div>

      <div className="actions">
        <div className="grid">
          <Link to={`/dashboard/users/${id}`}>
            Editar
            <IconCreateOutline />
          </Link>
          <button className="highlighted" onClick={deleteUser} disabled={fetchState.isLoading}>
            Eliminar
            {fetchState.isLoading ? <IconSync /> : <IconTrashBin />}
            {/* <IconTrashBin /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
