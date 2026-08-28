import React from 'react';
import { View, Text,Image, Pressable, StyleSheet } from 'react-native';
import EtiquetaNivel from './EtiquetaNivel';
import { colors, spacing, typography } from '../theme';
import {CLASES} from '../data/clases'

export default function Card({ clase, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <Image source={{ uri: clase.imagen }} style={styles.imagen} />
            <View>
                <EtiquetaNivel nivel={clase.nivel} />
                <Text style={styles.titulo}>{clase.titulo}</Text>
                <Text style={styles.nombreProfesor}>{clase.profesor.nombre}</Text>
                <Text style={styles.descripcion}>{clase.descripcion}</Text>
                <Text style={styles.precio}>${clase.precio}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    titulo: {fontSize: 16, color: colors.texto}
})
