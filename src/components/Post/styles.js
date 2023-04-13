/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height + (Platform.OS === 'android' ? StatusBar.currentHeight : -48) - 49,
    },
    video: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#000'
        // maxHeight: 680,
        // backgroundColor: 'yellow'
    },
    uiContainer: {
        // height: '100%',
        // justifyContent: 'flex-end',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0
    },
    bottomContainer: {
        padding: 10,
        flex: 1,
        alignSelf: 'flex-end',
    },
    handle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 10,
    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    songName: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5
    },
    // right Container
    rightContainer: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        height: 330,
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginBottom: 10,
    },
    profilePicture: {
        width: 44,
        height: 44,
        borderRadius: 25,
        resizeMode: 'cover',
        borderWidth: 1.5,
        borderColor: '#fff',
        marginBottom: 15,
    },
    iconContainer: {
        alignItems: 'center'
    },
    statsLabel: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        marginTop: 2,
    },
    songImageContainer: {
        marginTop: 40,
        borderRadius: 25,
        borderWidth: 9,
        borderColor: '#636363',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    songImage: {
        width: 26,
        height: 26,
        borderRadius: 25,
        resizeMode: 'cover',
    }
});

export default styles;