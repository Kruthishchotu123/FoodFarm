import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

type HrProps = {
    thickness?: number;       // Thickness of the line (default: 1)
    color?: string;           // Color of the line (default: '#000')
    width?: string | number;  // Width of the line (default: '100%')
    margin?: number;          // Vertical margin around the line (default: 8)
    orientation?: 'horizontal' | 'vertical'; // Orientation of the line (default: 'horizontal')
    style?: StyleProp<ViewStyle>; // Additional custom styles
};

const Hr: React.FC<HrProps> = ({
    thickness = 1,
    color = '#000',
    width = '100%',
    margin = 8,
    orientation = 'horizontal',
    style,
}) => {
    const lineStyle: ViewStyle = {
        backgroundColor: color,
        height: orientation === 'horizontal' ? thickness : '100%',
        width: orientation === 'horizontal' ? width : thickness,
        marginVertical: orientation === 'horizontal' ? margin : 0,
        marginHorizontal: orientation === 'vertical' ? margin : 0,
    };

    return <View style={[styles.line, lineStyle, style]} />;
};

const styles = StyleSheet.create({
    line: {
        alignSelf: 'center',
    },
});

export default Hr;
