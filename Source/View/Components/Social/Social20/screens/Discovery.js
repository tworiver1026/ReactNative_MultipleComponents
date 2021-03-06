import React, { Component } from 'react';
import { View,Text,Image, StatusBar,StyleSheet,Platform,ImageBackground,Dimensions,TouchableOpacity, ListView,AsyncStorage, I18nManager} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body,Header,Title} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Actions } from 'react-native-router-flux';
import GlobalInclude from "../../../../../Global/GlobalInclude/globalinclude.js";

// BEGIN TO SETUP FONT-TYPE AND FONT-SIZE
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (Dimensions.get("window").width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const font_type = {
    FontLight: 'Helvetica',
    FontBold : 'Helvetica-Bold'
};
// END TO SETUP FONT-TYPE AND FONT-SIZE


export default class Discovery extends Component {

  constructor(props) {
 		super(props);
    //BEGIN TO SETUP DATA
 		this.state = {
      data: [
        {
          id: 1,
          name: 'Lorem Ipsum',
          cardBgImage: GlobalInclude.Image1,
          profileImage: GlobalInclude.Image2,
          WatchCount: 50,
          isLiked: true,
        },
        {
          id: 2,
          name: 'Lorem Ipsum',
          cardBgImage:GlobalInclude.Image3,
          profileImage: GlobalInclude.Image4,
          WatchCount: 10,
          isLiked: false,
        },
        {
          id: 3,
          name: 'Lorem Ipsum',
          cardBgImage:GlobalInclude.Image5,
          profileImage: GlobalInclude.Image6,
          WatchCount: 90,
          isLiked: false,
        },
        {
          id: 4,
          name: 'Lorem Ipsum',
          cardBgImage:GlobalInclude.Image7,
          profileImage: GlobalInclude.Image8,
          WatchCount: 80,
          isLiked: false,
        },
        {
          id: 5,
          name: 'Lorem Ipsum',
          cardBgImage: GlobalInclude.Image9,
          profileImage: GlobalInclude.Image10,
          WatchCount: 58,
          isLiked: false,
        },
        {
          id: 6,
          name: 'Lorem Ipsum',
          cardBgImage: GlobalInclude.Image1,
          profileImage:GlobalInclude.Image2,
          WatchCount: 68,
          isLiked: false,
        }
      ]
    };
    //END TO SETUP DATA
 	}

  //BEGIN TO SETUP ONLEARNMORE
  onLearnMore = (user) => {
    Actions.tab_3_2();
  };
  //END TO SETUP ONLEARNMORE

  render(){

    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return(
      <Container style={styles.main}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header androidStatusBarColor={"#fa6b7b"} style={styles.header}>
          {/* BEGIN TO SETUP LEFT VIEW */}
            <Left style={styles.left}>
              <TouchableOpacity onPress={Actions.pop}>
              {
                (I18nManager.isRTL)
                ?
                    <FontAwesome name="angle-right" size={30} color="white"/>
                :
                    <FontAwesome name="angle-left" size={30} color="white"/>
              }
              </TouchableOpacity>
            </Left>
          {/* END TO SETUP LEFT VIEW */}

          {/* BEGIN TO SETUP BODY VIEW */}
            <Body style={styles.body}>
              <Title style={{color: 'white'}}>Discovery</Title>
            </Body>
          {/* END TO SETUP BODY VIEW */}

          {/* BEGIN TO SETUP RIGHT VIEW */}
            <Right style={styles.right}>
              <TouchableOpacity onPress={()=>this.onLearnMore()}>
                <Text style={styles.filter_txt}>Filter</Text>
              </TouchableOpacity>
            </Right>
          {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}
        <Content style={styles.list_bg}>
        <View style={styles.list_content}>
        {
            this.state.data.map((item, index) => {
             return (
               <View style={styles.row_main} key={index}>
               {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
                 <ImageBackground source={item.cardBgImage} style={styles.img_container}>
                 {/* BEGIN TO SETUP LINEARGRADIENT VIEW */}
                   <LinearGradient locations={[0.7,1]} colors={['transparent','black']} style={styles.shadow_bg}>
                   <View style={styles.bottom_view}>
                   {/* BEGIN TO SETUP PROFILEIMAGE VIEW */}
                     <Image source={item.profileImage} style={styles.profile_image}/>
                   {/* END TO SETUP PROFILEIMAGE VIEW */}

                   {/* BEGIN TO SETUP NAME AND COUNT VIEW */}
                     <View style={styles.name_watch_bg}>
                       <Text style={styles.name_txt}>{item.name}</Text>
                       <View style={{flexDirection: 'row'}}>
                         <Image source={require('./icon_watch.png')} style={styles.watch_icon}/>
                         <Text style={styles.watch_distance_txt}>{item.WatchCount}</Text>
                       </View>
                     </View>
                   {/* END TO SETUP NAME AND COUNT VIEW */}

                   {/* BEGIN TO SETUP WISHLIST VIEW */}
                     <Right>
                     {
                       (item.isLiked == true) ?
                        <TouchableOpacity style={styles.like_icon_bg} onPress = {() => this._fnChangeItem(item.id)}>
                          <FontAwesome name="heart" size={20} color="#da3c47"/>
                        </TouchableOpacity> :
                        <TouchableOpacity onPress = {() => this._fnChangeItem(item.id)}>
                          <SimpleLineIcons name="heart" size={20} color="white"/>
                        </TouchableOpacity>
                     }
                     </Right>
                    {/* END TO SETUP WISHLIST VIEW */}
                   </View>
                   </LinearGradient>
                  {/* END TO SETUP LINEARGRADIENT VIEW */}
                 </ImageBackground>
               {/* END TO SETUP IMAGEBACKGROUND VIEW */}
               </View>
             )
           })
        }
        </View>
        </Content>
      </Container>

    );
  }

 //BEGIN TO SETUP FNCHANGEITEM
_fnChangeItem(listId){
    const newArray = this.state.data;
    for(var i = 0 ; i< this.state.data.length; i++){
      if(this.state.data[i].id == listId){
        const newArray1 = [];
      for(var i = 0 ; i< this.state.data.length; i++){
          if(this.state.data[i].id == listId){
            newArray1.push({
              id: this.state.data[i].id,
              name: this.state.data[i].name,
              cardBgImage: this.state.data[i].cardBgImage,
              profileImage: this.state.data[i].profileImage,
              WatchCount: this.state.data[i].WatchCount,
              isLiked: !this.state.data[i].isLiked,
              },
            );
          } else {
            newArray1.push({
              id: this.state.data[i].id,
              name: this.state.data[i].name,
              cardBgImage: this.state.data[i].cardBgImage,
              profileImage: this.state.data[i].profileImage,
              WatchCount: this.state.data[i].WatchCount,
              isLiked: this.state.data[i].isLiked,
              },
            );
          }
        }
        this.setState({ data: newArray1 });
      }
    }
 }
}
//END TO SETUP FNCHANGEITEM

//BEGIN TO SETUP STYLE
const styles = StyleSheet.create({
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: "#fa6b7b",
  	height: (Dimensions.get("window").height * 0.1),
  	width: Dimensions.get("window").width,
  	flexDirection: 'row',
    borderBottomColor: "#fa6b7b",
    paddingTop: (Dimensions.get("window").width * 0.05),
  },
  left: {
    flex:1
  },
  body: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  right: {
    flex: 1
  },
  filter_txt: {
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight,
    color: 'white',
  },
  list_content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:'flex-start',
    alignContent:'flex-start',
  },
  row_main:{
      backgroundColor:'rgba(0,0,0,0.5)',
      width: (Dimensions.get("window").width * 0.50),
      height:(Dimensions.get("window").height * 0.28),
      alignItems:'center',
      alignItems:'flex-start',
      alignContent:'flex-start',
  },
  img_container: {
    width: (Dimensions.get("window").width * 0.50),
    height:(Dimensions.get("window").height * 0.28)
  },
  shadow_bg: {
    width: (Dimensions.get("window").width * 0.50),
    height:(Dimensions.get("window").height * 0.28),
    bottom: 0,
    position:'absolute',
  },
  profile_image: {
    width: (Dimensions.get("window").width) * 0.08,
    height: (Dimensions.get("window").width) * 0.08,
    borderRadius: (Dimensions.get("window").width) * 0.04,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 1
  },
  like_icon_bg: {
    width: Dimensions.get("window").width * 0.062,
    height: Dimensions.get("window").width * 0.062,
    alignItems: 'center',
    justifyContent: 'center'
  },
  name_txt: {
    fontSize: moderateScale(10),
    color: 'white',
    fontFamily: font_type.FontLight,
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: -1
  },
  watch_icon: {
    width: Dimensions.get("window").width * 0.028,
    height: Dimensions.get("window").width * 0.028,
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: Dimensions.get("window").width * 0.006,
  },
  watch_distance_txt: {
    fontSize: moderateScale(12),
    color: 'white',
    fontFamily: font_type.FontLight,
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft: Dimensions.get("window").width * 0.01,
  },
  bottom_view: {
    flexDirection: 'row',
    marginLeft: (Dimensions.get("window").width * 0.03),
    marginRight: (Dimensions.get("window").width * 0.03),
    bottom: (Dimensions.get("window").width * 0.03),
    position:'absolute'
  },
  name_watch_bg:{
    flexDirection: 'column',
    marginLeft: (Dimensions.get("window").width * 0.03),
    marginTop: (Dimensions.get("window").width * 0.01)
  },
  list_bg: {
    width: Dimensions.get("window").width
  },
});
//END TO SETUP STYLE
