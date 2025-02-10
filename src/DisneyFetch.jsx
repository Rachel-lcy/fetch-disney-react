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
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer button my-5 h-14 md:text-base"
      >
        Get Disney Characters
        </button>
 
      <ul className="list-none grid w-36 ">
        {disneyRoleList.map((char)=> (
          <li key={char._id}  className="disney-chars .grid grid-flow-col mx-auto">
            <img src={char.imageUrl} alt={char.name} />
            <p>{char.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DisneyFetch;