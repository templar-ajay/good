import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default function BigCards({ cards }) {
  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        gap: 1,
        py: 1,
        p: 0,
        m: 0,
        width: "350",
        overflow: "auto",
        scrollSnapType: "x mandatory",
        "& > *": {
          scrollSnapAlign: "center",
        },
        "::-webkit-scrollbar": { display: "none" },
      }}
    >
      {cards?.map(({ title, imageSrc }) => (
        <Card
          component="li"
          sx={{ minWidth: 260, minHeight: 260, flexGrow: 1 }}
        >
          <CardCover>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.41)",
              }}
            />
            <img
              src={imageSrc}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: "-11",
                objectFit: "cover",
                borderRadius: "12px",
              }}
              loading="lazy"
              alt=""
            />
          </CardCover>
          <CardContent>
            <Typography
              level="h6"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 24 }}
            >
              <h1
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  fontFamily: "Roboto",
                  lineHeight: "18px",
                }}
              >
                {title}
              </h1>
              <h2
                style={{
                  fontSize: "10px",
                  fontWeight: "500",
                  fontFamily: "Roboto",
                  lineHeight: "12px",
                  marginTop: "8px",
                }}
              >
                By Mars by GHC on Jun 22, 2022
              </h2>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
