import React,{useState} from "react";

function DisneyFetch(){
  const [disneyRoleList, setDisneyRoleList] = useState([]);

  async function fetchData(){

    try{
      const response = await fetch('https://api.disneyapi.dev/character');
      const disneyData = await response.json();
      setDisneyRoleList(disneyData.data || []);
    }catch(error){
      console.error('Error:',error)
    }
  }

  return(
    <div>
      <button
      onClick={fetchData}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer button"
      >
        Get Disney Characters
        </button>

      <ul className="list-none">
        {disneyRoleList.map((char)=> (
          <li key={char._id}  className="disney-chars">
            <img src={char.imageUrl} alt={char.name} width='150px'/>
            <p>{char.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DisneyFetch;