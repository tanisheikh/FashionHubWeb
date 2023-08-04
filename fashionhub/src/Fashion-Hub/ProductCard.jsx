import React from "react";
import "./productcard.css";
import { Link } from "react-router-dom";
import { logoImage } from "./websiteLogo/logo";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
const ProductCard = (props) => {
  const userData = props.userData;
  return (
    <div className="container">
      <div className="card">
        {userData.map((cardData) => {
          return (
            <div className="col">
            <Card>
              <img src={cardData.image} alt="" />
              <div>
                <span>{cardData.title}</span>
                <h6>{cardData.price}</h6>
                <span>{cardData.description}</span>
              </div>
            </Card>
          </div>
          );
        })}
        {/* <Card>
          <div className="row cardRow">
            <div className="col">
              <Card footer={footer}>
                <img src={logoImage} alt="" />
                <div>
                  <span>"title"</span>
                  <h6>"price"</h6>
                  <span>"description"</span>
                </div>
              </Card>
            </div>

            <div className="col">
              <Card footer={footer}>
                <img src={logoImage} alt="" />
              </Card>
            </div>
            <div className="col">
              <Card footer={footer}>
                <img src={logoImage} alt="" />
              </Card>
            </div>
            <div className="col">
              <Card footer={footer}>
                <img src={logoImage} alt="" />
              </Card>
            </div>
          </div>
        </Card> */}
      </div>
    </div>
  );
};

export default ProductCard;
