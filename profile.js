import React, { Component } from 'react';
import { StyleSheet, ScrollView,View ,Image, Text,} from 'react-native';

const styles = StyleSheet.create({
  container:{
  backgroundColor: 'pink',
  flex:2,
  alignItems:'center',
  justifyContent:'space-between',
  width: '100%'
  },
  heading:{
  color: '#08B273',
  fontSize:20,
  fontWeight:'bold',
  alignSelf: 'left',
  marginLeft: 10
  },
  horizontal:{
  color: '#08B273',
  fontSize:20,
  fontWeight:'800',
  alignSelf: 'left',
  marginLeft: 10
  },
  text1: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight:'bold',
  },
  text2: {
    marginLeft: 10,
  },
  container2: {
  backgroundColor: '#CFF5E7',
  alignItems:'left',
  justifyContent:'space-between',
  height: '100%',
  top: -171

  },
  outer_container:{
  backgroundColor: '#CFF5E7',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  height: '100%',
  position: 'relative'
  },
  image:{
    width:120,
    height:120,
    borderRadius:60,
    borderWidth:5,
    borderColor:'black',
    marginBottom:0,
    marginTop:20,
    marginLeft: 30
  },
  nameText:{
    marginTop: 20,
    marginBottom: 20,
    fontSize:30,
    fontWeight:'bold',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },

 
});
export default class RESUME extends Component {
  render() {
    return (
      <React.Fragment>
      <ScrollView>
      <View style={styles.outer_container}>
      <View style={styles.container2}>
      <Image
              resizeMode="contain"
              style={styles.image}
              source={{ uri: 'https://image.shutterstock.com/image-photo/woman-stand-on-road-tree-260nw-792220357.jpg '
    }}/>
    <Text style={styles.horizontal}>_____________________</Text>
      <hr></hr>
      <Text style={styles.text1}>Email:</Text>
      <Text style={styles.text2}>ritspure@gmail.com</Text>
      <Text style={styles.text1}>Mobile No.:</Text>
      <Text style={styles.text2}>9903266549</Text>
      <Text style={styles.text1}>Address:</Text>
      <Text style={styles.text2}>Chennai, India</Text>
      <hr></hr>
      <Text style={styles.heading}>SKILLS:</Text>
      <Text style={styles.horizontal}>_____________________</Text>
      <hr></hr>
      <Text style={styles.text1}>Public Speaking</Text>
      <Text style={styles.text1}>Negotiation</Text>
      <Text style={styles.text1}>Teamwork</Text>
      <Text style={styles.text1}>Decision Making</Text>
      <Text style={styles.text1}>Emotional Intelligence</Text>
      <Text style={styles.text1}>Sales and Marketing</Text>
      <Text style={styles.text1}>Email Marketing</Text>
      <hr></hr>
      <Text style={styles.heading}>LANGUAGES:</Text>
      <Text style={styles.horizontal}>_____________________</Text>
      <hr></hr>
      <Text style={styles.text1}>English</Text>
      <Text style={styles.text1}>Spanish</Text>
      <Text style={styles.text1}>Hindi</Text>
      <Text style={styles.text1}>Bengali</Text>
      <hr></hr>
      <Text style={styles.heading}>PERSONAL</Text>
      <Text style={styles.heading}>INTERESTS:</Text>
      <Text style={styles.horizontal}>_____________________</Text>
      <hr></hr>
      <Text style={styles.text1}>Reading Novels</Text>
      <Text style={styles.text1}>Writing</Text>
      <Text style={styles.text1}>Painting</Text>
      <Text style={styles.text1}>Travelling</Text>
      <Text style={styles.text1}>Swimming, Skating,</Text>
      <Text style={styles.text1}>Bicycling</Text>
      



      </View>
               <View style={styles.container}>
           
       

    
   <View style={{width: '100%' , height: 180, backgroundColor: 'powderblue', alignItems:'center'}}>
   
    <Text style={styles.nameText}>Ritwika Bhattacharjee</Text>
  
  <Text style={styles.bigBlue}>Student</Text> 
    </View> 
   <View style={{width: '100%' , alignSelf: 'stretch', height: 350, backgroundColor: 'skyblue'}}>
   <Text style={styles.heading}>EDUCATION:</Text>
      <Text style={styles.horizontal}>________________________</Text>
      <hr></hr>
      <Text style={styles.text1}>BTech in Computer Science and Engineering</Text>
      <Text style={styles.text1}>Vellore Institute of Technology, Chennai</Text>
      <Text style={styles.text1}>Expected to Graduate in 2022</Text>
      <hr></hr>
      <Text style={styles.text1}>Higher Secondary CBSE</Text>
      <Text style={styles.text1}>Army Public School, Kolkata</Text>
      <Text style={styles.text1}>2016-2018</Text>
      <hr></hr>
      <Text style={styles.text1}>Senior Secondary ICSE</Text>
      <Text style={styles.text1}>Lycee Public School, Kolkata</Text>
      <Text style={styles.text1}>2013-2016</Text>
      <hr></hr>

   </View> 
   <View style={{width: '100%' , height: 420, backgroundColor: '#27CCC2'}} >
   <Text style={styles.heading}>ACHIEVEMENTS:</Text>
      <Text style={styles.horizontal}>________________________</Text>
      <hr></hr>
        <Text style={styles.text1}>-> TOP 5 WEST BENGAL STATE RANKS IN    CENTRAL BOARD OF SECONDARY EDUCATION(CBSE), 2018</Text>
        <Text style={styles.text2}>honor date: Jun 2018 </Text>

        <Text style={styles.text2}>honored by Shrimati Mamata Banerjee, Chief Minister of West Bengal for securing 5th position in West Bengal in CBSE Examinations, 2018 with a percentage of 97.6% </Text>
      <hr></hr>
      <Text style={styles.text1}>-> Secured 1st Position in zonal Army Rank in Higher Secondary CBSE</Text>
      <hr></hr>
      <Text style={styles.text1}>->Secured 1st rank in BTech first year Computer Science</Text>
      <hr></hr>
   </View>

   <View style={{width: '100%' , height: 350, backgroundColor: '#53ABF2'}} >
    <Text style={styles.heading}>TECHNICAL SKILLS:</Text>
      <Text style={styles.horizontal}>________________________</Text>
      <hr></hr>
       <Text style={styles.text1}>Programming Languages:</Text>
       <hr></hr>
       <Text style={styles.text2}>->Java</Text>
       <Text style={styles.text2}>->Python</Text>
       <Text style={styles.text2}>->C++</Text>
       <Text style={styles.text2}>->C</Text>
       <Text style={styles.text2}>->JavaScript</Text>
       <hr></hr>
       <Text style={styles.text1}>Tools and Technologies:</Text>
       <hr></hr>
       <Text style={styles.text2}>->HTML5</Text>
       <Text style={styles.text2}>->CSS</Text>
       <Text style={styles.text2}>->Visual Studio</Text>
   </View>
    
      

      </View> 
      </View>
 </ScrollView>
 </React.Fragment>
 
    );
  }
}
