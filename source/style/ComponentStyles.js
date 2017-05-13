import {
	Image,
	StyleSheet,
	Dimensions
} from 'react-native';

import {StyleConfig} from './StyleConfig';

const { height, width } = Dimensions.get('window');

// ===============================================
// component styles
// ===============================================

export const ComponentStyles = StyleSheet.create({
	
	// container

	container:{
		flex: 1,
		backgroundColor: StyleConfig.color_white,
		flexDirection:'column'
	},

	message_container:{
		marginVertical: 60
	},

	pending_container: {
		position:'absolute',
		left:0,
		right:0,
		top:0,
		bottom:0,
		margin: 0,
		width: StyleConfig.screen_width,
		height: StyleConfig.screen_height,
		backgroundColor:'rgba(255,255,255, 0.1)',
		justifyContent:'center',
		alignItems: 'center'
	},

	// button

	btn: {
	   paddingVertical: StyleConfig.space_2,
       borderRadius: 2,
	   width: 120
	},

	btn_sm:{
		paddingVertical: StyleConfig.space_1,
		paddingHorizontal: StyleConfig.space_1,
		width: 60
	},

	btn_icon: {
		width: StyleConfig.icon_size * 2 
	},

	btn_block:{
	   width: width - (StyleConfig.space_3 * 2)	
	},

	btn_white: {
		backgroundColor: StyleConfig.color_white
	},

	btn_white_outline: {
		borderWidth: .5,
		borderColor: StyleConfig.color_white
	},

	btn_primary: {
	   backgroundColor: StyleConfig.color_primary
	},

	btn_primary_outline:{
		borderWidth: .5,
		borderColor: StyleConfig.color_primary
	},

	btn_danger: {
		backgroundColor: StyleConfig.color_danger
	},

	btn_danger_outline:{
		borderWidth: .5,
		borderColor: StyleConfig.color_danger
	},

	btn_dark: {
		backgroundColor: StyleConfig.color_dark
	},

	btn_dark_outline: {
		borderWidth: .5,
		borderColor: StyleConfig.color_dark
	},

	btn_warning: {
		backgroundColor: StyleConfig.color_warning
	},

	btn_warning_outline:{
		borderWidth: .5,
		borderColor: StyleConfig.color_warning
	},

	btn_success: {
		backgroundColor: StyleConfig.color_success
	},

	btn_success_outline:{
		borderWidth: .5,
		borderColor: StyleConfig.color_success
	},

	btn_text: {
	   color: StyleConfig.color_white,
       fontSize: StyleConfig.font_sm,
       textAlign: "center"
	},

	// imgage

	avatar: {
		width: StyleConfig.avatarSize_lg,
		height: StyleConfig.avatarSize_lg,
		borderRadius: StyleConfig.avatarSize_lg / 2
	},

	avatar_mini: {
		width: StyleConfig.avatarSize_sm,
		height: StyleConfig.avatarSize_sm,
		borderRadius: StyleConfig.avatarSize_sm / 2
	},

	header_img: {
		width: StyleConfig.screen_width,
		height: StyleConfig.header_height
	},

	header_backdrop: {
		position:'absolute',
		left:0,
		right:0,
		bottom: 0,
		top: 0,
		backgroundColor: 'rgba( 0, 0, 0, 0.3)',
	    height: StyleConfig.header_height
	},

	// position

	pos_absolute: {
		position: 'absolute',
		left: 0,
		right: 0
	},

	// list

	list: {
		padding: StyleConfig.space_3,
		backgroundColor: StyleConfig.color_white,
		borderBottomWidth: StyleConfig.border_width,
		borderBottomColor: StyleConfig.border_color
	},

	// modal

	modal_backdrop:{
		position:'absolute',
		top:0,
		left:0,
		bottom:0,
		right:0,
		backgroundColor: 'rgba(0, 0, 0, 0.8)'
	},

	modal_container:{
		flex:1,
		alignItems:'center',
		flexDirection:'column',
		justifyContent:'center',
		alignSelf:"center",
		width: width - 60,
		overflow:'hidden',
		backgroundColor: 'transparent',
	},
	
	modal_header:{
		backgroundColor: 'transparent'
	},

	modal_header_img: {
		width: width - 60,
		height: 100,
		borderTopLeftRadius: StyleConfig.border_radius,
		borderTopRightRadius: StyleConfig.border_radius,
	},

	modal_body:{
		width: width - 60,
		padding: StyleConfig.space_4,
		backgroundColor: StyleConfig.color_white,
		borderBottomWidth: .5,
		borderBottomColor: StyleConfig.border_color
	},

	modal_footer:{
		padding: StyleConfig.space_4,
		alignItems:'center',
		backgroundColor: StyleConfig.color_white,
		borderBottomLeftRadius: StyleConfig.border_radius,
		borderBottomRightRadius: StyleConfig.border_radius,
	},

	modal_button: {
		width: width - 60 - (StyleConfig.space_4 * 2)
	},

	input_control:{
		paddingVertical: StyleConfig.space_3,
    	borderBottomWidth:.5,
    	borderBottomColor: StyleConfig.color_muted
	},

	input:{
	   fontSize: StyleConfig.font_sm,
       padding: StyleConfig.space_0,
       width: width - 50,
	   height: 30,
	   lineHeight: 26,
       color: StyleConfig.color_dark
	},

	textarea:{
		padding: StyleConfig.space_0,
		fontSize: StyleConfig.font_sm,
		color: StyleConfig.color_dark,
		width: StyleConfig.screen_width - ( StyleConfig.space_3 * 2 ),
		textAlign: "left", 
		textAlignVertical: "top"
	},

	bar_container:{
		position:'absolute',
		bottom:0,
		left:0,
		right:0,
		width: StyleConfig.screen_width,
		height: StyleConfig.bottomBar_height,
		flexDirection:'row',
		alignItems:'center',
		borderTopWidth: .5,
		borderTopColor: StyleConfig.border_color,
		justifyContent:'space-around',
		backgroundColor: 'rgba(255, 255, 255, 0.95)'
	},

	bar_item:{
		flex:1,
		height: StyleConfig.bottomBar_height,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center'
	},

	bar_item_badge:{
		justifyContent:'center',
		alignItems:'center',
		top: 0,
		position:'absolute'
	},

	bar_item_badge_text:{
		color: StyleConfig.color_danger,
		fontSize: StyleConfig.font_sm,
		fontStyle: 'italic',
		fontWeight:'bold'
	},

	panel_bg:{
		backgroundColor: StyleConfig.panel_bg_color
	},

	button_icon:{
		color: StyleConfig.color_white,
		backgroundColor: StyleConfig.color_transparent,
		fontSize: StyleConfig.icon_size
	}
});

// ===============================================
// common styles
// ===============================================

export const CommonStyles = StyleSheet.create({

	// flex grid

	flexColumn:{
		flexDirection: 'column'
	},

	flexRow:{
		flexDirection: 'row'
	},

	flexItemsMiddle:{
		alignItems: 'center'
	},

	flexItemsTop: {
		alignItems: 'flex-start'
	},

	flexItemsBottom:{
		alignItems: 'flex-end'
	},

	flexItemsLeft: {
		justifyContent: 'flex-start'
	},

	flexItemsCenter: {
		justifyContent: 'center'
	},

	flexItemsRight: {
		justifyContent: 'flex-end'
	},

	flexSelfTop: {
		alignSelf: 'flex-start'
	},

	flexSelfMiddle: {
		alignSelf: 'center'
	},

	flexSelfBottom: {
		alignSelf: 'flex-end'
	},

	flexItemsAround: {
		justifyContent: 'space-around'
	},

	flexItemsBetween: {
		justifyContent:'space-between'
	},

	flex_1:{
		flex: 1
	},

	flex_2:{
		flex: 2
	},

	flex_3:{
		flex: 3
	},

	flex_4:{
		flex: 4
	},

	flex_5:{
		flex: 5
	},

	// font size

	font_eg: {
		fontSize: StyleConfig.font_eg
	},
	
	font_lg: {
		fontSize: StyleConfig.font_lg
	},

	font_md: {
		fontSize: StyleConfig.font_md
	},

	font_sm: {
		fontSize: StyleConfig.font_sm
	},
	
	font_xs: {
		fontSize: StyleConfig.font_xs
	},

	font_ms: {
		fontSize: StyleConfig.font_ms
	},

	font_bold: {
		fontWeight: "bold"
	},

	font_italic: {
		fontStyle: "italic"
	},

	line_height_lg:{
		lineHeight: StyleConfig.line_height_lg
	},

	line_height_md: {
		lineHeight: StyleConfig.line_height_md
	},

	line_height_sm: {
		lineHeight: StyleConfig.line_height_sm
	},

	// text

	text_left: {
		textAlign: 'left'
	},

	text_center: {
		textAlign: 'center'
	},

	text_right: {
		textAlign: 'right'
	},

	text_primary: {
		color: StyleConfig.color_primary
	},

	text_danger: {
		color: StyleConfig.color_danger
	},

	text_warning: {
		color: StyleConfig.color_warning
	},

	text_success: {
		color: StyleConfig.color_success
	},

	text_white:{
		color: StyleConfig.color_white
	},

	text_light: {
		color: StyleConfig.color_light
	},

	text_muted:{
		color: StyleConfig.color_muted
	},

	text_gray:{
		color: StyleConfig.color_gray
	},

	text_dark: {
		color: StyleConfig.color_dark
	},

	text_black:{
		color: StyleConfig.color_black
	},

	//background

	background_white:{
		backgroundColor: StyleConfig.color_white
	},

	background_light: {
		backgroundColor: StyleConfig.color_light
	},

	background_dark: {
		backgroundColor: StyleConfig.color_dark
	},

	background_transparent: {
		backgroundColor: StyleConfig.color_transparent
	},

	// border

	border_t: {
		borderTopWidth: StyleConfig.border_width,
		borderTopColor: StyleConfig.border_color
	},

	border_b: {
		borderBottomWidth: StyleConfig.border_width,
		borderBottomColor: StyleConfig.border_color
	},

	border_r: {
		borderRightWidth: StyleConfig.border_width,
		borderRightColor: StyleConfig.border_color
	},

	border_l: {
		borderLeftWidth: StyleConfig.border_width,
		borderLeftColor: StyleConfig.border_color
	},

	// space 

	m_t_4: {
		marginTop: StyleConfig.space_4
	},

	m_t_3:{
		marginTop: StyleConfig.space_3
	},

	m_t_2:{
		marginTop: StyleConfig.space_2
	},

	m_t_1:{
		marginTop: StyleConfig.space_1
	},

	m_t_0:{
		marginTop: StyleConfig.space_0
	},
	
	m_l_4: {
		marginLeft: StyleConfig.space_4
	},

	m_l_3:{
		marginLeft: StyleConfig.space_3
	},

	m_l_2:{
		marginLeft: StyleConfig.space_2
	},

	m_l_1:{
		marginLeft: StyleConfig.space_1
	},

	m_l_0:{
		marginLeft: StyleConfig.space_0
	},

	m_r_4: {
		marginRight: StyleConfig.space_4
	},

	m_r_3:{
		marginRight: StyleConfig.space_3
	},

	m_r_2:{
		marginRight: StyleConfig.space_2
	},

	m_r_1:{
		marginRight: StyleConfig.space_1
	},

	m_r_0:{
		marginRight: StyleConfig.space_0
	},

	m_b_4: {
		marginBottom: StyleConfig.space_4
	},

	m_b_3:{
		marginBottom: StyleConfig.space_3
	},

	m_b_2:{
		marginBottom: StyleConfig.space_2
	},

	m_b_1:{
		marginBottom: StyleConfig.space_1
	},

	m_b_0:{
		marginBottom: StyleConfig.space_0
	},

	m_x_4: {
		marginHorizontal: StyleConfig.space_4
	},

	m_x_3:{
		marginHorizontal: StyleConfig.space_3
	},

	m_x_2:{
		marginHorizontal: StyleConfig.space_2
	},

	m_x_1:{
		marginHorizontal: StyleConfig.space_1
	},

	m_x_0:{
		marginHorizontal: StyleConfig.space_0
	},

	m_y_4: {
		marginVertical: StyleConfig.space_4
	},

	m_y_3:{
		marginVertical: StyleConfig.space_3
	},

	m_y_2:{
		marginVertical: StyleConfig.space_2
	},

	m_y_1:{
		marginVertical: StyleConfig.space_1
	},

	m_y_0:{
		marginVertical: StyleConfig.space_0
	},

	m_a_4: {
		margin: StyleConfig.space_4
	},

	m_a_3:{
		margin: StyleConfig.space_3
	},

	m_a_2:{
		margin: StyleConfig.space_2
	},

	m_a_1:{
		margin: StyleConfig.space_1
	},

	m_a_0:{
		margin: StyleConfig.space_0
	},

	p_t_4: {
		paddingTop: StyleConfig.space_4
	},

	p_t_3:{
		paddingTop: StyleConfig.space_3
	},

	p_t_2:{
		paddingTop: StyleConfig.space_2
	},

	p_t_1:{
		paddingTop: StyleConfig.space_1
	},

	p_t_0:{
		paddingTop: StyleConfig.space_0
	},
	
	p_l_4: {
		paddingLeft: StyleConfig.space_4
	},

	p_l_3:{
		paddingLeft: StyleConfig.space_3
	},

	p_l_2:{
		paddingLeft: StyleConfig.space_2
	},

	p_l_1:{
		paddingLeft: StyleConfig.space_1
	},

	p_l_0:{
		paddingLeft: StyleConfig.space_0
	},

	p_r_4: {
		paddingRight: StyleConfig.space_4
	},

	p_r_3:{
		paddingRight: StyleConfig.space_3
	},

	p_r_2:{
		paddingRight: StyleConfig.space_2
	},

	p_r_1:{
		paddingRight: StyleConfig.space_1
	},

	p_r_0:{
		paddingRight: StyleConfig.space_0
	},

	p_b_4: {
		paddingBottom: StyleConfig.space_4
	},

	p_b_3:{
		paddingBottom: StyleConfig.space_3
	},

	p_b_2:{
		paddingBottom: StyleConfig.space_2
	},

	p_b_1:{
		paddingBottom: StyleConfig.space_1
	},

	p_b_0:{
		paddingBottom: StyleConfig.space_0
	},

	p_x_4: {
		paddingHorizontal: StyleConfig.space_4
	},

	p_x_3:{
		paddingHorizontal: StyleConfig.space_3
	},

	p_x_2:{
		paddingHorizontal: StyleConfig.space_2
	},

	p_x_1:{
		paddingHorizontal: StyleConfig.space_1
	},

	p_x_0:{
		paddingHorizontal: StyleConfig.space_0
	},

	p_y_4: {
		paddingVertical: StyleConfig.space_4
	},

	p_y_3:{
		paddingVertical: StyleConfig.space_3
	},

	p_y_2:{
		paddingVertical: StyleConfig.space_2
	},

	p_y_1:{
		paddingVertical: StyleConfig.space_1
	},

	p_y_0:{
		paddingVertical: StyleConfig.space_0
	},

	p_a_4: {
		padding: StyleConfig.space_4
	},

	p_a_3:{
		padding: StyleConfig.space_3
	},

	p_a_2:{
		padding: StyleConfig.space_2
	},

	p_a_1:{
		padding: StyleConfig.space_1
	},

	p_a_0:{
		padding: StyleConfig.space_0
	}
});