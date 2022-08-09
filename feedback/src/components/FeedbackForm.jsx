import React, { useContext } from "react";
import Textarea from "./shared/Textarea";
import Radio from "./shared/Radio";
import Button from "./shared/Button";
import Card from "./shared/Card";
import { radioOptions } from "../data/radioOptions";
import { DataContext } from "./context/DataContext";
import FeedbackUserData from "./FeedbackUserData";

function FeedbackForm() {
  const [rating, setRating] = React.useState(0);
  const [text, setText] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);
  const [message, setMessage] = React.useState("");
  const {edititem, saveData,editData } = useContext(DataContext);

  const handleRating = (e) => {
    setRating(e.target.value);
  };
  const handleText = (e) => {
    setText(e.target.value);
    if (e.target.value.trim().length < 10) {
      setDisabled(true);
      setMessage(
        "Text length should be greater than 10 character and Don't forget to select ratings!"
      );
    } else {
      setDisabled(false);
      setMessage("");
    }
  };
 React.useEffect(()=>{
  if(edititem){
    setText(edititem.text);
    setRating(edititem.rating);
    setDisabled(false);
  }
 },[edititem])
    
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(edititem){
      edititem.text=text;
      edititem.rating=rating;
     editData(edititem);
    }else{
      saveData({ text, rating });
    }
    setText("");
    setRating(0);
    setDisabled(true);
  };
  return (
    <>
      <Card className="form-card container mt-5 p-5 rounded">
        <div>
          <h2>Write Your Reviews</h2>
        </div>
        <form>
          <div className="form-text">1.Select a Rating from 1-10</div>
          <div className="form-text">2.Write a Review in a box</div>
          <div className="form-text">3.Click on save</div>
          <Radio
            option={radioOptions}
            name="rating"
            labelClass="radio-label"
            value={rating}
            onClick={handleRating}
          />
          <Textarea
            className="col-sm-6 textarea-box"
            rows="4"
            placeholder="Write feedback"
            value={text}
            onChange={handleText}
          />
          <Button
            type="submit"
            className="btn btn-primary mt-2 offset-md-11"
            disabled={disabled}
            onClick={handleSubmit}
          >
            Save
          </Button>
          {message && <div style={{ color: "red" }}>{message}</div>}
        </form>
      </Card>
      <section className="section-main mt-5 p-5">
        <h2>Your Feedbacks</h2>
        <FeedbackUserData />
      </section>
    </>
  );
}

export default FeedbackForm;
