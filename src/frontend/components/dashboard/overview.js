import React from "react";
import Card from "./Instructor/Card";
import { Grid } from "@mui/material";
import c1 from "../../../assets/c-1.jpeg";
import c2 from "../../../assets/c-1.jpeg";
import c3 from "../../../assets/c-1.jpeg";
const Overview = (props) => {
  const data = [
    {
      course_name: "Muhib Arshad",
      instructor_nam: "Muhammad Arshad",
      details:
        "provident fund. • Upon retirement, the member may also keep the balance in the fund (maintain) or may choose to withdraw. the sum as annuities, in order to continue generating returns on the investment. 4) Tax.",
      img: c1,
    },
    {
      course_name: "Maaz Asif",
      instructor_nam: "Muhammad Arshad",
      details:
        "provident fund. • Upon retirement, the member may also keep the balance in the fund (maintain) or may choose to withdraw. the sum as annuities, in order to continue generating returns on the investment. 4) Tax.",
      img: c2,
    },
    {
      course_name: "Ali Abdullah",
      instructor_nam: "Muhammad Arshad",
      details:
        "provident fund. • Upon retirement, the member may also keep the balance in the fund (maintain) or may choose to withdraw. the sum as annuities, in order to continue generating returns on the investment. 4) Tax.",
      img: c3,
    },
  ];
  return (
    <>
      <Grid
        container
        spacing={6}
        sx={{
          ml: { md: 25, sm: 2 },
          mt: 10,
          width: { md: "1300px" },
          height: "1000px",
        }}
      >
        <Grid item md={6} lg={4} sm={12}>
          <Card obj={data[0]} />
        </Grid>
        <Grid item md={6} lg={4} sm={12}>
          <Card obj={data[1]} />
        </Grid>
        <Grid item md={6} lg={4} sm={12}>
          <Card obj={data[2]} />
        </Grid>
      </Grid>
    </>
  );
};

export default Overview;
