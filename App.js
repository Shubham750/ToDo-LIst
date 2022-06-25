import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './Components/Task';

export default function App() {
  const[task,settask]=useState();
  const[taskItem,settaskItem]=useState([]);

  const handleAddTask=()=>{
    Keyboard.dismiss();
  settaskItem([...taskItem,task]);
  settask(null);
  }

  const completeTask=(index)=>{
    let itemcopy=[...taskItem];
    itemcopy.splice(index,1);
    settaskItem(itemcopy);
  }
  return (
    <View style={styles.container}>
      <View style={styles.Taskwrapper}>
        <Text style={styles.titles}>Today Task's</Text>
        <View style={styles.items}>
       {
         taskItem.map((item,index)=>{
           return(
             <TouchableOpacity onPress={()=>completeTask(index)}>
<Task key={index} texts={item}/>
             </TouchableOpacity>
             
             
             
             )
            
            })
       }




       






        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS="android"?"padding":"height"}
      style={styles.writetask}>
        <TextInput style={styles.input} placeholder={'Write A Task'} onChangeText={texts=>settask(texts)} value={task}/>
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addwrap}>
            <Text style={styles.addtext}>+</Text>

          </View>
        </TouchableOpacity>
        
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  Taskwrapper:{
    paddingTop:80,
    paddingHorizontal:50,
  },
  titles:{
    fontWeight:'bold',
    fontSize:30,
  },
  items:{
    marginTop:40,
  },
  input:{
    backgroundColor:'white',
    paddingVertical:15,
    paddingHorizontal:15,
    width:255,
    borderRadius:30,
    borderColor:'#c0c0c0',
    borderWidth:1,
    
  
  },
  writetask:{
    position:'absolute',
    width:'100%',
    bottom:20,
    justifyContent:'space-around',
    flexDirection:'row',

    
  },
  addwrap:{
    height:60,
    width:60,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#c0c0c0',
    borderWidth:1,
    borderRadius:40,
  },
  addtext:{
    fontSize:20,

  }
});
