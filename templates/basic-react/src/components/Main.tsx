import * as React from 'react';

interface IState
{
    helloString : string;
}

interface IProps
{
    
}

export class Main extends React.Component<IProps, IState, {}>
{
    constructor(props: IProps)
    {
        super(props);

        this.state =
        {
            helloString: "Hello World!"
        }
    }

    public render(): JSX.Element
    {
        const { helloString } = this.state;

        return (
            <>
                 <p>{ helloString }</p>
            </>
        );
    }
}