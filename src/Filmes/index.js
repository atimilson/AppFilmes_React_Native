import React, {useState} from "react";
import {View , Text, Image, StyleSheet, TouchableOpacity, Modal} from 'react-native';

import Detalhes from '../Detalhes';
export default function Filmes({data}){
    const [visibleModal,setVisibleModal] = useState(false);
    return(
    <View>
        <View style={styles.card}>
            <Text style={styles.titulo}>{data.nome}</Text>
            <Image 
            source={{uri: data.foto}}
            style={styles.capa}
            />
            <View style={styles.areaBotao}>
                <TouchableOpacity style={styles.Botao} onPress={()=>{setVisibleModal(true)}}>
                   <Text style={styles.TextoBotao}>Leia Mais</Text>
                </TouchableOpacity>
            </View>
        </View>
        <Modal transparent={true} animationType='slide' visible={visibleModal}>
           <Detalhes filme={data} voltar={ () => setVisibleModal(false)}/>
        </Modal>
    </View>
    );

}

const styles = StyleSheet.create({
    card:{
      backgroundColor : '#457b9d',
      margin   : 15,
      elevation: 2,
    },
    capa:{
        height: 150,
        zIndex: 2,
    },
    titulo:{
        padding: 15,
        fontSize: 22,
        color: '#FFF',
    },
    areaBotao:{
        alignItems:'flex-end',
        marginTop: -40,
        zIndex : 9,
    },
    Botao :{
        width: 100,
        backgroundColor:'#e63946',
        opacity: 1,        
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius : 5,
    },
    TextoBotao:{
        color: '#fff',
        textAlign: 'center',
    }
})