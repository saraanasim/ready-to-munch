import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./stats-section.scss";
export const StatsSection = () => {
  const statsArray = [
    { value: "80+", desc: "Number of Restaurants" },
    { value: "130K", desc: "Number of User" },
    { value: "18", desc: "Number of Cities" },
    { value: "1M", desc: "Total Downloads" },
    { value: "100K", desc: "Positive Reviews" },
  ];
  return (
    <Container maxWidth="md" className="container_stats">
      <Grid container columns={10} className="gridContainer_stats">
        {statsArray.map((item, idx) => {
          return (
            <Grid
              item
              key={idx}
              xl={2}
              lg={2}
              md={2}
              sm={5}
              xs={12}
              className="gridItem_stats"
            >
              <Box className="cardBox_stats">
                <Typography id="value_stats">{item.value}</Typography>
                <Typography id="desc_stats">{item.desc}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
