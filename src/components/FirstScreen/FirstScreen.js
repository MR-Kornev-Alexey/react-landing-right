import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import '../main/Main.css'
import Typography from "../Typography/Typography";
import Button from "@mui/material/Button";
import ImageMain from "../../img/main-baby.png";
import Link from "@mui/material/Link";

export default function FirstScreen() {
    return (
        <Container component="section">
            <Grid container>
                <Grid item xs={12} md={6}
                      sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography gutterBottom sx={{marginTop:2}} className="top-mainSubTitle">
                        <strong> 6 недельный</strong>&nbsp;курс для малышей<br /><strong>от 5 месяцев до 3 лет&nbsp;</strong>и их родителей
                    </Typography>
                    <Typography className="mainTitle">
                        Истерики <br/> в прошлом

                    </Typography>

                    <Typography className="top-mainSubTitle" >
                        или как управлять эмоциями ребенка
                    </Typography>
                    <Link href={'#price'}>
                        <Button variant="contained" className="btn-pay" sx={{marginTop: 4}}>
                            Купить
                        </Button>
                    </Link>

                </Grid>
                <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: {md: 'flex-end', sm: 'center', xs: 'center'}, alignItems: "flex-end", marginTop: {md: 0, sm: 3, xs: 3}}}>
                    <Box
                        component="img"
                        src={ImageMain}
                        alt="Главная картинка"
                        sx={{
                            width: '100%',
                            maxWidth:400
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
