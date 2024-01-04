import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const CardIteam = ({ coin }) => {
    return (
        <Grid item xs={12} sm={6} lg={4}>


            <Card sx={{ background: "orange", color: 'white' }}>
                <CardContent>
                    <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant='h2'>
                            {coin.symbol}
                        </Typography>

                        <Avatar src={coin.large} />
                    </Box>


                </CardContent>
                <CardActions>
                    <a href={`/coin/${coin.id}`}>
                        <Button size="small">Learn More</Button>
                    </a>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CardIteam