import React from 'react';

class Definitions extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <dl>
                {data.map(definitions => <>
                    <dt key={definitions.id}>{definitions.dt}</dt>
                    <dd>{definitions.dd}</dd>
                </>)}
            </dl>
        )
    }
}

export default Definitions;