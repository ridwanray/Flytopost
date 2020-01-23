import {Component as ReactComponent} from 'react';

class Component extends ReactComponent {
    render() {
        const {image, title, name, body,link} = this.props;
        return(

            <div>
                <img src={image} alt=""/>
                <span>{title}</span>
                <p>{name}</p>
                <p>{body}</p>
                <button>{link}</button>
            </div>
        )
    }
}
export default Component;