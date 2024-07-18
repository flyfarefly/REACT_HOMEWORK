import React from 'react';
import MyTable from './MyTable.jsx';

class MyForm extends React.Component {
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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    };
    this.setState({ formData });
  };

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
  }

  render() {
    const isChecked = true;
    return (
      <>
        <form name="myForm " method="post" onSubmit={this.handleSubmit}>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="col-form-label">
              Email
            </label>
            <input
              value={this.state.formData.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Email"
              autoComplete="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password" className="col-form-label">
              Password
            </label>
            <input
              value={this.state.formData.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              autoComplete="current-password"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="address" className="col-form-label">
              Address
            </label>
            <textarea
              onChange={this.handleChange}
              className="form-control"
              name="address"
              id="address"
              placeholder="1234 Main St"
              defaultValue={''}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="city" className="col-form-label">
              City
            </label>
            <input
              value={this.state.formData.city}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="city"
              id="city"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="country" className="col-form-label">
              Country
            </label>
            <select
              value={this.state.formData.address}
              onChange={this.handleChange}
              id="country"
              name="country"
              className="form-control">
              <option>Choose</option>
              <option value="argentina">Argentina</option>
              <option value="ukraine">Ukraine</option>
              <option value="china">China</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <div className="form-check">
              <label className="form-check-label" htmlFor="rules">
                <input
                  value={isChecked ? 'true' : 'false'}
                  onChange={this.handleChange}
                  id="rules"
                  type="checkbox"
                  name="acceptRules"
                  className="form-check-input"
                  defaultChecked={false}
                />
                Accept Rules
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
        <MyTable formData={this.state.formData} />
      </>
    );
  }
}

export default MyForm;
