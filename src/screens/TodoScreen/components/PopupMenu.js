import React from "react";
import {
  Modal,
  Text,
  View,
  TouchableHighlight,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import PATH from "../../../navigation/NavigationPath";
import styles from "./PopupMenu.style";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/login/LoginAction";
import { showLoading } from "../../../store/AppAction";

const PopupMenu = ({ navigation }) => {
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const onLogout = () => {
    setIsModalVisible(false)
    dispatch(showLoading(true));
    setTimeout(() => {
      dispatch(logout(true));
      navigation.replace(PATH.LOGIN);
      dispatch(showLoading(true));
    }, 1000);
  };

  return (
    <View>
      <Pressable
        style={styles.logoutIcon}
        onPress={() => setIsModalVisible(!isModalVisible)}
      >
        <SimpleLineIcons name="logout" size={24} color="white" />
      </Pressable>
      <Modal
        animationType={"fade"}
        transparent
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(!isModalVisible)}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={[styles.cardModal, styles.shadow]}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons name="logout" size={50} color="#233D90" />
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                You'll Logout...,
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 26,
                }}
              >
                Are You sure ?
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: "space-around",
              }}
            >
              <TouchableHighlight
                underlayColor={"#6a89ef"}
                style={styles.btn}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.btnText}>No, Just Kidding</Text>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={"#6a89ef"}
                style={styles.btn}
                onPress={onLogout}
              >
                <Text style={styles.btnText}>Yes, Log Me Out</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PopupMenu;
