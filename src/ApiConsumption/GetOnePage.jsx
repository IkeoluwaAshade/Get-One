import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'


const GetOnePage = () => {
    const { id } = useParams ();

    const [ getOneData, setGetOneData] = useState({});

    const getOneApi = async () => {
        const  response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setGetOneData(response.data);
    };

    useEffect(() => {
        getOneApi();
    }, []);

    console.log(getOneData);

  return (
    <Container>
        <Img src={getOneData.image} alt='' />
        <TextContainer>
          <Title> {getOneData.title} </Title>
          <Price> ${getOneData.price} </Price>
          <Description> {getOneData.description} </Description>
        </TextContainer>
    </Container>
  )
}

export default GetOnePage

const Container = styled.div`
  margin: 20px;
  background-color: #eeeeee;

  display: flex;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Img = styled.img`
  height: 200px;
  width: 200px;
  /* object-fit: cover; */
  border-radius: 10px;
  margin-right: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  color: #333;
`;

const Price = styled.h3`
  font-size: 18px;
  color: #007bff;
  margin: 10px 0;
`;

const Description = styled.div`
  font-size: 16px;
  color: #666;
`;