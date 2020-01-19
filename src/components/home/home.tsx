import React from 'react';

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

class Home extends React.Component<IProps, IState> {

    public readonly state: Readonly<IState> = {
        count: 100
    }

    render() {
        return (
            <div>
                <p>home页面</p>
            </div>
        );
    }
}

export default Home;
