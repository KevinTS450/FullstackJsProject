import { serviceConfig } from "service/config/service.config";
export const AuthService = {
  CreateAccount,
  Login,
};

async function CreateAccount(formData) {
  try {
    const uri = "/api/inscription";
    const url = `${serviceConfig.API_ROOT}${uri}`;
    const response = await serviceConfig._doPost(url, formData);
    return response;
  } catch (error) {
    console.error(error);
  }
}
async function Login(formData) {
  try {
    const uri = "/api/login";
    const url = `${serviceConfig.API_ROOT}${uri}`;
    const response = await serviceConfig._doPost(url, formData);
    return response;
  } catch (error) {
    console.error(error);
  }
}
