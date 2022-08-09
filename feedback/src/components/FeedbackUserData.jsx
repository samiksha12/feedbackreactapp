import React, { useContext } from "react";
import Card from "./shared/Card";
import { DataContext } from "./context/DataContext";
import { UserContext } from "./context/UserContext";
import { FaTimes,FaPenFancy } from "react-icons/fa";
import default_img from "../data/default_img.jpg";

function FeedbackUserData() {
  const { allData,deleteFeedback,editFeedbackId } = useContext(DataContext);
  const { user } = useContext(UserContext);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {allData?.map((item) => {
        if (item.userId === user?.id) {
          return (
            <Card
              className="form-card container my-5 p-5 rounded"
              key={item.id}
            >
              <div className="d-flex justify-content-end"><button className="edit" onClick={()=>{editFeedbackId(item)}} ><FaPenFancy/></button><button className="close" onClick={()=>{deleteFeedback(item.id)}} ><FaTimes/></button></div>
              <div className="d-flex">
                <div className="align-self-center">
                  <img src={default_img} className="cardImg" />
                </div>
                <div className="p-2 d-flex flex-column">
                  <div>{user?.fullName}</div>
                  <div>{user?.emailId}</div>
                </div>
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
              </div>
              <div>{item.text}</div>
            </Card>
          );
        }
      })}
    </>
  );
}

export default FeedbackUserData;
