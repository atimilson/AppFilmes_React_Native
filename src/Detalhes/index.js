import React from "react";
import {View , Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Detalhes(props){
    return(
       <View style={Styles.container}>
           <View style={Styles.modalContainer}>
                <TouchableOpacity style={Styles.btnVoltar} onPress={props.voltar}>
                    <Text style={{color: 'white', fontSize: 16}}>Voltar</Text>
                </TouchableOpacity>

                <Text style={Styles.titulo}>{props.filme.nome}</Text> 
                <Text style={Styles.sinopse}>Sinopse</Text>
                <Text style={Styles.descricao}>{props.filme.sinopse}</Text>
           </View>            
       </View> 
    );
}

const Styles = StyleSheet.create({
     container :{
     marginLeft: 10,
     marginRight : 10,
     flex: 1,
     alignItems: 'center',
     justifyContent: 'flex-end',
   },
   modalContainer :{
      width: '90%',
      height : '80%',
      backgroundColor: '#212529',
      borderTopRightRadius: 5,
      borderTopLeftRadius : 5,
   },
   btnVoltar:{
      backgroundColor:'#e63946',
      padding: 10,
      borderTopRightRadius: 5,
      borderTopLeftRadius : 5,
   },
   titulo:{
       textAlign: 'center',
       color :'#FFF',
       padding : 10,
       fontSize : 20,
       fontWeight : 'bold',
   },
   sinopse:{
     color : '#FFF',
     fontSize : 18, 
     marginBottom: 5,
     marginLeft: 10,
   },
   descricao:{
     color : '#FFF',
     marginLeft : 10,
     marginRight: 10,
   }
});
