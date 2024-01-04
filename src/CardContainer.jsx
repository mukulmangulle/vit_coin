import { Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import CardIteam from './CardIteam'
import CoinContext from './context/coin/CoinContext'

const CardContainer = () => {
 
     const {coins}=useContext(CoinContext);

     if(!coins || coins.length === 0){
        return(
            <Typography variant='h2' sx={{display:"flex" ,alignItems:'center' , justifyContent:'center' }}> No Coins Data Yet</Typography>
        )
     }

    return (
        <Grid container spacing={2} sx={{ marginTop: '50px' }}>
          {
            coins.map(coin=> <CardIteam key={coin.id} coin={coin}/>)
          }
        </Grid>
    )
}

export default CardContainer