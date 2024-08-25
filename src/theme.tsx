import { opacity } from "react-native-reanimated/lib/typescript/Colors";

const theme = {
    COLORS:{
        white: "#FFF",
        black: "#000",
        grayBG: "#e5e5e5",
        neutral: (opacity:number) => `rgba(10,10,10, ${opacity})`,
    },
    FONTWEIGHT:{
        medium: '500',
        semibold: '500',
        bold: '500',
    },
    RADIUS:{
        xs:10,
        sm:12,
        md:14,
        lg:16,
        xl:18
    }
}

export default theme;