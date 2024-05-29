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
    <div>
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
    </div>
  )
}

export default ApiOne;

const Card = styled.div`
    background-color: aliceblue;

    img {
        height: 200px;
        width: 200px;
        background-color: gray;
    }
`