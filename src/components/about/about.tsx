import React from 'react';
import Button from 'antd/es/button';

interface IProps {
    name?: string,
    title: string,
    msg?: string,
    age?: number,
    onMyClick: any
}
interface IState {
    count: number
}

class About extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        // this.state = {
        //     count: 100
        // }
        this.clickHandler = this.clickHandler.bind(this)
        this.clickSendMessage = this.clickSendMessage.bind(this)
    }
    public readonly state: Readonly<IState> = {
        count: 100
    }
    public clickHandler() {
        this.setState({
            count: this.state.count + 1
        })
        console.log("点击")
    }
    public clickSendMessage() {
        this.props.onMyClick('父子')
    }

    render() {
        return (
            <div>
                <p>Edit <code>src/App.tsx</code> and save to reload.</p>
                <p>{this.props.title},{this.props.age}</p>
                <p>{this.state.count}</p>
                <div>
                    <Button type="primary" onClick={this.clickHandler}>按钮</Button>
                    <Button onClick={this.clickSendMessage}>按钮</Button>
                </div>
            </div>
        );
    }
}

export default About;
