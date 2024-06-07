import { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { VscProject } from 'react-icons/vsc';
import { IoCloudDownloadSharp } from "react-icons/io5";
import { FaCommentDots } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

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
                <VscProject size={'25px'}/>
                <p>
                    <b>Title</b>: {myData.title}
                </p>
                <Hashtag>
                    <p>#Web Development</p>
                </Hashtag>
                <p>
                    <b>Price</b>: ${myData.price}
                </p>
                <TimeandDate>
                    <p>June 06 - 8m watch time</p>
                </TimeandDate>
                <div> 
                    <Link to={`/detail/${myData.id}`}>
                        <img src={myData.image} alt="" />
                    </Link>
                </div>
                <Link to={`/detail/${myData.id}`}>
                    <button>View More</button>
                </Link>
                <Analysis>
                    <Downloads><IoCloudDownloadSharp /><p>278</p></Downloads>
                    <Comment><FaCommentDots />
                    27</Comment>
                    <Save><FaCar /></Save>
                    <LinkIcon><FaLink /></LinkIcon>
                </Analysis>
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
        cursor: pointer;
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

const Hashtag = styled.div`
    background-color: #fff;
    width: 140px;
    border: 2px solid gray;
    border-radius: 7px;
    font-size: 14px;

    display: flex;
    justify-content: center;
    align-items: center;

`

const TimeandDate = styled.div`
    font-size: 10px;
    font-weight: 700;
`

const Analysis = styled.div`
    /* background-color: red; */
    width: 200px;
    margin-top: 12px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Downloads = styled.div`
    /* background-color: green; */
    width: 51px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`

const Comment = styled.div`
    /* background-color: brown; */
    width: 51px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`

const Save = styled.div`
    cursor: pointer;
`

const LinkIcon =  styled.div`
    cursor: pointer;
`