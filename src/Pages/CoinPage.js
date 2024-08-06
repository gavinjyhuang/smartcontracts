import { LinearProgress, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import CoinInfo from '../components/Banner/CoinInfo';
import { SingleCoin } from '../config/api';
import { numberWithCommas } from '../components/CoinsTable';
import { CryptoState } from '../CryptoContext';

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!coin) return <LinearProgress sx={{ backgroundColor: 'gold' }} />;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '@media (min-width: 960px)': {
          flexDirection: 'row',
        },
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 25,
          borderRight: '2px solid grey',
          '@media (min-width: 960px)': {
            width: '30%',
          },
        }}
      >
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', marginBottom: 2, fontFamily: 'Montserrat' }}
        >
          {coin?.name}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            width: '100%',
            fontFamily: 'Montserrat',
            padding: '25px 25px 15px 25px',
            textAlign: 'justify',
          }}
        >
          {ReactHtmlParser(coin?.description.en.split('. ')[0])}.
        </Typography>
        <div
          style={{
            alignSelf: 'start',
            padding: 25,
            paddingTop: 10,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            '@media (min-width: 600px)': {
              flexDirection: 'column',
              alignItems: 'center',
            },
            '@media (min-width: 0px)': {
              alignItems: 'start',
            },
          }}
        >
          <span style={{ display: 'flex' }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', fontFamily: 'Montserrat' }}
            >
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              sx={{ fontFamily: 'Montserrat' }}
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: 'flex' }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', fontFamily: 'Montserrat' }}
            >
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              sx={{ fontFamily: 'Montserrat' }}
            >
              {symbol}{' '}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: 'flex' }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', fontFamily: 'Montserrat' }}
            >
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              sx={{ fontFamily: 'Montserrat' }}
            >
              {symbol}{' '}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </div>
      </div>
      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
