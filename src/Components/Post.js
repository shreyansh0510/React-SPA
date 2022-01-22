import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Post.css";

function Post() {
  return (
    <>
      <Card sx={{ maxWidth: "100%", margin: "10px" }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: "orange" }}
          >
            POST
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica Lizards are
            a widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except AntarcticaLizards are a
            widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica
          </Typography>

          <div className="postOptions">
            <br />
            <div className="optionContent">
              <span>JavaScript</span>
              <br />
              <Button variant="contained">
                <Link to="/Post/Javascript" className="Link">
                  Javascript
                </Link>
              </Button>
            </div>
            <div className="optionContent">
              <span>React</span>
              <br />
              <Button variant="contained">
                <Link to="/Post/React" className="Link">
                  React
                </Link>
              </Button>
            </div>
            <div className="optionContent">
              <span>Node</span>
              <br />
              <Button variant="contained">
                <Link to="/Post/Node" className="Link">
                  Node
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default Post;
