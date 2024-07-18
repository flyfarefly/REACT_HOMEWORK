import React from 'react';
class MyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: '',
        password: '',
        address: '',
        city: '',
        country: '',
        acceptRules: 'false'
      }
    };
  }

  handleChange = (event) => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    };
    this.setState({ formData });
  };

  render() {
    return (
      <div>
        <button
          onChange={this.handleChange}
          type="button"
          className="btn btn-primary">
          Back
        </button>
        <table className="table">
          <tbody>
            <tr>
              <td>acceptRules</td>
              <td>{this.props.acceptRules}</td>
            </tr>
            <tr>
              <td>address</td>
              <td>{this.props.address}</td>
            </tr>
            <tr>
              <td>city</td>
              <td>{this.props.city}</td>
            </tr>
            <tr>
              <td>country</td>
              <td>{this.props.country}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>{this.props.email}</td>
            </tr>
            <tr>
              <td>password</td>
              <td>{this.props.password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyTable;
