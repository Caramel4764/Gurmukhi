import { useState } from "react";
import { Text, View, Button, Modal, Switch, StyleSheet, Image } from "react-native";
import React from "react";
import { GlobalStyles } from "../GlobalStyles";
import { TouchableOpacity } from "react-native";

export default function Settings() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [isToggled, setIsToggled] = useState(true);
  const [text, setText] = useState('Turn on/off notifications: ');

  const toggleSwitch = () => {
    if (isToggled) {
      setText('Notifications Off')
    } else {
      setText('Notifications On')
    }
    setIsToggled(previousState => !previousState)
  }

  return (
    <View 
      style={{
        margin: 0,
      }}>
      <Text style={GlobalStyles.header}>
        Settings
      </Text>
      <View style={{padding: 20,}}>
        <View>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <Text style={{color: '#c6bccc'}}>
          Notifications
        </Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible}>
        <View style={{ flex: 1, backgroundColor: "white", padding: 60 }}>
          <Text style={GlobalStyles.text}>
            Switch
          </Text>
          <Switch 
            trackColor={{false: 'gray', true: '#d481d4'}}
            thumbColor={isToggled ? 'white' : 'black'}
            onValueChange={toggleSwitch}
            value={isToggled}
          />
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <Text style={{color: '#c6bccc'}}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>

          <TouchableOpacity onPress={() => setIsModalVisible2(true)}>
            <Text style={{color: '#c6bccc'}}>
              Gurmukhi Tips
            </Text>
          </TouchableOpacity>

          <Modal visible={isModalVisible2}>
            <View style={{ flex: 1, backgroundColor: "white", padding: 60}}>
              <Text style={GlobalStyles.text}>
                Here are some tips to support your learning:{"\n"} 
                1.{"\n"}
                2.{"\n"}
                3.{"\n"}
              </Text>
              <TouchableOpacity onPress={() => setIsModalVisible2(false)}>
                <Text style={{color: '#c6bccc'}}>Back</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <TouchableOpacity onPress={() => setIsModalVisible3(true)}>
              <Text style={{color: "tomato"}}>
                Logout
              </Text>
          </TouchableOpacity>
            
          <Modal visible={isModalVisible3}>
            <View style={{ flex: 1, backgroundColor: "white", padding: 60 }}>
              <Text style={GlobalStyles.text}> 
                Are you sure you want to logout?
              </Text> 
              <Button
                title="Logout"
                color="tomato"
                onPress={() => setIsModalVisible3(false)}
              />
              <Button
                title="Back"
                color="#c6bccc"
                onPress={() => setIsModalVisible3(false)}
              />
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
}