import React from 'react';

class Definitions extends React.Component {
    render() {
        const {data} = this.props;
        console.log(data);
        return (
            <>
                {data.map(definitions => <dl>
                    <dt key={definitions.id}>{definitions.dt}</dt>
                    <dd>{definitions.dd}</dd>
                </dl>)}
            </>
        )
    }
}

export default Definitions;