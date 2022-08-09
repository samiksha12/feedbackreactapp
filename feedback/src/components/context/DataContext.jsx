import React, { useContext } from "react";
import { deleteData, getData, postData, putData } from "../../api";
import { DELETE_DATA, GET_DATA, POST_DATA, PUT_DATA } from "../../api/url";
import { UserContext } from "./UserContext";

export const DataContext = React.createContext({
  yourData: null,
  allData: null,
  edititem: null,
  saveData: () => {},
  deleteFeedback: () => {},
  editFeedbackId: () => {},
  editData: () => {},
});

const DataContextProvider = ({ children }) => {
  const [yourData, setYourData] = React.useState(null);
  const [allData, setAllData] = React.useState(null);
  const [edititem, setEdititem] = React.useState(null);
  const { user } = useContext(UserContext);
  const saveData = (savedata) => {
    const id = allData[allData.length - 1].id + 1;
    const { text, rating } = savedata;
    const userId = user?.id;
    const newValue = { id, userId, text, rating };
    allData.push(newValue);
    setAllData([...allData]);
    postData(POST_DATA,newValue).then((data) => {
      alert("You submited Feedback successfully");
    });
  };
  const editData = (editdata) => {
    const { id } = editdata;
    putData(PUT_DATA,id, editdata).then((data) => {
      alert("You edited Feedback successfully");
      setAllData(allData.map((item) => 
        item.id === id ?{ ...item, ...data,editData} :item
      ));
    });
  };
  const deleteFeedback = (deleteId) => {
    if (window.confirm("Do you want to delete this feedback?")) {
      const result = allData.filter((item, index) => {
        if (item.id !== deleteId) return item;
      });
      setAllData([...result]);
      deleteData(DELETE_DATA, deleteId).then((data) => {
        alert("You have successfully deleted the feedback");
      });
    }
  };
  const editFeedbackId = (editItem) => {
    setEdititem(editItem);
  };
  
  React.useEffect(() => {
    getData(GET_DATA).then((data) => {
      setAllData(data);
      const result = data.filter((item) => {
        if (item.userId === user?.id) {
          return item;
        }
      });
      setYourData([...result]);
    });
  }, [user]);

  return (
    <DataContext.Provider
      value={{
        yourData,
        saveData,
        allData,
        edititem,
        deleteFeedback,
        editFeedbackId,
        editData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
