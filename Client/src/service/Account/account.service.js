import { serviceConfig } from "service/config/service.config";
import { handlerService } from "service/config/handler/handler.config";

export const AccountService = {
  GetAccount,
};
async function GetAccount() {
  const uri = "/api/get-user";
  const url = `${serviceConfig.API_ROOT}${uri}`;

  try {
    const response = await serviceConfig._doGet(url);
    return response;
  } catch (error) {
    console.error("Error in GetAccount:", error);
    // You might want to rethrow the error or handle it in some way
    throw error;
  }
}
