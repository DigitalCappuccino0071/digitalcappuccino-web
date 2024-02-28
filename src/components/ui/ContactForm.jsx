import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { sendContactForm } from '../../lib/api';

export const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      services: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phoneNumber: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      services: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      message: Yup.string()
        .max(20, 'Must be 150 characters or less')
        .required('Required'),
    }),
    onSubmit: values => {
      sendContactForm(values);
    },
  });
  return (
    <div className="col-10">
      <form onSubmit={formik.handleSubmit}>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column">
            <label className="form-label" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="form-control"
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-danger">{formik.errors.fullName}</div>
            ) : null}
          </div>

          <div className="d-flex flex-column">
            <label className="form-label" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-danger">{formik.errors.phoneNumber}</div>
            ) : null}
          </div>

          <div className="d-flex flex-column">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="d-flex flex-column">
            <label className="form-label" htmlFor="services">
              Services
            </label>
            <select
              className="form-control"
              id="services"
              name="services"
              type="services"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.services}
            >
              <option value="" selected>
                select
              </option>
              <option value="Lead Generation">Lead Generation</option>
              <option value="Influencer Marketing">Influencer Marketing</option>
              <option value="Search Engine Optimization (SEO)">
                Search Engine Optimization (SEO)
              </option>
              <option value="Website Development">Website Development</option>
              <option value="App Development">App Development</option>
              <option value="Others">Others</option>
            </select>
            {formik.touched.services && formik.errors.services ? (
              <div className="text-danger">{formik.errors.services}</div>
            ) : null}
          </div>

          <textarea
            className="form-control"
            id="message"
            name="message"
            type="message"
            placeholder="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-danger">{formik.errors.message}</div>
          ) : null}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
