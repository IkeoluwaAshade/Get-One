import { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import styled from 'styled-components'

const ApiOne = () => {
    const [getData, setGetData] = useState([])

    const getApi = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        setGetData(response.data);
    };

    useEffect (() => {
        getApi();
    }, []);

    console.log(getData);

  return (
    <CardContainer>
        {getData.map((myData) => (
            <Card key={myData.id}>
                <p>
                    <b>Title</b>: {myData.title}
                </p>
                <p>
                    <b>Price</b>: ${myData.price}
                </p>
                <div>
                    <img src={myData.image} alt="" />
                </div>
                <Link to={`/detail/${myData.id}`}>
                    <button>View More</button>
                </Link>
            </Card>
        ))}
    </CardContainer>
  )
}

export default ApiOne;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    padding: 20px;
`

const Card = styled.div`
    background-color: aliceblue;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 200px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 

    img {
        height: 200px;
        width: 200px;
        background-color: gray;
        /* object-fit: cover; */
    }

    p {
        margin: 10px 0;
    }

    button {
        padding: 10px 20px;
        border: none;
        background-color: #007bff;
        color: #fff;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s;
    

        &:hover {
            background-color: #0056b3;
        }
    }

`