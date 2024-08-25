import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

export const wp = (percentage: any) => {
    const width = deviceWidth;
    return (percentage * width) / 100;
}

export const hp = (percentage: any) => {
    const height = deviceHeight;
    return (percentage * height) / 100;
}