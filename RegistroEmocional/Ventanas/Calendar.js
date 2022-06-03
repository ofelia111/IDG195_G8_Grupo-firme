import * as React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../src/imgs/persona-01.png")} />
      <Image style={styles.img} source={require("../src/imgs/bella.png")} />
      <Text style={styles.titleText}>Bienvenida Bella</Text>
      <Text style={styles.text}>¿Cómo te sientes hoy?</Text>
      <Text style={styles.titleText2}>Calendario</Text>


      <Calendar

  theme={{
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: '#ff7583',
    textSectionTitleDisabledColor: '#ff7583',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#2d4150',
    textDisabledColor: '#ff7583',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: '#ff7583',
    disabledArrowColor: '#ff7583',
    monthTextColor: '#ff7583',
    indicatorColor: '#ff7583',
    textDayFontFamily: 'monospace',
    textMonthFontFamily: 'monospace',
    textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  }}
  // Initially visible month. Default = now
  current={'2022-06-20'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2022-06-01'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2023-07-30'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={day => {
    console.log('selected day', day);
  }} 
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={day => {
      console.log('selected day', day);
  }}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={' MMM yyyy'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={month => {
      console.log('month changed', month);
  }}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={subtractMonth => subtractMonth()}
  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}                
  disableAllTouchEventsForDisabledDays={true}
  //Fechas que queremos marcar por default
  markedDates={{
      '2022-06-04': { selected: true, marked: true, selectedColor: '#90e4cd' },
      '2022-06-03': { marked: true },
      '2022-06-02': { marked: true, dotColor: 'red', activeOpacity: 0 },
      '2022-06-05': { disabled: true, disableTouchEvent: true }
  }}

  
/>

    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "##FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#84BCDD",
    marginBottom: 8,
    justifyContent: 'left',
  },

  titleText2: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#EB959B",
    marginBottom: 60,
  },

  alumnos: {
    fontSize: 40,
    fontFamily: "Arial",
    color: "green",
    fontStyle: "italic",
  },

  text: {
    fontSize: 13,
    fontWeight: "bold",
    padding: 1,
    color: "#707070",
    marginBottom: 5,
  },

  img: {
    flex: 0.4,
    aspectRatio: 1,
    resizeMode: "contain",
    marginBottom: 20,
  },

  icon: {
    flex: 0.7,
    aspectRatio: 2,
    resizeMode: "contain",
  },

  boton: {
    height: 42,
    width: "19%",
    flexDirection: "row",
    borderRadius: 20,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: "#87BCDD",
    justifyContent: "center",
    marginTop: 30,
  },

  boton2: {
    height: 42,
    width: "19%",
    flexDirection: "row",
    borderRadius: 20,
    elevation: 4,
    border: "2px solid white",
    justifyContent: "center",
    marginTop: 30,
  },

  boton3: {
    height: 42,
    width: 42,
    flexDirection: "row",
    borderRadius: 20,
    elevation: 4,
    backgroundColor: "#87BCDD",
    justifyContent: "center",
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    marginTop: 30,
  },

  botonText: {
    marginTop: 5,
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },

});