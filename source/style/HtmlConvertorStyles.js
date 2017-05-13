import {
	Image,
	StyleSheet,
	Dimensions
} from 'react-native';

import {StyleConfig} from './StyleConfig';

const { height, width } = Dimensions.get('window');

// ===============================================
// html render styles
// ===============================================

export const HtmlConvertorStyles = StyleSheet.create({
	img: {
        width: width - ( StyleConfig.space_3 * 2 ),
        height: 200,
		marginBottom: StyleConfig.htmlRender_spaceHeight,
        resizeMode: Image.resizeMode.stretch
    },
    div:{
        paddingVertical: 0,
        color: StyleConfig.htmlRender_color,
        fontSize: StyleConfig.htmlRender_font,
        lineHeight: StyleConfig.htmlRender_lineHeight,
		textShadowColor: StyleConfig.danger,
		marginBottom: StyleConfig.htmlRender_spaceHeight
    },
    span:{
        paddingVertical: 0,
        color: StyleConfig.htmlRender_color,
        fontSize: StyleConfig.htmlRender_font,
        lineHeight: StyleConfig.htmlRender_lineHeight,
		textShadowColor: StyleConfig.danger,
		marginBottom: StyleConfig.htmlRender_spaceHeight
    },
    p: {
    	paddingVertical: 0,
        color: StyleConfig.htmlRender_color,
        fontSize: StyleConfig.htmlRender_font,
        lineHeight: StyleConfig.htmlRender_lineHeight,
		marginBottom: StyleConfig.htmlRender_spaceHeight
    },
	font:{
		paddingVertical: 0,
        color: StyleConfig.htmlRender_color,
        fontSize: StyleConfig.htmlRender_font,
        lineHeight: StyleConfig.htmlRender_lineHeight,
		marginBottom: StyleConfig.htmlRender_spaceHeight
	},
    label: {
		paddingVertical: 0,
    	fontSize: StyleConfig.htmlRender_font,
        lineHeight: StyleConfig.htmlRender_lineHeight,
        color: StyleConfig.htmlRender_color
    },
	comment:{
		fontSize: StyleConfig.font_sm,
        lineHeight: StyleConfig.line_height_md,
        paddingTop: 0,
		marginBottom: StyleConfig.space_1,
        color: StyleConfig.htmlRender_color
	},
    a: {
        color: StyleConfig.color_primary,
        paddingVertical: 0,
        fontSize: StyleConfig.htmlRender_font,
        lineHeight: StyleConfig.htmlRender_lineHeight,
		marginBottom: StyleConfig.htmlRender_spaceHeight
    },
    h1: {
        fontSize: StyleConfig.htmlRender_font * 1.6,
        fontWeight: "bold",
		marginBottom: StyleConfig.htmlRender_spaceHeight,
        color: StyleConfig.htmlRender_color
    },
    h2: {
        fontSize: StyleConfig.htmlRender_font * 1.5,
        fontWeight: 'bold',
		marginBottom: StyleConfig.htmlRender_spaceHeight,
        color: StyleConfig.htmlRender_color
    },
    h3: {
        fontWeight: 'bold',
		marginBottom: StyleConfig.htmlRender_spaceHeight,
        fontSize: StyleConfig.htmlRender_font * 1.4,
        color: StyleConfig.htmlRender_color
    },
    h4: {
        fontSize: StyleConfig.htmlRender_font * 1.3,
        color: StyleConfig.htmlRender_color,
		marginBottom: StyleConfig.htmlRender_spaceHeight,
        fontWeight: 'bold'
    },
    h5: {
        fontSize: StyleConfig.htmlRender_font * 1.2,
        color: StyleConfig.htmlRender_color,
		marginBottom: StyleConfig.htmlRender_spaceHeight,
        fontWeight: 'bold'
    },
    h6: {
        fontSize: StyleConfig.htmlRender_font * 1.1,
        color: StyleConfig.htmlRender_color,
		marginBottom: StyleConfig.htmlRender_spaceHeight,
        fontWeight: 'bold'
    },
    li: {
        fontSize: StyleConfig.htmlRender_font,
        color: StyleConfig.htmlRender_color,
		marginBottom: StyleConfig.htmlRender_spaceHeight,
    },
    strong: {
        fontWeight: 'bold',
        color: StyleConfig.htmlRender_color,
		marginBottom: StyleConfig.htmlRender_spaceHeight,
        fontSize: StyleConfig.htmlRender_font,
    },
    em: {
		marginBottom: StyleConfig.htmlRender_spaceHeight,
        fontStyle: 'italic'
    },
    codeScrollView:{
        backgroundColor: 'rgba(65, 73, 80, 1)',
        flexDirection: 'row',
        paddingVertical: StyleConfig.space_3,
		marginBottom: StyleConfig.htmlRender_spaceHeight
    },
    codeWrapper: {
        flexDirection: 'column'
    },
    codeRow: {
        flexDirection: 'row',
        height: 25,
        alignItems: 'center'
    },
    codeLine: {
        color: StyleConfig.color_primary
    },
    codeLineWrapper: {
        height: 25,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: StyleConfig.space_3
    }
});