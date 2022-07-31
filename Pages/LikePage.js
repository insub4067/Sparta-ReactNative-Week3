import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert,Share } from 'react-native';
import * as Linking from 'expo-linking';

import data from '../data.json';
import Card from '../Components/Card';

export default function LikePage({navigation,route}) {

    const [tip, setTip] = useState({
        "idx":9,
        "category":"재테크",
        "title":"렌탈 서비스 금액 비교해보기",
        "image": "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money1.png",
        "desc":"요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
        "date":"2020.09.09"
    })

    const [cateState, setCateState] = useState([])

    useEffect(() => {
        //뒤의 1000 숫자는 1초를 뜻함
        //1초 뒤에 실행되는 코드들이 담겨 있는 함수

        setTip(data.tip)
        setCateState(data.tip)

    }, [])

    return ( 
        // ScrollView에서의 flex 숫자는 의미가 없습니다. 정확히 보여지는 화면을 몇등분 하지 않고
        // 화면에 넣은 컨텐츠를 모두 보여주려 스크롤 기능이 존재하기 때문입니다. 
        // 여기선 내부의 컨텐츠들 영역을 결정짓기 위해서 height 값과 margin,padding 값을 적절히 잘 이용해야 합니다. 
        <ScrollView style={styles.container}>
            <View style={styles.cardContainer}>
                {/* 하나의 카드 영역을 나타내는 View */}
                {
                    cateState.map((content, i) => {
                        return (<Card content={content} key={i} navigation={navigation} />)
                    })
                }

            </View>
            
        </ScrollView>
    
    )
}

const styles = StyleSheet.create({
    container: {
        //앱의 배경 색
        backgroundColor: '#fff',
    },
    cardContainer: {
        marginTop: 10,
        marginLeft: 10
    },
})