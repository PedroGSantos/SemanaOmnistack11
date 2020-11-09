import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import styles from './styles';
import logoImg from '../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import api from '../../services/api';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;

    const message = 'Olá' + incident.name + ', estou entrando em contato pois gostaria de ajudar no caso "' + incident.title + '", com o valor de' + Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value);
    function navigateToIncidents() {
        navigation.goBack();
    }
    function ed() {

    }
    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cadelinha ',
            recipients: [incident.email],
            body: message,
        });
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}></Image>
                <TouchableOpacity onPress={navigateToIncidents}>
                    <Feather name="arrow-left" size={16} color='#E02041'></Feather>
                </TouchableOpacity>
            </View>
            <View style={styles.detalhes}>
                <Text style={[styles.detalhesPropriedade, { marginTop: 0 }]}>CASO:</Text>
                <Text style={styles.detalhesValor}>{incident.title} de {incident.city}/{incident.uf}</Text>
                <Text style={styles.detalhesPropriedade}>ONG:</Text>
                <Text style={styles.detalhesValor}>{incident.name}</Text>
                <Text style={styles.detalhesPropriedade}>DESCRIÇÃO:</Text>
                <Text style={styles.detalhesValor}>{incident.description}</Text>
                <Text style={styles.detalhesPropriedade}>VALOR:</Text>
                <Text style={styles.detalhesValor}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
            </View>
            <View style={styles.contatos}>
                <Text style={styles.textFooter}>Salve o dia!</Text>
                <Text style={styles.textFooter}>Seja o herói desse caso</Text>
                <Text style={styles.detalhesFooter}>Entre em contato:</Text>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.action}><Text style={styles.actionText} onPress={sendWhatsapp}>Whatsapp</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.action}><Text style={styles.actionText} onPress={sendMail}>Email</Text></TouchableOpacity>
                </View>
            </View>

        </View>
    );
}