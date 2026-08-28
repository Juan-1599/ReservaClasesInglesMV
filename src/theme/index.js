import { Plataform } from 'react-native';

export const colors = {
    fondo: '#F6F7FB',
    primary: '#4F46E5',
    texto: '#111827',
    borde: '#E5E7EB',
};

export const spacing = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20
};

export const typography = {
    titulo: {fontsize: 26, fontWeight: '800', color: colors.texto},
    subtitulo: {fontsize: 18, fontWeight: '600', color: colors.texto},
    parrafo: {fontsize: 16, fontWeight: '400', color: colors.texto},
    boton: {fontsize: 18, fontWeight: '500', color: colors.fondo},
};

export default {
    colors,
    spacing,
    typography
};



