import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Vika from '../assets/foto/Vika.jpg'
import Muhaemin from '../assets/foto/Muhaemin.jpg'
import Irfan from '../assets/foto/Irfan.jpg'

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'common.black', color: 'common.white' }}>

      <Container maxWidth="md" sx={{ py: 3 }}>
        <Stack spacing={1}>

          <Box>
            <Grid container spacing={4}>
              <Grid item xs={3} md={3}>
              
                  <Typography variant="caption" component="a" >
                    <h2>Gomovie</h2>
                  </Typography>
                  <Typography variant="caption" component="a" >
                    <p>©2022 Copyright By Kelompok 1</p>
                  </Typography>
        
              </Grid>
              <Grid item xs={3} md={3}>
                
                  <Typography variant="caption" component="a" >
                    <h2>Partner</h2>
                  </Typography>
                  <Typography variant="caption" component="a" >
                    <p>Hacktiv8</p>
                  </Typography>
                  <Typography variant="caption" component="a" >
                    <p>Kampus Merdeka</p>
                  </Typography>
         
              </Grid>
              <Grid item xs={2} md={3}>
  
                  <Typography variant="caption" component="a" >
                    <h2>Build Journey</h2>
                  </Typography>
                  <Typography variant="caption" component="a" >
                    <p>Notion</p>
                  </Typography>
                  <Typography variant="caption" component="a" >
                    <p>Figma</p>
                  </Typography>
                  <Typography variant="caption" component="a" >
                    <p>Github</p>
                  </Typography>
                
              </Grid>
              <Grid item xs={3} md={3}>
                <Typography variant="caption" component="a" >
                  <h2>About Us</h2>
                </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row'}} gap={7}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Box
                        component="img"
                        sx={{
                          borderRadius: '50%',
                          width: 55,
                          height: 55,
                        }}
                        alt="Irfan"
                        src={Irfan}
                      />
                      <Typography variant="caption" component="a" >
                        <center><p>Muhammad Irfan Zidni</p></center>
                      </Typography>
                      <Typography variant="caption" component="a" >
                      <center><p>RCTN-KS05-002</p></center>
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Box
                        component="img"
                        sx={{
                          borderRadius: '50%',
                          width: 55,
                          height: 55,
                        }}
                        alt="Muhaemin"
                        src={Muhaemin}
                      />
                      <Typography variant="caption" component="a" >
                        <center><p>Muhaemin Iskandar</p></center>
                      </Typography>
                      <Typography variant="caption" component="a" >
                      <center><p>RCTN-KS05-001</p></center>
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Box
                        component="img"
                        sx={{
                          borderRadius: '50%',
                          width: 55,
                          height: 55,
                        }}
                        alt="Vika"
                        src={Vika}
                      />
                      <Typography variant="caption" component="a" >
                        <center><p>Vika Alpiana</p></center>
                      </Typography>
                      <Typography variant="caption" component="a" >
                      <center><p>RCTN-KS05-004</p></center>
                      </Typography>
                    </Box>
                  </Box>
              </Grid>

            </Grid>
          </Box>
        </Stack>
      </Container>

    </Box>
  )
}

export default Footer
