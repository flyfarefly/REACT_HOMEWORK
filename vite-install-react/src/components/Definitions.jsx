import React, {Fragment} from 'react';

class Definitions extends React.Component {


    render() {

        const {data} = this.props;
        return data.map(definitions =>
            <Fragment key={definitions.id}>
                <dt>{definitions.dt}</dt>
                <dd>{definitions.dd}</dd>
            </Fragment>
        );

    }
}

export default Definitions;