import React,{useState, useEffect} from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./App.css";

// const bull = (
//     <Box
//       component="span"
//       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//       •
//     </Box>
//   );

export default function Home(){
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/articles/all")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <div className="home-cards">
            <Grid container spacing={4} justifyContent="space-around">
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ minWidth: 200 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {item.Title}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {/* be{bull}nev{bull}o{bull}lent */}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      {item.Content}
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </div>
  );
};
