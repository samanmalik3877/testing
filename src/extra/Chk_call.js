import React,{Component,Input} from 'react';
import { View } from 'react-native';
import {CheckBox } from 'react-native-elements';


export const Chk_call = (props) => {
    return (
      <View >
      <CheckBox 
                key={this.props.id}
                onPress={this.props.handleCheckChieldElement}
                checked={this.props.isChecked} 
                value={this.props.value}
                ></CheckBox>
       </View>
    )
}

export default Chk_call
// export default class Chk_box extends Component{
//        constructor(props){
//            super(props);
//        }
//     render(){
//         return(
//             <View>
//                 <CheckBox 
//                 key={this.props.id}
//                 onPress={this.props.handleCheckChieldElement}
//                 checked={props.isChecked} 
//                 value={props.value}
//                 ></CheckBox>
//             </View>
//         );
//     }
// }