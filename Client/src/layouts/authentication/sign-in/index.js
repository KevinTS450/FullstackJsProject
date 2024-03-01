/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";
import { useState, useEffect } from "react";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import { AuthService } from "service/auth/authService.service";
import { handlerService } from "service/config/handler/handler.config";
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleInput = (e) => {
    const name = e.target.name;
    if (name === "email") {
      const email = e.target.value;
      setEmail(email);
    } else if (name === "password") {
      const password = e.target.value;
      setPassword(password);
    }
  };

  const loginLogic = async () => {
    const validateErros = validateForm(email, password);
    if (validateErros) {
      setFormErrors(validateErros);
    } else {
      try {
        const requestData = {
          email: email,
          password: password,
        };
        const response = await AuthService.Login(requestData);
        if (response.status === 200) {
          handlerService.handlerLoginSuccess(response.data.accessToken, response.data.expiresIn);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const validateForm = (email, password) => {
    let isValid = true;
    const errors = {};
    if (!email) {
      errors.email = "L'email est un champ obligatoire";
      setloading(false);
      isValid = false;
    }
    if (!password) {
      errors.password = "Le mot de passe est un champ obligatoire";
      setloading(false);

      isValid = false;
    }
    return isValid ? null : errors;
  };

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput name="email" onChange={handleInput} type="email" placeholder="Email" />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput
            name="password"
            onChange={handleInput}
            type="password"
            placeholder="Password"
          />
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton onClick={() => loginLogic()} variant="gradient" color="info" fullWidth>
            sign in
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
