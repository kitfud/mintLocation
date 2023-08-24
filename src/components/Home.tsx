import { useEffect,useState } from 'react'
import { Box,Button,Typography} from '@mui/material'
import CryptoImage from '../images/Crypto.png'


const Home = () => {

      
const [latitude,setLatitude] = useState<number>()
const [longitude,setLongitude] = useState<number>()


useEffect(()=>{
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
        });
      }
},[])

const handleMint:Function =()=>{
alert("clicked")
}

  return (
    <div>
        <Box>
            <Typography>Latitude:{latitude}</Typography>
            <Typography>Longitude:{longitude}</Typography>
        </Box>
        <Box component="img"
          sx={{
        width: 350
          }}
        src={CryptoImage}
        />
        <Box>
        <Button 
        onClick={()=>handleMint()}
        variant="contained" 
        color="success">Mint</Button>
        </Box>    
    </div>
  )
}

export default Home