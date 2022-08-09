import React, { useContext } from "react";
import Card from "./shared/Card";
import { DataContext } from "./context/DataContext";
import { UserContext } from "./context/UserContext";
import default_img from "../data/default_img.jpg";

function FeedbackData() {
  const { allData } = useContext(DataContext);
  const { allUser } = useContext(UserContext);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="section-main  mt-5 p-5">
      {allData?.map((item) => (
        <Card className="form-card container my-5 p-5 rounded" key={item.id}>
          <div className="d-flex">
            <div className="align-self-center">
              <img src={default_img} className="cardImg" />
            </div>
            <>
              {allUser.map((data) => {
                if (data.id === item.userId) {
                  return (
                    <div className="p-2 d-flex flex-column" key={data.id}>
                      <div>{data.fullName}</div>
                      <div>{data.emailId}</div>
                    </div>
                  );
                }
              })}
              <div className="d-flex flex-row justify-content-end flex-grow-1">
                {items.map((element) => {
                  let nameClass = "";
                  if (element <= item.rating) {
                    nameClass = "checked-label";
                  } else {
                    nameClass = "";
                  }
                  return (
                    <div className="align-self-center" key={element}>
                      <div className={"label-width " + nameClass}>
                        {element}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          </div>
          <div>{item.text}</div>
        </Card>
      ))}
    </div>
  );
}

export default FeedbackData;
