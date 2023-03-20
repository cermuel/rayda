import axios from "axios";

export const getItems = (setItem) => {
  axios
    .get("https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b")
    .then((response) => {
      setItem(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
