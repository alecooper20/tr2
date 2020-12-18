import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import FlexBoxLista from '../../components/FlexBoxLista';
import FlexBoxItem from '../../components/FlexBoxItem';
const Dogs = () => {

    const [dogs, setDogs] = useState(null);

    useEffect(() => {

        axios
        .get('https://dog.ceo/api/breeds/list/all')
        .then((resposta) => {
            console.log(resposta.data)
            setDogs(resposta.data);
        });

    },[]);

    if(dogs === null){

        return <p>Carregando ...</p>

    }
    return (
        <>

        

        <FlexBoxLista titulo='Subtipos'>
            {dogs.message.bulldog.map(item =>(
                <FlexBoxItem>{item}</FlexBoxItem>
                ))}
        </FlexBoxLista>
        </>

    );

};



export default Dogs;