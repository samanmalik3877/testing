import React ,{Component ,View} from 'react';
import Checkbox from './Chk_call'


export default class Chk_box extends Component{
        constructor(props){
            super(props)
            this.state={
                fruites: [
                    {id: 1, value: "banana", isChecked: false},
                    {id: 2, value: "apple", isChecked: false},
                    {id: 3, value: "mango", isChecked: false},
                    {id: 4, value: "grap", isChecked: false}
                  ]
            }
        }
        handleAllChecked = (event) => {
            let fruites = this.state.fruites
            fruites.forEach(fruite => fruite.isChecked = event.target.checked) 
            this.setState({fruites: fruites})
          }
        
          handleCheckChieldElement = (event) => {
            let fruites = this.state.fruites
            fruites.forEach(fruite => {
               if (fruite.value === event.target.value)
                  fruite.isChecked =  event.target.checked
            })
            this.setState({fruites: fruites})
          }
        render(){
            return(
                <View >
               <Checkbox
                // key={this.props.id}
                // onPress={this.props.handleCheckChieldElement}
                // checked={this.props.isChecked} 
                // value={this.props.value}
                ></Checkbox>
                <View
                >
                try {
               
                   this.state.fruites.map((fruite)=>{
                         return(<Checkbox handleCheckChieldElement={this.handleCheckChieldElement} {...fruite}></Checkbox>)

                   }) 
                    
                    }
                    
                catch (error) {
                    
                }

                </View>
                                </View>
            );
        }
}