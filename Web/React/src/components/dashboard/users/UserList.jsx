import { useContext, useEffect, useState } from "react";
import { IconSync } from "../../../base/Icons";
import { ContextUser } from "../../../contexts/ContextUser";
import { customFetch } from "../../../helpers/customFetch";
import UserCard from "./UserCard"
import { users } from "./users";

const endpoint = "https://samirapp.royaltics.com/v1/users";

export default () => {

  const { user } = useContext(ContextUser);
  const [fetchState, setFetchState] = useState({
    data: null,
    isLoading: false,
    hasError: false,
    message: null,
  });

  const loadList = () => {
    const options = {
      method: "GET",
      headers: { 
        Authorization: "Bearer " + user.private_key,
      }
    };
  
    customFetch({ fetchState, setFetchState }, endpoint, options);
  }

  useEffect(() => {
    loadList()
  }, []);
  

  return (
    <>
      {fetchState.data?.map((user) => {
        return <UserCard key={user.id} {...user} onDelete={loadList} />;
      })}
    </>
  )
}