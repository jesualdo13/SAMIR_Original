import { useContext, useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Input from "../../reusable/Input";
import Dropdown from "../../reusable/Dropdown";
import UserPhoto from "./UserPhoto";
import { customFetch } from "../../../helpers/customFetch";
import { toast } from "react-toastify";
import { ContextUser } from "../../../contexts/ContextUser";

const apiUrl = 'https://samirapp.royaltics.com/v1'

export default () => {

  const { user } = useContext(ContextUser);
  const sideMenuIsOpen = useOutletContext();
  const navigate = useNavigate();
  let { id } = useParams();

  const [inputs, setInputs] = useState({
    names: '',
    email: '',
    password: '',
    password_verify: '',
    rol: 1,
    person_id:1,
    enterprise_id: 1,
    everyone_access: 1,
    user_id: 1,
    permissions: '',
    photo: null
  });

  const [saveState, setSaveState] = useState({
    data: null,
    isLoading: false,
    hasError: false,
    message: null,
  });

  const [loadState, setLoadState] = useState({
    data: null,
    isLoading: false,
    hasError: false,
    message: null,
  });

  const saveUser = (method, path) => {
    const options = {
      method,
      body: JSON.stringify(inputs),
      headers: { 
        Authorization: "Bearer " + user.private_key,
      }
    };

    const onSuccess = () => {
      toast.success(!id ? "Usuario creado con éxito" : "Usuario actualizado con éxito");
      navigate("/dashboard/users");
    }

    const onError = () => {
      toast.error("Error al guardar el usuario");
    }
  
    customFetch({ fetchState: saveState, setFetchState:setSaveState , onSuccess, onError}, `${apiUrl}/${path}`, options);
  }

  useEffect(() => {
    if (id) {
      customFetch(
        { fetchState: loadState, setFetchState: setLoadState, }, 
        `${apiUrl}/users/${id}`, 
        {
          method: "GET",
          headers: { 
            Authorization: "Bearer " + user.private_key,
          }
        }
      );
    }
  }, [])

  useEffect(() => {
    if (loadState.data) {
      const {email, names, enterprise_id, everyone_access, person_id, photo, rol, user_id} = loadState.data
      setInputs({email, names, enterprise_id, everyone_access, person_id, photo, rol, user_id}) 
    }
  }, [loadState])

  return (
    <div id="business-page" className={`${sideMenuIsOpen ? "shortened" : ""}`}>
      <h1>{!id ? "Agregar nuevo usuario" : "Edición de usuario"}</h1>

      <div className="container">
        <div className="left">
          <UserPhoto 
            defaultPhoto={inputs.photo}
            onLoaded={(photo) => setInputs({...inputs, photo})}
          />
        </div>
        <div className="right">
          <div className="section">
            <h2>Datos básicos</h2>

            <div className="shared">
              <Input
                id={"names"}
                name={"Nombres"}
                placeholder={"Nombres"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"email"}
                name={"Correo electrónico"}
                placeholder={"Correo electrónico"}
                state={{ inputs, setInputs }}
              />
            </div>
            <div className="shared">
              <Input
                id={"password"}
                name={"Contraseña"}
                placeholder={"Contraseña"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"password_verify"}
                name={"Confirmar contraseña"}
                placeholder={"Confirmar contraseña"}
                state={{ inputs, setInputs }}
              />
            </div>
            <div className="shared third">
              <Dropdown
                id={"rol"}
                name={"Tipo de empresa"}
                state={{ inputs, setInputs }}
              />
              <Dropdown
                id={"person_id"}
                name={"Confirmar contraseña"}
                placeholder={"Confirmar contraseña"}
                state={{ inputs, setInputs }}
              />
              <Dropdown
                id={"enterprise_id"}
                name={"Confirmar contraseña"}
                placeholder={"Confirmar contraseña"}
                state={{ inputs, setInputs }}
              />
            </div>
            <div className="shared third">
              <Dropdown
                id={"everyone_access"}
                name={"Tipo de empresa"}
                state={{ inputs, setInputs }}
              />
              <Dropdown
                id={"user_id"}
                name={"Confirmar contraseña"}
                placeholder={"Confirmar contraseña"}
                state={{ inputs, setInputs }}
              />
            </div>

            <button
              className="button-xl"
              onClick={() => !id ? saveUser('POST', 'users') : saveUser('PATCH', `users/${id}`)}
            >
              Guardar datos
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}