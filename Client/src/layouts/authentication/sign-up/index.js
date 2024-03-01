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

import { useState, useEffect } from "react";
import { AuthService } from "service/auth/authService.service";
// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";

function SignUp() {
  const [agreement, setAgremment] = useState(true);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date_naissance, setDate_naissance] = useState(null);

  const [loading, setloading] = useState(false);

  const handleSetAgremment = () => setAgremment(!agreement);
  const handleInput = (e) => {
    const name = e.target.name;
    if (name === "nom") {
      const nom = e.target.value;
      setNom(nom);
    } else if (name === "prenom") {
      const prenom = e.target.value;
      setPrenom(prenom);
    } else if (name === "email") {
      const email = e.target.value;
      setEmail(email);
    } else if (name === "password") {
      const password = e.target.value;
      setPassword(password);
    } else if (name === "date_naissance") {
      const date_naissance = e.target.value;
      setDate_naissance(date_naissance);
    }
  };
  const SignUpLogic = async () => {
    const validateErros = validateForm(nom, prenom, email, password, date_naissance);
    if (validateErros) {
      setFormErrors(validateErros);
      return;
    } else {
      const requestData = {
        nom: nom,
        prenom: prenom,
        email: email,
        password: password,
        date_naissance: date_naissance,
      };
      const response = await AuthService.CreateAccount(requestData);
      console.log(response);
    }
  };
  const validateForm = (nom, prenom, email, password, date_naissance) => {
    let isValid = true;
    const errors = {};
    if (!nom) {
      errors.nom = "votre nom est un champ obligatoire";
      setloading(false);
      isValid = false;
    }
    if (!prenom) {
      errors.prenom = "votre prenom est un champ obligatoire";
      setloading(false);

      isValid = false;
    }
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
    if (!date_naissance) {
      errors.date_naissance = "La date de naissance est un champ obligatoire";
      setloading(false);

      isValid = false;
    }
    return isValid ? null : errors;
  };

  const [formErrors, setFormErrors] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    date_naissance: "",
  });

  return (
    <BasicLayout
      title="Welcome!"
      description="Use these awesome forms to login or create new account in your project for free."
      image={curved6}
    >
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Register with
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={2}>
          <Socials />
        </SoftBox>
        <Separator />
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftInput name="nom" onChange={handleInput} placeholder="Nom" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput name="prenom" onChange={handleInput} placeholder="Prenom" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput name="email" onChange={handleInput} type="email" placeholder="email" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput
                name="date_naissance"
                onChange={handleInput}
                type="date"
                placeholder="Date de naissance"
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput
                name="password"
                onChange={handleInput}
                type="password"
                placeholder="Password"
              />
            </SoftBox>
            <SoftBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgremment} />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgremment}
                sx={{ cursor: "poiner", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </SoftTypography>
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </SoftTypography>
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton onClick={() => SignUpLogic()} variant="gradient" color="dark" fullWidth>
                sign up
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
