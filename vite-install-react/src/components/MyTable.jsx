import React, { Component } from 'react';

class MyTable extends Component {
  render() {
    const { formData } = this.props;
    return (
      <div>
        <table className="table">
          <tbody>
            <tr>
              <td>Accept Rules</td>
              <td>{formData.acceptRules}</td>
            </tr>
            <tr>
              <td>address</td>
              <td>{formData.address}</td>
            </tr>
            <tr>
              <td>city</td>
              <td>{formData.city}</td>
            </tr>
            <tr>
              <td>country</td>
              <td>{formData.country}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>{formData.email}</td>
            </tr>
            <tr>
              <td>password</td>
              <td>{formData.password}</td>
            </tr>
          </tbody>
        </table>
        <button
          onChange={this.handleChange}
          type="button"
          className="btn btn-primary">
          Back
        </button>
      </div>
    );
  }
}

export default MyTable;
