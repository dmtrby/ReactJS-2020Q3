/* eslint-disable react/no-unused-state */
import React from 'react';

import './movie-form.scss';
import Input from '../Base/Input';
import Button from '../Base/Button';

class AddMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: null, // for future setting
    };
  }

  render() {
    return (
      <form className="movie-form container">
        <div className="row">
          <div className="col-xs-12">
            <Input type="text" labelText="Title" id="title" name="title" placeHolder="Select title" />
          </div>
          <div className="col-xs-12">
            <Input type="text" labelText="Release date" id="release-date" name="release-date" placeHolder="Select date" />
          </div>
          <div className="col-xs-12">
            <Input type="text" labelText="Movie url" id="movie-url" name="movie-url" placeHolder="Movie URL here" />
          </div>
          <div className="col-xs-12">
            <Input type="text" labelText="Genre" id="genre" name="genre" placeHolder="Select Genre" />
          </div>
          <div className="col-xs-12">
            <Input type="text" labelText="Overview" id="overview" name="overview" placeHolder="Overview here" />
          </div>
          <div className="col-xs-12">
            <Input type="text" labelText="Runtime" id="runtime" name="runtime" placeHolder="Runtime here" />
          </div>
          <div className="col-xs-12 margin-top-4">
            <div className="row end-xs">
              <Button type="button" text="reset" variant="secondary" classList="margin-left-lg-2 margin-top-lg-0 margin-top-xs-1" />
              <Button type="submit" text="search" variant="primary" classList="margin-left-lg-2 margin-top-lg-0 margin-top-xs-1" />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default AddMovieForm;
