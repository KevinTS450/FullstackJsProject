import axios from "axios";
import { handlerService } from "./handler/handler.config";

const getAPIRoot = () => {
  return "https://fullstackjsproject.onrender.com";
};

// If window is not defined (server side), return a default value or handle accordingly

const API_ROOT = getAPIRoot();

export const serviceConfig = {
  _doPost,
  API_ROOT,
  _doGet,
  _doPostParameter,
  _doPostParameterWithBody,
  _doPut,
  _doDelete,
};

function handleJWTError(response) {
  if (response && (response === 511 || response === "511" || response.status === 511)) {
    forwardToLoginPage();
  }
}

async function _doPost(uri, data) {
  try {
    const response = await axios.post(uri, data, {
      baseURL: API_ROOT,
      timeout: 15000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    handleJWTError(response);

    return response;
  } catch (error) {
    throw error;
  }
}

async function _doPostParameter(uri) {
  try {
    const response = await axios.post(uri, {
      baseURL: API_ROOT,
      timeout: 15000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    handleJWTError(response);

    return response;
  } catch (error) {
    throw error;
  }
}
async function _doPut(uri, data) {
  try {
    const response = await axios.put(uri, data, {
      baseURL: API_ROOT,
      timeout: 15000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    handleJWTError(response);

    return response;
  } catch (error) {
    throw error;
  }
}
async function _doDelete(uri) {
  try {
    const response = await axios.delete(uri, {
      baseURL: API_ROOT,
      timeout: 15000,
      data: {},
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    handleJWTError(response);

    return response;
  } catch (error) {
    throw error;
  }
}

async function _doPostParameterWithBody(uri, data) {
  try {
    const response = await axios.post(uri, data, {
      baseURL: API_ROOT,
      timeout: 15000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
}
async function _doGet(uri) {
  try {
    const response = await axios.get(uri, {
      baseURL: API_ROOT,
      timeout: 15000,
      data: {},
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${handlerService.getToken()}`,
      },
    });

    handleJWTError(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

function clearLocalStorage() {
  // Clear relevant items from local storage
  localStorage.removeItem("Authorization");
  localStorage.removeItem("containerId");
  localStorage.removeItem("accountId");
}
