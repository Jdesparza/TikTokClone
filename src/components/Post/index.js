/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View, Dimensions, StatusBar } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

import Video from 'react-native-video';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const Post = (props) => {

    const videoRef = useRef();

    const [post, setPost] = useState(props.post);
    const [isLiked, setIsLiked] = useState(false);
    const [videoSize, setVideoSize] = useState({ width: '100%', height: '100%' });
    const [paused, setPaused] = useState(true);

    const onPlayPausePress = () => {
        setPaused(!paused);
    };

    const onLikePress = () => {
        const likesToAdd = isLiked ? -1 : 1;
        setPost({
            ...post,
            likes: post.likes + likesToAdd,
        });
        setIsLiked(!isLiked);
    };

    useEffect(() => {
        if (props.changed.length != 0) {
            // console.log('========================================\n=====================================')
            // console.log(props.changed);
            // console.log(props.post);
            setPaused(props.changed[0].key != post.id)
        }
    }, [props.changed]);

    const onVideoLoad = ({ naturalSize }) => {
        const { width, height } = naturalSize;
        // console.log('=============')
        // console.log('width: ', width, 'height: ', height)
        // console.log(Dimensions.get('window').height, 'Resta: ', Dimensions.get('window').height - StatusBar.currentHeight)
        setVideoSize({ width, height });
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Video
                            ref={videoRef}
                            source={post.videoUri}
                            style={styles.video}
                            resizeMode={videoSize.height >= (Dimensions.get('window').height - StatusBar.currentHeight - 20) ? 'cover' : 'contain'}
                            onError={e => console.log(e)}
                            repeat={true}
                            paused={paused}
                            poster={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/873d820c-e1c3-404c-b912-af791cd4b200/ddtq777-68b69158-e5c1-4638-b8ed-ced2811ad2c8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg3M2Q4MjBjLWUxYzMtNDA0Yy1iOTEyLWFmNzkxY2Q0YjIwMFwvZGR0cTc3Ny02OGI2OTE1OC1lNWMxLTQ2MzgtYjhlZC1jZWQyODExYWQyYzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BWFMc20D3yUqO8o8xblGcIC7jpG1c2DxruNq1ZSHjCw'}
                            posterResizeMode={'cover'}
                            onLoad={onVideoLoad}
                        />
                    </View>
                    <View style={styles.uiContainer}>
                        <View style={styles.bottomContainer}>
                            <Text style={styles.handle}>@{post.user.username}</Text>
                            <Text style={styles.description}>{post.description}</Text>
                            <View style={styles.songRow}>
                                <Entypo name='beamed-note' size={20} color={'white'} />
                                <Text style={styles.songName}>{post.song.songname}</Text>
                            </View>
                        </View>
                        <View style={styles.rightContainer}>
                            <Image style={styles.profilePicture} source={{ uri: post.user.userImageUri }} />
                            <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                                <AntDesign name='heart' size={28} color={isLiked ? 'red' : 'rgba(255,255,255, .7)'} />
                                <Text style={styles.statsLabel}>{post.likes}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconContainer}>
                                <FontAwesome name='commenting' size={28} color={'rgba(255,255,255, .7)'} />
                                <Text style={styles.statsLabel}>{post.comments}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconContainer}>
                                <Fontisto name='share-a' size={26} color={'rgba(255,255,255, .7)'} />
                                <Text style={styles.statsLabel}>{post.shares}</Text>
                            </TouchableOpacity>
                            <View style={styles.songImageContainer}>
                                <Image style={styles.songImage} source={{ uri: post.song.songImageUri }} />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default Post;
