import React from 'react';
import {Provider, connect} from 'react-redux';
import reactLogo from '../public/logo192.png'


export default class Root extends React.Component {
    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {

        let ret = <div></div>;

            ret =
                    <div style={{marginTop: 100}}>
                        <img src={reactLogo} style={{width: 100}}/> <br />
                        This was rendered by App1, which is written in React.
                    </div>


        return ret;
    }
}
