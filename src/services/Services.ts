import axios from "axios";

const API_URL = "http://localhost:2222";

export const createBoard = async (title: string, image: any, privBoard: boolean) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const createBoard = await axios.post(`${API_URL}/api/boards`, { data: { title, private: privBoard } });
    if (createBoard.data) {
      const imgFormData = new FormData();
      imgFormData.append("files", image);
      imgFormData.append("refId", createBoard.data.data.id);
      imgFormData.append("field", "image");
      imgFormData.append("ref", "api::board.board");
      const response = await axios.post(`${API_URL}/api/upload`, imgFormData, config);
      return response.data;
    }

  }
  catch (error) {
    console.log(error);
  }


}

export const getBoards = async () => {
  try {
    const boards = await axios.get(`${API_URL}/api/boards?populate=*`);
    return boards.data;
  }
  catch (error) {
    console.log(error);
  }
};