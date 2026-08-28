import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, ScrollView, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Card from '../components/Card';
import {colors, spacing, typography} from '../theme';
import {CLASES, NIVELES} from '../data/clases';
import { Ionicons } from '@expo/vector-icons';

export default function ClasesScreen ({navigation })  {
    //const {columnas, paddingHorizontal} = useResponsive();
    const [nivel, setNivel] = useState('Todos');
    
    return (
        <View>
            <View>
                <Text> Aplicacion de clases de Ingles</Text>
                <View>
                    <Ionicons name="search" size={18} />
                    <TextInput
                        placeholder='Buscar por nivel o profesor'
                        value={nivel}
                        onChangeText={setNivel}
                        autocorrect={false}
                        
                    />
                </View>
            </View>
        </View>

    )
}

