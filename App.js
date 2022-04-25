import {StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons, Feather, Ionicons,SimpleLineIcons,FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>

        <ScrollView contentContainerStyle={styles.contentContainer}>
  
          <View style={styles.LogoInfo}>
           <Entypo name="graduation-cap" size={130} color="#02abcf" />
            <Text style={styles.name}>Pathfinder</Text>
            <Text style={styles.author}>Limkokwing University</Text>
            <Text style={styles.Moto}>#Be_the_most_successful</Text>
           </View>
        
          <View elevation={15} style={styles.ITFaculty}>
            <View style={styles.Faculty1}>
            <TouchableOpacity style={styles.Down}>
              <AntDesign name="down" size={40} color="#abc0d9" />
            </TouchableOpacity>
            <Text style={styles.FICT}>Faculty of Information and Technology</Text>
            </View>
            <View elevation={10} style={styles.BScSM}>
              <Image style={styles.Picture1}
                source={require("./assets/Picture1.jpg")}
              />
              <Text style={styles.Course1}>BSc(Hons) in Software Engineering with Multimedia </Text>
              <Text style={styles.Discription1}>The course concentrates on the investigation of the dual role of multimedia software engineering to apply software engineering principles to the design of multimedia systems, and to apply multimedia technologies to the practice of software engineering.
              </Text>
            </View>
            <View elevation={10} style={styles.BScIT}>
              <Image style={styles.Picture2}
                source={require("./assets/Picture2.jpg")}
              />
              <Text style={styles.Course1}>BSc(Hons) Information Technology</Text>
              <Text style={styles.Discription2}>This programme is designed to equip and provide students with a thorough grounding in the area of modern business approaches with the use of information technology.</Text>
            </View>
            <View elevation={10} style={styles.BScBT}>
              <Image style={styles.Picture3}
                source={require("./assets/Picture3.jpg")}
              />
              <Text style={styles.Course1}>BSc(Hons) in Business Information Technology</Text>
              <Text style={styles.Discription3}>This programme is designed to provide students with expertise in the development and use of computer systems and quantitative modelling techniques for solving business problems and making managerial decisions.</Text>
            </View>

            <View style={styles.Line}/>

            
          </View>
          <View elevation={10} style={styles.DesignFaculty}>
          <View style={styles.Faculty2}>
            <TouchableOpacity style={styles.Rigth1}>
              <AntDesign name="right" size={30} color="#abc0d9" />
            </TouchableOpacity>
            <Text style={styles.Design}>Faculty of Design {"\n"}Innovation</Text>
            </View>
          </View>
          <View elevation={10} style={styles.CommunicationsFaculty}>
          <View style={styles.Faculty1}>
            <TouchableOpacity style={styles.Right2}>
            <AntDesign name="right" size={30} color="#abc0d9" />
            </TouchableOpacity>
            <Text style={styles.FCMB}>Faculty of Communication {"\n"}Media and Broadcasting</Text>
            </View>
          </View>
          <View elevation={10} style={styles.BusinessFaculty}>
          <View style={styles.Faculty1}>
            <TouchableOpacity style={styles.Right3}>
            <AntDesign name="right" size={30} color="#abc0d9" />
            </TouchableOpacity>
            <Text style={styles.FBMG}>Faculty of Business {"\n"}Management and Globalization</Text>
            </View>
          </View>
          <StatusBar style="auto" />
        </ScrollView>  

        <View elevation={10} style={styles.StatusBar}>

          <TouchableOpacity>
            <View style={styles.BackButton}>
              <Ionicons name="chevron-back-circle-outline" size={33} color="#abc0d9" />
            </View>
          </TouchableOpacity>
            <Text style={styles.Tittle}>View Courses</Text>
          <TouchableOpacity>
            <View style={styles.menu}>
              <SimpleLineIcons name="menu" size={24} color="#abc0d9" />
            </View>
          </TouchableOpacity>

        </View>        

        <View style={styles.LowerContent}>

            <TouchableOpacity>
              <View style={styles.home}>
                <FontAwesome name="home" size={33} color="#abc0d9" />
              </View>
             </TouchableOpacity>
             <TouchableOpacity>
              <View >
               <Feather name="bar-chart" size={24} color="#abc0d9" />
             </View>
             </TouchableOpacity>
            
              <TouchableOpacity>
                <View >
                 <FontAwesome name="search" size={24} color="#abc0d9" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View >
                <MaterialCommunityIcons name="android-messages" size={24} color="#abc0d9" />
              </View>
             </TouchableOpacity>  
              <TouchableOpacity>
                <View style={styles.settingsFinder}>
                 <Entypo name="dots-three-horizontal" size={24} color="#abc0d9" />
                </View>
              </TouchableOpacity>
                         
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position:'relative',
    flex: 1,
    backgroundColor: '#154683',
    alignItems: 'center',
  },
  StatusBar: {
    position: "absolute",
    alignSelf: "flex-start",
    width: "100%",
    height: "5%",
    borderColor: '#E0E0E0',
    backgroundColor: "#295e9f", 
    alignItems: "center",
    justifyContent:"space-between",
    flexDirection: 'row', 
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
},
BackButton:{
  marginLeft:5,
  height:"90%",
  width: '120%',
  alignItems:"center"
},
Tittle:{
  color:"#abc0d9",
  fontSize:20,
  fontFamily:"normal"
},
menu:{
  marginRight:5,
},
LowerContent:{
    alignSelf:"flex-end",
    width: "100%",
    height: "5%",
    backgroundColor:"#154683",
    alignItems: "center",
    justifyContent:"space-between",
    flexDirection: 'row', 
},
home:{
  marginLeft:10,
  height:"90%",
  width: '120%',
  backgroundColor:"#567eaf",
  alignItems:"center",
},
settingsFinder:{
  marginRight:10,
},
contentContainer:{
  marginTop:45,
  width: 400,
  backgroundColor: '#154683',
  flex: 1,
  paddingVertical: 930,
  alignItems:"center",
},
LogoInfo:{
  position:"absolute",
  alignItems:"center",

},
name:{
  color:"#abc0d9",
  fontSize:35,
  fontFamily:"normal",
  fontWeight:"bold",
}, 
author:{
  color:"#02abcf",
  fontSize:20,
  fontFamily:"normal",
  fontWeight:'bold',
},
Moto:{
  color:"#02abcf",
  fontSize:16,
  fontStyle:"italic",
},
ITFaculty:{
  marginTop:250,
  position:'absolute',
  margin:10,
  width: "97%",
  height: 70, 
  backgroundColor: "#295e9f",
  borderWidth:1.5,
  borderColor: '#1ab092',
  flex: 1,
  alignSelf: "center",
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowRadius: 5,
  borderRadius: 6,
},
Line:{
  marginTop:7.5,
  marginLeft:-1.5,
  position:'absolute',
  width: "0.5%",
  height: 1155,
  backgroundColor: "#1ab092",
  flex: 1,
},
FICT:{
  color:"#abc0d9",
  fontSize:22,
  fontFamily:"normal",
  fontWeight:'bold',
  marginLeft:8,
},
Faculty1:{
  flexDirection:"row",
},
Down:{
  marginLeft:5,
  marginTop:10,
  height:50,
  width: 50,
 // backgroundColor:"#567eaf",
  alignItems:"center"
},
BScSM:{
  marginTop: 80,
  position:'absolute',
  margin:10,
  width: "96%",
  height: 357,
  backgroundColor: "#07264b",
  flex: 1,
  borderRadius:10,
  alignItems:"center",
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 3
  },
  shadowRadius: 5,
  shadowOpacity: 1.0,
},
Picture1:{
  height:200,
  width:"100%",
},
Course1:{
  color:"#abc0d9",
  fontSize:18,
  fontFamily:"normal",
  fontWeight:'bold',
},
BScIT:{
  marginTop: 450,
  position:'absolute',
  margin:10,
  width: "96%",
  height: 337,
  backgroundColor: "#07264b",
  flex: 1,
  borderRadius:10,
  alignItems:"center",
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 3
  },
  shadowRadius: 5,
  shadowOpacity: 1.0,
},
Picture2:{
  height:200,
  width:"100%",
},
Course2:{
  color:"#abc0d9",
  fontSize:18,
  fontFamily:"normal",
  fontWeight:'bold',
},
BScBT:{
  marginTop: 802,
  position:'absolute',
  margin:10,
  width: "96%",
  height: 350,
  backgroundColor: "#07264b",
  flex: 1,
  borderRadius:10,
  alignItems:"center",
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 3
  },
  shadowRadius: 5,
  shadowOpacity: 1.0,
},
Picture3:{
  height:200,
  width:"100%",
},
Course3:{
  color:"#abc0d9",
  fontSize:18,
  fontFamily:"normal",
  fontWeight:'bold',
},
DesignFaculty:{
  marginTop:1460,
  position:'absolute',
  margin:10,
  width: "96%",
  height: 85,
  backgroundColor: "#295e9f",
  flex: 1,
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 3
  },
  shadowRadius: 5,
  shadowOpacity: 1.0,
  borderRadius: 10,
},
Design:{
  color:"#abc0d9",
  fontSize:22,
  fontFamily:"normal",
  fontWeight:'bold',
  marginLeft:8,
  alignSelf:"center"
},
Faculty2:{
  flexDirection:"row",
  marginTop:10,
  alignItems:"center",
  marginLeft:10
},
Right1:{
  marginLeft:5,
  marginTop:20 ,
  height:50,
  width: 50,
  alignItems:"center"
},
CommunicationsFaculty:{
  marginTop:1583,
  position:'absolute',
  margin:10,
  width: "96%",
  height: 85,
  backgroundColor: "#295e9f",
  flex: 1,
  alignSelf: "center",
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 3
  },
  shadowRadius: 5,
  shadowOpacity: 1.0,
  borderRadius: 10,
},
FCMB:{
  color:"#abc0d9",
  fontSize:22,
  fontFamily:"normal",
  fontWeight:'bold',
  marginLeft:8,
  marginTop:10
},
Right2:{
  marginLeft:5,
  marginTop:25,
  height:50,
  width: 50,
  alignItems:"center"
},
BusinessFaculty:{
  marginTop:1705,
  position:'absolute',
  margin:10,
  width: "96%",
  height: 85,
  backgroundColor: "#295e9f",
  flex: 1,
  alignSelf: "center",
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowRadius: 5,
  shadowOpacity: 1.0,
  borderRadius: 10,
},
FBMG:{
  color:"#abc0d9",
  fontSize:20,
  fontFamily:"normal",
  fontWeight:'bold',
  marginLeft:8,
  marginTop:10
},
Right3:{
  marginLeft:5,
  marginTop:25,
  height:50,
  width: 50,
  alignItems:"center"
},
Discription1:{
  color:"#abc0d9"
},
Discription2:{
  color:"#abc0d9"
},
Discription3:{
  color:"#abc0d9"
},
});
