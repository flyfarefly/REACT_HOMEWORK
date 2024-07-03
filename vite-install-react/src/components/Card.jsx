import React from 'react';

class Card extends React.Component {

    render() {
        const {title} = this.props;
        const {text} = this.props;

        return <div className="card">
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{text}</p>
            </div>
        </div>
    }
}
Card.defaultProps = {
   title: "Забув передати данні!",
    text: "Наступного разу будь уважніше! "
}
export default Card;