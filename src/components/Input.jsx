import React ,{Component} from 'react'
import { Slider } from '@material-ui/core'

class Input extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <form>
                <h3>first Q</h3>                
                <Slider/>
                <h3>second Q</h3>                
                <Slider/>
                <h3>third Q</h3>                
                <Slider/>
                <h3>fourth Q</h3>                
                <Slider/>
                <button/>
             </form>     
        )
    }
 
}

export default Input 



