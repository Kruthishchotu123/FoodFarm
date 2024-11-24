// components/Header.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hr from '../atom/Hr';
import Icon from './Icon';
interface HeaderProps {
    title: string;
    subtitle?: string;
    variant?: 'default' | 'bold' | 'light';
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, variant = 'default' }) => {
    const variantStyles: any = getHeaderVariantStyles(variant);

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <View style={{ flexGrow: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <View>
                    <Icon name='home' />
                </View>
                <View>
                    <Text style={[styles.title, variantStyles.title]}>{title}</Text>
                    {subtitle && <Text style={[styles.subtitle, variantStyles.subtitle]}>{subtitle}</Text>}
                </View>
                <View>
                    <Icon name='search' />
                </View>
            </View>
            <Hr />
        </View>
    );
};

const getHeaderVariantStyles = (variant: string) => {
    switch (variant) {
        case 'bold':
            return {
                title: { fontWeight: 'bold' },
                subtitle: { fontWeight: '300' },
            };
        case 'light':
            return {
                title: { fontWeight: 'normal' },
                subtitle: { fontWeight: 'normal', color: '#bbb' },
            };
        case 'default':
        default:
            return {
                title: { fontWeight: '600' },
                subtitle: { fontWeight: '400' },
            };
    }
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    title: {
        fontSize: 24,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
    },
});

export default Header;
