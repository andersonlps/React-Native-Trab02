import { Image, View } from 'react-native'
import { styles } from '../../../styles'

export const Logo = () => {
    return (
        <View style={styles.logo}>
            <Image source={require('../../assets/logoTwitter.png')} style={{ width: 180, height: 180 }} />
        </View>
    )
}