import { Text, TextInput, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import loginStyles from "./LoginScreen.style";
import SubmitButton from "../../shared/components/SubmitButton";

import { useSelector } from "react-redux";
import MessageBox from "../../shared/components/MessageBox";
import axios from "axios";

export default function LoginForm({ login }) {
  const { onAuthenticate, onDismissError } = login();
  const error = useSelector((state) => state.AppReducer.errorMessage);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [inputErrors, setInputErrors] = useState({
    isValidEmail: "",
    isValidPassword: "",
  });

  const validateInputs = () => {
    const errors = {};
    if (email.trim() === "") {
      errors.isValidEmail = "Username or email is required";
    }
    if (password.trim() === "") {
      errors.isValidPassword = "Password is required";
    }
    return errors;
  };
  useEffect(() => {
    if (error) {
      MessageBox("Error", error.message, onDismissError).showAlert();
    }
  }, [error]);

  const submitLogin = () => {
    const errors = validateInputs();

    if (Object.keys(errors).length > 0) {
      setInputErrors(errors);
    } else {
      onAuthenticate(email, password);
    }
    // axios.post('http://10.10.100.114:8888/users/registration', {
    //   email: 'coba',
    //   password: 'lagi'
    // })
    // .then((response) => {
    //   console.log(response.data);
    // }, (error) => {
    //   console.log(error);
    // });

  };

  const isErrorView = (errorValidation) => {
    if (errorValidation) {
      return (
        <Text style={{ color: "red", marginBottom: 7 }}>{errorValidation}</Text>
      );
    }
  };

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.logoSection}>
        <Image
          style={{
            width: "80%",
            height: 150,
          }}
          source={require("../../shared/assets/login_undraw.png")}
        />
      </View>
      <View style={{ flex: 2, paddingHorizontal: 15 }}>
        <View style={loginStyles.form}>
          <View style={loginStyles.headerForm}>
            <Text style={loginStyles.title}>Hello!,</Text>
            <Text style={loginStyles.title}>Well Come Back Enigmanians</Text>
          </View>
          <Text style={loginStyles.label}>Email</Text>
          <TextInput
            onChangeText={(val) => {
              setEmail(val);
              setInputErrors({
                ...inputErrors,
                isValidEmail: "",
              });
            }}
            placeholder="Email"
            style={loginStyles.input}
          />
          {isErrorView(inputErrors.isValidEmail)}
          <Text style={loginStyles.label}>Password</Text>
          <TextInput
            onChangeText={(val) => {
              setPassword(val);
              setInputErrors({
                ...inputErrors,
                isValidPassword: "",
              });
            }}
            style={loginStyles.input}
            secureTextEntry={true}
            placeholder="password"
          />
          {isErrorView(inputErrors.isValidPassword)}
          <View
            style={{
              marginVertical: 6,
            }}
          >
            <SubmitButton
              title={"Login"}
              additionalSyle={{ backgroundColor: "#233d90" }}
              colorText={{ color: "white" }}
              onSubmit={submitLogin}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
