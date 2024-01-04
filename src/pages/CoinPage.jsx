import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CoinContext from '../context/coin/CoinContext';
import { Container, LinearProgress, Typography } from '@mui/material';
import getCoinDetails from './Home/'

const CoinPage = () => {

  const { dispatch, coinData } = useContext(CoinContext)

  const params = useParams();

  const fetchCoinData = async () => {
    const data = await getCoinDetails(params.coinId)
    dispatch({
      type: "COIN_DETAILS",
      payload: data,
    })
  }


  useEffect(() => {
    fetchCoinData();
  }, []);

  if (!coinData) {
    return (<Container>
      <LinearProgress sx={{ backgroundColor: "orange" }} />
    </Container>
    );
  }

  return (
    <Container>
      <Typography variant='h4'>{coinData.name}</Typography>
      {/* <Typography variant='h4'>{coinData.symbol}</Typography> */}
      {/* <Typography variant='h4'>{coinData.description.en}</Typography> */}
      {/* <Typography variant='h4'>{coinData.links.homepage}</Typography> */}
    </Container>
  )
}

export default CoinPage;