import React from 'react';
import { AppBar, Container, Toolbar, Typography, Select, MenuItem, ThemeProvider, createTheme, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import { CiUser } from 'react-icons/ci';
import { CiLock } from 'react-icons/ci';

const Header = () => {
  const navigate = useNavigate();

const { currency, setCurrency } = CryptoState()

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static'>
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              sx={{
                flex: 1,
                color: "gold",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              variant='h6'
            >
              Crypto Trading
            </Typography>
            
            <Select
              variant="outlined"
              sx={{
                width: 100,
                height: 40,
                marginRight: 5,
              }}
              value = {currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"GTQ"}>GTQ</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
            </Select>
            <Button variant="contained" onClick = {() => {
              navigate("/signin")
            }}>Sign In</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;