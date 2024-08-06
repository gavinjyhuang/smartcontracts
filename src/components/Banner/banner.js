import { Container, Typography } from '@mui/material';


function Banner() {
  return (
    <div
      style={{
        backgroundImage: 'url(./banner2.jpg)',
      }}
    >
      <Container
        sx={{
          height: 400,
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 25,
          justifyContent: 'space-around',
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '40%',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              marginBottom: 2,
              fontFamily: 'Montserrat',
            }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: 'darkgrey',
              textTransform: 'capitalize',
              fontFamily: 'Montserrat',
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <div
          style={{
            height: '50%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
        </div>
      </Container>
    </div>
  );
}

export default Banner;
