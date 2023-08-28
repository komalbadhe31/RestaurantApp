import React,{useState, useEffect} from "react";
import { Text, View, Image, StyleSheet,TouchableOpacity, Modal,FlatList, Pressable,Dimensions,ScrollView } from "react-native";
import { Searchbar } from 'react-native-paper';
const {height, width} = Dimensions.get('window');
import { Feather } from '@expo/vector-icons';
import AboutPage from "./DetailsPage";
import {data} from './data'



const HomePage = ({navigation}) => {
    const [state,setState] = useState(false);
	const [visible, setVisible] = useState(false);

    const [showMenu, setShowMenu] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [vegOnly, setVegOnly] = useState(false);

    //Search By Name
    const handleSearch = (text) => {
        setSearchQuery(text);
        const newData = data.filter((item) => {
        const itemData = `${item.title.toUpperCase()} ${item.title.toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
        });
        setFilteredData(newData);
    };
      


  // hide show modal
  const displayModal = () => {
    setState(true)
  };
 

	return (
        <ScrollView>
            <View>

            {/*For custom filters*/}
            <Modal
            animationType = {"slide"}
            transparent={true}
            visible={state}>

              <View style ={{flex:1,justifyContent:'center', alignContent:'center', backgroundColor:'rgba(0,0,0,.5)'}}>
                    <View style = {{width:'80%', height:200,backgroundColor:"#fff",alignSelf:'center'}}>

                    <TouchableOpacity
                    style = {styles.menuModel}
                    onPress={()=>{
                    setFilteredData(filteredData.sort((a, b)=> b.price - a.price));
                    setState(false);
                    }}>
                    <Text style={{alignSelf:'center', fontSize:16}}>Price High-low</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style = {styles.menuModel}
                    onPress={()=>{
                    setFilteredData(filteredData.sort((a, b)=> a.price - b.price));
                    setState(false);
                    }}
                    >
                    <Text style={{alignSelf:'center',fontSize:16}}>Price Low-High</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style = {styles.menuModel}
                    onPress={()=>{
                    setFilteredData(filteredData.sort((a, b)=> b.rating - a.rating));
                    setState(false);
                    }}
                    >
                    <Text style={{alignSelf:'center',fontSize:16}}>Ratings High-Low</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style = {styles.menuModel}
                    onPress={()=>{
                    setFilteredData(filteredData.sort((a, b)=> a.rating - b.rating));
                    setState(false);
                    }}
                    >
                    <Text style={{alignSelf:'center',fontSize:16}}>Ratings Low-High</Text>
                    </TouchableOpacity>

                    </View>
                </View>  
            </Modal>

    
    <View style={{flexDirection:'row'}}>
        {/* Search By Name */}
        <View style = {{marginTop:20}}>
            <Searchbar
                style ={{width: width-50,}}
                placeholder="Search for dishes by name"
                onChangeText={(text) => handleSearch(text)}
                value={searchQuery}
            />
        </View>

        {/* Custom Filter Icon */}
        <View style={{flexDirection:'column',marginTop:38,}}>
            <TouchableOpacity
                onPress={() => {
                    displayModal(true);}}>
                <Feather name="filter" size={30} color="black"  />
            </TouchableOpacity>  
        </View>
    </View>

    {/*Specialities Dropdown Menu*/}
    <View style={{flexDirection:'row',alignSelf:'center'}}>
    <View>
      <TouchableOpacity style ={{height:30,width:100,borderRadius:5, backgroundColor:'#742DDD', marginTop:10}}
      onPress={() => setShowMenu(!showMenu)}>
        <Text style = {styles.btntxt}>Specialities</Text>
      </TouchableOpacity>
      {showMenu && (
        <View style={{flexDirection:'column', height:120,width:100, backgroundColor:'#EEEEEE',marginLeft:10}}>
          <TouchableOpacity 
          style = {styles.menuModel1}
          onPress={() => {
            setFilteredData(data);
          setShowMenu(false)}}>
            <Text style={{alignSelf:'center'}}>All </Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style = {styles.menuModel1}
          onPress={() => {
            const tempData = data.filter((item) => item.speciality === 'Indian');
            setFilteredData(tempData);
            setShowMenu(false)}}>
            <Text style={{alignSelf:'center'}}>Indian</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style = {styles.menuModel1}
          onPress={() => {
            const tempData = data.filter((item) => item.speciality === 'Mexican');
            setFilteredData(tempData);
            setShowMenu(false)}}>
            <Text style={{alignSelf:'center'}}>Mexican</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style = {styles.menuModel1}
          onPress={() => {
            const tempData = data.filter((item) => item.speciality === 'Italian');
            setFilteredData(tempData);
            setShowMenu(false)}}>
            <Text style={{alignSelf:'center'}} >Itallian</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  
    {/*Veg filter button*/}
    <View style={{flexDirection:'row' }}>
        <TouchableOpacity
            style = {styles.button1}
            onPress={()=>{
            setVegOnly(true);
            const tempData = data.filter((item) => item.category === 'veg');
            setFilteredData(tempData);
            }}>
            <Text style = {styles.btntxt}>Veg</Text>
            </TouchableOpacity>

        {/*Non-Veg button*/}
        <TouchableOpacity
            style = {{backgroundColor:'red',width:100,height:30,borderRadius:5,marginLeft:20,marginTop:10}}
            onPress={()=>{
            setVegOnly(false);
            const tempData = data.filter((item) => item.category === 'non-veg');
            setFilteredData(tempData);}}>
            <Text style = {styles.btntxt}>Non Veg</Text>
        </TouchableOpacity>
    </View>                
    </View>

     

    {/*Foot item list*/}
     <View>
    <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => 
          
		    <View style={styles.itemContainer}>
			    <View>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.item}>
                        <Image
                        source={{
                            uri: item.uri,
                        }}
                        style={styles.itemPhoto}
                        resizeMode="cover"
                        />
                    </View>

                <View style={{flexDirection:'column',marginLeft:10}} >
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.text1}>Speciality: {item.speciality}</Text>
                        <Text style={[,{marginLeft:40}]}>{item.rating}⭐</Text>
                    </View>

                    <View style={{flexDirection:'column'}} >
                        <Text style={[styles.itemText,{fontWeight:'bold'}]}>{item.title}</Text>
                        <Text style={styles.text1}>{item.category}</Text>
                        <Text style={[styles.text1,{fontWeight:'bold'}]}>{item.price}₹</Text>
                        <TouchableOpacity 
                            style={{height:23,width:90,backgroundColor:'darkmagenta',borderRadius:10,marginTop:5,marginLeft:"45%"}}
                            onPress={() => navigation.navigate('DetailsPage', { food: item })}> 
                            <Text style={{color:'white',alignSelf:'center'}}>More Details </Text>
                        </TouchableOpacity>  
                    </View>
                </View>
            </View>
            </View>
            </View>   
            }/>
    </View>  
    </View>
    </ScrollView>
  

  );
};
  
  const styles = StyleSheet.create({

	  item: {
		margin: 10,
	  },
	  itemPhoto: {
		width: 100,
		height: 100,
	  },
	  itemText: {
		color: 'black',
        fontSize:18
	  },
	  itemContainer: {
		width: '95%',
		marginRight: 10,
		borderRadius:10,
		marginTop:20,
		borderColor:'grey',
		borderWidth:1,
        alignSelf: 'center'
	  },
	  
	  text1: {
		fontSize: 14,
		color: 'grey',
	  },
    menuModel:{
      width:'100%',
      height:50,
      borderWidth:0.5,
      justifyContent:'center',
      paddinLeft:20.
    },
    menuModel1:{
      width:'100%',
      height:30,
      borderWidth:0.5,
      justifyContent:'center',
      paddinLeft:20
    },
    button1:{
      width:100,
      height:30,
      backgroundColor:'green',
      borderRadius:10,
      marginLeft:20,
      marginTop:10
    },
    btntxt:{
      fontSize:16,
      color:'white',
      fontWeight:'bold',
      alignSelf:'center',
      marginTop:3
    }
    
  });
  
  export default HomePage;