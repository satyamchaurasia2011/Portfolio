import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Project.css";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

function Project({ index, image, title, about, git, link }) {
  let flow = "";
  let space = "";
  flow = index % 2 ? "row-reverse" : "row";
  space = index % 2 ? "center" : "left";
  let rowLeft = index % 2 !== 0 && "5%";
  return (
    <div className="project">
      <div className="main-project" style={{ flexDirection: `${flow}` }}>
        <div className="left-view" style={{ textAlign: `${space}` }}>
          <img data-aos="" src={image} alt />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="right-view"
          style={{ marginLeft: `${rowLeft}` }}
        >
          <div>
            <div></div>
            <span>{index}</span>
          </div>

          <h1>{title}</h1>
          <p>{about}</p>
          <h3>
            <a href={git} target="_blank">
              <GitHubIcon fontSize="large" />
            </a>
          </h3>
          <button>
            <a href={link} target="_blank">
              <h3>
                View Project{" "}
                <span>
                  <ArrowForwardOutlinedIcon
                    style={{ marginTop: "0px", marginLeft: "5px" }}
                  />
                </span>
              </h3>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
