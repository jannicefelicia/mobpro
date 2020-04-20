import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {

    const name = "Jannice";
    const greeting = <Text style={styles.container}>Nice to meet you, {name}!</Text>;

    return (
        <View>
            {greeting}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        fontSize: 26,
        color: 'green'
    }
})

export default Header;
