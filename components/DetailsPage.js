import * as React from 'react';
import { Button, View, Alert, Text,StyleSheet,Image } from 'react-native';
const DetailsPage = ({ route, navigation }) => {

    const { food } = route.params;

   return (
    <View style={{marginTop:50}}>

        <View style = {{flexDirection:'row',height:580,width:'90%',backgroundColor:'#E0E0E0',alignSelf:'center',borderRadius:10}}>
        
            <View style={{flexDirection:'column',marginTop:10,marginLeft:20}}>
                <View>
                <Image
                    source={{
                        uri: food.uri,
                    }}
                    style={{ width: 280, height: 180, alignSelf:'center',borderRadius:5 }}
                    resizeMode="cover"
                />  
                </View> 
                <View style={{flexDirection:'column'}}>
                    <Text style={{fontSize:20,fontWeight:'bold',marginTop:10}}>{food.title}</Text>
                    <Text style={{marginTop:5}}>Price: {food.price} ₹</Text>
                    <Text>Ratings: {food.rating} ⭐</Text>
                    <Text>Category: {food.category}</Text>
                    <Text>Speciality: {food.speciality}</Text>
                    <Text style={{marginTop:5, fontWeight:'bold'}}>Description</Text>
                    <Text>     {food.description}</Text>
                    <Text style={{marginTop:7, fontWeight:'bold'}}>Ingredients</Text>
                    <Text>     {food.ingredients}</Text>
                    
                </View>
                </View>
        </View>

   </View>
   );
   
};
export default DetailsPage;

const styles = StyleSheet.create({

displayView:{
    flexDirection:'column',
    height:290,
    width:'80%',
    backgroundcolor:'#E0E0E0',
},
  
});