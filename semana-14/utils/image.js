import axios from "axios";
// import FormData from "form-data";

export const getImage = () => {
  const formData = new FormData();
  formData.append("size", "auto");
  formData.append(
    "image_url",
    "https://firebasestorage.googleapis.com/v0/b/pa-masticar.appspot.com/o/mainOffer%2F00904fe5-4ad5-4262-abda-2063dd4024cc.jpeg?alt=media&token=77c0d422-9c62-4e5c-b134-b49d82b1330c"
  );

  axios({
    method: "post",
    url: "https://api.remove.bg/v1.0/removebg",
    data: formData,
    responseType: "arraybuffer",
    headers: {
      "Content-Type": "multipart/form-data",
      "X-Api-Key": "EeA3uSsarhSGHTZ2xXrA1Rab",
    },
    encoding: null,
  })
    .then((response) => {
      if (response.status != 200) {
        return console.error("Error:", response.status, response.statusText);
      }

      const base64Image = Buffer.from(response.data).toString("base64");

      console.log(base64Image);
    })
    .catch((error) => {
      console.log(error);
    });
};
