import { REACT_APP_SERVER_URL } from "../../configs/Configs";
import { HttpMethod } from "../definitions/DataTypes";

export const sendRequestEx = async (
  url: string,
  method: HttpMethod = "GET",
  body: any = null,
  headers: Record<string, string> = {}
) => {
  try {
    const response = await fetch(`${REACT_APP_SERVER_URL}${url}`, {
      method,
      body,
      headers,
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return responseData;
  } catch (err: any) {
    console.log("Error happened at sendRequestEx", JSON.stringify(err));
    throw err;
  }
};
