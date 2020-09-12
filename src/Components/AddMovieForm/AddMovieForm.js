import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../Base/Input';
import Button from '../Base/Button';

import './movie-form.scss';

const AddMovieForm = ({ name, year, url, genres, description, duration, id, onSubmit, hideModal }) => {
  const [form, setForm] = useState({
    id,
    name,
    year,
    url,
    genres,
    description,
    duration,
  });

  const handleInputChange = (e) => {
    const { target } = e;
    const { value, name: tName } = target;
    if (tName === 'genres') {
      setForm({
        ...form,
        [tName]: value.split(' '),
      });
    } else {
      setForm({
        ...form,
        [tName]: value,
      });
    }
  };

  const resetForm = () => {
    setForm({
      name: '',
      year: '',
      url: '',
      genres: [],
      description: '',
      duration: '',
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit({ ...form });
    hideModal();
  };

  let genresString = form.genres;
  if (Array.isArray(genres)) {
    genresString = form.genres.join(' ');
  }
  return (
    <form onSubmit={submitHandler} className="movie-form container">
      <div className="row">
        {form.id && (
          <div className="col-xs-12">
            <Input type="text" disabled value={id} labelText="Id" id="id" name="id" placeHolder="Movie Id" />
          </div>
        )}
        <div className="col-xs-12">
          <Input
            type="text"
            value={form.name}
            onChange={handleInputChange}
            labelText="Title"
            id="name"
            name="name"
            placeHolder="Select title"
          />
        </div>
        <div className="col-xs-12">
          <Input
            type="text"
            value={form.year}
            onChange={handleInputChange}
            labelText="Release date"
            id="year"
            name="year"
            placeHolder="Select date (year)"
          />
        </div>
        <div className="col-xs-12">
          <Input
            type="text"
            value={form.url}
            onChange={handleInputChange}
            labelText="Movie url"
            id="url"
            name="url"
            placeHolder="Movie URL here"
          />
        </div>
        <div className="col-xs-12">
          <Input
            type="text"
            value={genresString}
            onChange={handleInputChange}
            labelText="Genres"
            id="genres"
            name="genres"
            placeHolder="Select Genres"
          />
        </div>
        <div className="col-xs-12">
          <Input
            type="text"
            value={form.description}
            onChange={handleInputChange}
            labelText="Description"
            id="description"
            name="description"
            placeHolder="Description here"
          />
        </div>
        <div className="col-xs-12">
          <Input
            type="text"
            value={form.duration}
            onChange={handleInputChange}
            labelText="Duration"
            id="duration"
            name="duration"
            placeHolder="Duration here"
          />
        </div>
        <div className="col-xs-12 margin-top-4">
          <div className="row end-xs">
            <Button
              type="reset"
              onClick={resetForm}
              text="reset"
              variant="secondary"
              classList="margin-left-lg-2 margin-top-lg-0 margin-top-xs-1"
            />
            <Button
              type="submit"
              text="submit"
              variant="primary"
              classList="margin-left-lg-2 margin-top-lg-0 margin-top-xs-1"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

AddMovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  hideModal: PropTypes.func,
  name: PropTypes.string,
  year: PropTypes.string,
  url: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  genres: PropTypes.array,
  description: PropTypes.string,
  duration: PropTypes.string,
  id: PropTypes.string,
};

AddMovieForm.defaultProps = {
  name: '',
  year: '',
  url: '',
  genres: [],
  description: '',
  duration: '',
  id: '',
  hideModal: () => console.warn('hide modal func doesnt exist'),
};

export default AddMovieForm;
