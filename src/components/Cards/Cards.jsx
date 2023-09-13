import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card/Card";


const Cards = ({hadleAddToList}) => {

    const [actors,setActors] = useState([]);
    useEffect(()=>
    {
        fetch('Avengers.json')
        .then(res => res.json())
        .then(data => setActors(data))
    },[])

    // console.log(actors);
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                actors.map(actor => 
                <Card
                key={actor.id}
                actor={actor}
                hadleAddToList ={hadleAddToList}
                ></Card>)
            }
        </div>
    );
};

export default Cards;