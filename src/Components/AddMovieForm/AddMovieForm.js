import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, useFormik } from 'formik';
import * as Yup from 'yup';

import Input from '../Base/Input';
import Button from '../Base/Button';
import Select from '../Base/Select';

import './movie-form.scss';

const ValidateMovieSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Should be more than 2 symbols')
    .max(50, 'Should be less than 50 symbols')
    .required('Required'),
  release_date: Yup.string().required('Required'),
  poster_path: Yup.string().url('Should be url').required('Required'),
  genres: Yup.array().required('Required'),
  overview: Yup.string()
    .min(2, 'Should be more than 2 symbols')
    .max(255, 'Should be less than 255 symbols')
    .required('Required'),
  runtime: Yup.number()
    .integer('Should be integer')
    .max(400, 'Should be less than 400')
    .positive('Please provide positive number')
    .required('Required'),
});

const AddMovieForm = ({ id, title, release_date, poster_path, genres, overview, runtime, onSubmit, hideModal }) => {
  const basicGenres = [
    { value: 'Drama', label: 'Drama' },
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Thriller', label: 'Thriller' },
    { value: 'Horror', label: 'Horror' },
    { value: 'History', label: 'History' },
    { value: 'Western', label: 'Western' },
  ];

  const selectedGenres = [];
  const basicGenresArr = basicGenres.map((v) => v.value);

  function addGenresOptions(arr) {
    arr.forEach((v) => {
      selectedGenres.push({ value: v, label: v });
      if (!basicGenresArr.includes(v)) {
        basicGenres.push({ value: v, label: v });
      }
    });
  }
  if (genres) {
    addGenresOptions(genres);
  }

  const formik = useFormik({
    initialValues: {
      id: id || undefined,
      title: title || '',
      release_date: release_date || '',
      poster_path: poster_path || '',
      genres: selectedGenres || [],
      overview: overview || '',
      runtime: runtime || '',
    },
    validationSchema: ValidateMovieSchema,
    onSubmit: (values) => {
      const dataToSend = { ...values, runtime: +values.runtime };
      dataToSend.genres = dataToSend.genres.map((v) => v.value);
      onSubmit(dataToSend);
      hideModal();
    },
  });

  return (
    <Formik>
      <Form onSubmit={formik.handleSubmit} autoComplete="off" className="movie-form container">
        <div className="row">
          {formik.values.id && (
            <div className="col-xs-12">
              <Field
                type="text"
                disabled
                value={formik.values.id}
                labelText="Id"
                id="id"
                name="id"
                placeholder="Movie Id"
                component={Input}
              />
            </div>
          )}
          <div className="col-xs-12">
            <div className="input-field row">
              <label className="input-field__label col-xs-12" htmlFor="title">
                title
              </label>
              <Field
                type="text"
                name="title"
                className={`input-field__label__input col-xs-12 ${
                  formik.errors.title && formik.touched.title ? 'input-field--invalid' : ''
                } ${!formik.errors.title && formik.touched.title ? 'input-field--valid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                id="title"
                placeholder="Select title"
              />
              {formik.errors.title && formik.touched.title ? (
                <div className="input-field__error col-xs-12">{formik.errors.title}</div>
              ) : null}
            </div>
          </div>
          <div className="col-xs-12">
            <div className="input-field row">
              <label className="input-field__label col-xs-12" htmlFor="release_date">
                Release date
              </label>
              <Field
                type="date"
                name="release_date"
                className={`input-field__label__input col-xs-12 ${
                  formik.errors.release_date && formik.touched.release_date ? 'input-field--invalid' : ''
                } ${!formik.errors.release_date && formik.touched.release_date ? 'input-field--valid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.release_date}
                id="release_date"
                placeholder="Select release date"
              />
              {formik.errors.release_date && formik.touched.release_date ? (
                <div className="input-field__error col-xs-12">{formik.errors.release_date}</div>
              ) : null}
            </div>
          </div>
          <div className="col-xs-12">
            <div className="input-field row">
              <label className="input-field__label col-xs-12" htmlFor="poster_path">
                Poster path
              </label>
              <Field
                type="text"
                onChange={formik.handleChange}
                value={formik.values.poster_path}
                className={`input-field__label__input col-xs-12 ${
                  formik.errors.poster_path && formik.touched.poster_path ? 'input-field--invalid' : ''
                } ${!formik.errors.poster_path && formik.touched.poster_path ? 'input-field--valid' : ''}`}
                id="poster_path"
                name="poster_path"
                onBlur={formik.handleBlur}
                placeholder="Poster URL here"
              />
              {formik.errors.poster_path && formik.touched.poster_path ? (
                <div className="input-field__error col-xs-12">{formik.errors.poster_path}</div>
              ) : null}
            </div>
          </div>
          <div className="col-xs-12">
            <div className="input-field row">
              <div className="col-xs-12 padding-0">
                <label className="input-field__label col-xs-12" htmlFor="genres">
                  Genres
                </label>
                <Field
                  as={Select}
                  options={basicGenres}
                  className={`${formik.errors.genres && formik.touched.genres ? 'select--invalid' : ''} ${
                    !formik.errors.genres && formik.touched.genres ? 'select--valid' : ''
                  }`}
                  name="genres"
                  id="genres"
                  value={formik.values.genres}
                  onChange={(e) => {
                    formik.setFieldValue('genres', e);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched('genres', true, true);
                  }}
                />
                {formik.errors.genres && formik.touched.genres ? (
                  <div className="input-field__error col-xs-12">{formik.errors.genres}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="input-field row">
              <label className="input-field__label col-xs-12" htmlFor="overview">
                Overview
              </label>
              <Field
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.overview}
                className={`input-field__label__input col-xs-12 ${
                  formik.errors.overview && formik.touched.overview ? 'input-field--invalid' : ''
                } ${!formik.errors.overview && formik.touched.overview ? 'input-field--valid' : ''}`}
                id="overview"
                name="overview"
                placeholder="Overview here"
              />
              {formik.errors.overview && formik.touched.overview ? (
                <div className="input-field__error col-xs-12">{formik.errors.overview}</div>
              ) : null}
            </div>
          </div>
          <div className="col-xs-12">
            <div className="input-field row">
              <label className="input-field__label col-xs-12" htmlFor="runtime">
                Runtime
              </label>
              <Field
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.runtime}
                className={`input-field__label__input col-xs-12 ${
                  formik.errors.runtime && formik.touched.runtime ? 'input-field--invalid' : ''
                } ${!formik.errors.runtime && formik.touched.runtime ? 'input-field--valid' : ''}`}
                id="runtime"
                name="runtime"
                placeholder="Runtime here"
              />
              {formik.errors.runtime && formik.touched.runtime ? (
                <div className="input-field__error col-xs-12">{formik.errors.runtime}</div>
              ) : null}
            </div>
          </div>
          <div className="col-xs-12 margin-top-4">
            <div className="row end-xs">
              <Button
                type="reset"
                onClick={formik.resetForm}
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
      </Form>
    </Formik>
  );
};

AddMovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  hideModal: PropTypes.func,
  title: PropTypes.string,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  genres: PropTypes.array,
  overview: PropTypes.string,
  runtime: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  id: PropTypes.number,
};

AddMovieForm.defaultProps = {
  title: '',
  release_date: '',
  poster_path: '',
  genres: [],
  overview: '',
  runtime: '',
  id: undefined,
  hideModal: () => console.warn('hide modal func doesnt exist'),
};

export default AddMovieForm;
