import React, { useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Button,
    ScrollView,
    contentContainerStyle,
    Linking,
    Modal, 
    Pressable,
    AppRegistry,
    Dimensions
  } from "react-native";
  import { ScaledSheet } from "react-native-size-matters";

 const window = Dimensions.get("window");
 const screen = Dimensions.get("screen");
 
 
 const App = () => {
  const [mode, setMode] = useState("portrait");
  const [Height_Layout, setHeight_Layout] = useState();
  const [Width_Layout, setWidth_Layout] = useState();

   const image = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/hdmonochrome/mainImage.jpg",
  };
  const header = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/hdmonochrome/mainImage.jpg",
  };


  useEffect(() => {
    DetectOrientation();
}, [Height_Layout])

const DetectOrientation = () => {
if(Width_Layout > Height_Layout)
{
    setMode("landscape");
}
else{
  setMode("portrait");
}
}
   
 return (
    
    <SafeAreaView style={mode === "portrait" ? styles.container : styles.container2} onLayout={(event) => {
      setHeight_Layout(event.nativeEvent.layout.height),
      setWidth_Layout(event.nativeEvent.layout.width)}}>
     <LinearGradient
     colors={['#FFFFFF', '#000000']}
     style={styles.container}>

    
    
        <View style={mode === "portrait" ? styles.linkcenter : styles.linkcenter3}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          ><View style={mode === "portrait" ? styles.linkcenter2 : styles.linkcenter4}>
            <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>Home</Text>
            </View>
            <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links3} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>VideoInModal</Text>
            </View>
            <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links4} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>Products</Text>
            </View>
            <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links5} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>Services</Text>
            </View>
            <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links6} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>Design</Text>
            </View>
            <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links7} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>Contact</Text>
            </View>
          </ScrollView>
        </View>
      
    
    <ScrollView style={styles.text}>
    {mode === "portrait" ? <View style={styles.imagecontainer}>
      <ImageBackground source={image} style={styles.image}>
        <View>
          <Text style={styles.toptext}>
          HD Monochrome 
          </Text>
          <Text style={styles.toptextb}>
          An XHTML 1.0 Strict Template by Bryant Smith 
          </Text>
        </View>
      </ImageBackground>
    </View> : null}
      <View style={mode === "portrait" ? styles.innertext : styles.innertext2}>
      
      <Text style={styles.heading2}>High Definition Monochrome</Text>
        <Text style={styles.text2}>
        You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :) This is what a link looks like.
        </Text>
        
        <Text style={styles.text2}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.
        </Text>
        
        <Text style={styles.text2}>
        This is a block quote, use it to include quotes from yourself or others. All you have to do to include this element is wrap some text around blockquote tags
        </Text>
        <Text style={styles.heading2}>Titles are H1 Tags</Text>
        <Text style={styles.text2}>
        Since the titles are H1 tags, try to include your keywords in them as search engines will look at them as being important content.
        </Text>
        
        <Text style={styles.text2}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.


        </Text>
        
        <Text style={styles.text2}>
        Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.
        </Text>
        
        <Text style={styles.text2}>
        You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :)
        </Text>
        <Text style={styles.heading2}>Yet Another One!</Text>
        <Text style={styles.text2}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.


        </Text>
        
        <Text style={styles.text2}>
        Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.
        </Text>
        
      </View>
    </ScrollView>
    </LinearGradient>
  </SafeAreaView>
   );
 }
 const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
      },
      container2: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        backgroundColor:"white",
        
      },
      image: {
        width: "100%",
        marginLeft: "5@s",
        marginRight: "5@s",
        height: "100%",
        resizeMode: "stretch",
        borderWidth: 5,
        
        
      },
      imagecontainer: {
        
        alignItems: "center",
        
        width: "100%",
        marginTop: 20,
        
        height: "10%",
      },
      
      text: {
        flex: 1,
        width: "90%",
        
      },
      innertext: {
        margin: "0@s",
        backgroundColor: "white",
        marginTop:"10%",
        padding:15,
        borderWidth:5,
      },
      innertext2: {
        marginLeft: "150@s",
        marginRight: "20@s",
        backgroundColor: "#2596be",
        marginTop:"5%",
        padding:10,
        
        
      },

      links: {
        color: "black",
        fontWeight: "bold",
        marginRight: "25@s",
        marginLeft: "15@s",
        marginTop:"50@s",
        fontSize: "10@s",
        textDecorationLine: 'underline',

        
        
      },
      links2: {
        color: "blue",
        fontWeight: "bold",
        marginRight: "438@s",
        marginLeft:"0@s",
        marginTop:"0@s",
        fontSize: "12@s",
        textDecorationLine: 'underline',
        
      },
      links3: {
        color: "blue",
        fontWeight: "bold",
        marginRight: "0@s",
        marginLeft:"-471@s",
        marginTop:"40@s",
        fontSize: "12@s",
        textDecorationLine: 'underline',
        
        

      },
      links4: {
        color: "blue",
        fontWeight: "bold",
        marginRight: "0@s",
        marginLeft:"-471@s",
        marginTop:"80@s",
        fontSize: "12@s",
        textDecorationLine: 'underline',
      },
      links5: {
        color: "blue",
        fontWeight: "bold",
        marginRight: "0@s",
        marginLeft:"-471@s",
        marginTop:"120@s",
        fontSize: "12@s",
        textDecorationLine: 'underline',
      },
      links6: {
        color: "blue",
        fontWeight: "bold",
        marginRight: "0@s",
        marginLeft:"-471@s",
        marginTop:"160@s",
        fontSize: "12@s",
        textDecorationLine: 'underline',
      },
      links7: {
        color: "blue",
        fontWeight: "bold",
        marginRight: "0@s",
        marginLeft:"-471@s",
        marginTop:"200@s",
        fontSize: "12@s",
        textDecorationLine: 'underline',
      },
     
      toptext: {
        color: "black",
        fontWeight: "bold",
        marginLeft: "4%",
        marginTop: "0%",
        fontSize: "16@s",
        marginTop:"3%"
      },
      toptextb: {
        color: "#696969",
        fontWeight: "bold",
        marginLeft: "4%",
        marginTop: "0%",
        fontSize: "10@s",
      },
    
      heading2: {
        color: "black",
        fontWeight: "700",
        fontSize: "18@s",
        marginTop: "20@s",
      },
    
      heading: {
        color: "black",
        fontWeight: "bold",
    
        marginBottom: "5@s",
        fontSize: "18@s",
      },
      text2: {
        color: "black",
        fontSize: "15@s",
      },
    
      linkcenter: {
      marginVertical: "4.5@s",
      height: "15%",
      justifyContent: "center",
      },

      linkcenter3: {
        marginVertical: "0@s",
        flex: 0.6,
        justifyContent: "center",
        //marginRight:'0%',
       position:'absolute',
        },
    
      linkcenter2: {
        height: "100%",
        justifyContent: "center",
        marginTop:0,
      },

      linkcenter4: {
        //height: "100%",
        justifyContent: "center",
        
        
      }, 

      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
 });
 export default App;