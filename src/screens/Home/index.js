/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Animated, Dimensions, Platform, StatusBar } from 'react-native';
import React, { useCallback, useState, useRef } from 'react';
import Post from '../../components/Post';

import repository from '../../../data/repository';

const Home = () => {

    const scrollAnimation = React.useRef(new Animated.Value(0)).current;

    const [changedItem, setChangedItem] = useState([]);

    const onViewableItemsChanged = ({ viewableItems, changed }) => {
        // console.log('viewableItems: ', viewableItems.length)
        // console.log('Changed', changed.length)
        setChangedItem(changed)
    };

    const viewabilityConfig = {
        minimumViewTime: 500,
        itemVisiblePercentThreshold: 100
    };

    const viewabilityConfigCallbackPairs = useRef([
        { viewabilityConfig, onViewableItemsChanged },
    ]);


    return (
        <View>
            <Animated.FlatList
                data={repository}
                renderItem={({ item }) => <Post post={item} changed={changedItem} />}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                pagingEnabled
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollAnimation } } }],
                    { useNativeDriver: true })}
                viewabilityConfigCallbackPairs={
                    viewabilityConfigCallbackPairs.current
                }
                viewabilityConfig={viewabilityConfig}
            // snapToInterval={Dimensions.get('window').height + (Platform.OS === 'android' ? StatusBar.currentHeight : -48)}
            // snapToAlignment={'center'}
            // decelerationRate={'fast'}
            />
        </View>
    );
};

export default Home;