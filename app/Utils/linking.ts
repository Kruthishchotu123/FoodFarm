import * as Linking from 'expo-linking';

const linking = {
    prefixes: [Linking.createURL('/')],
    config: {
        screens: {
            Home: 'home',
            Profile: 'profile/:id',
        },
    },
};

export default linking;
