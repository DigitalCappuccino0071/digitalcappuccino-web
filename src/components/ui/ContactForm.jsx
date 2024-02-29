import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { sendContactForm } from '../../lib/api';

export const ContactForm = () => {
  const [formStatus, setIsLoading] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
  });
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
        .matches(/^[0-9]{10}$/, 'Mobile number must be a valid 10-digit number')
        .required('Mobile is required'),
      services: Yup.string()
        .max(150, 'Must be 150 characters or less')
        .required('Required'),
      message: Yup.string()
        .max(150, 'Must be 150 characters or less')
        .required('Required'),
    }),
    onSubmit: async values => {
      setIsLoading(prevLoading => ({
        ...prevLoading,
        isLoading: true,
      }));
      try {
        await sendContactForm(values);
        setIsLoading(prevLoading => ({
          ...prevLoading,
          isLoading: false,
          isError: false,
          isSuccess: true,
        }));
        formik.resetForm();
      } catch (error) {
        setIsLoading(prevLoading => ({
          ...prevLoading,
          isLoading: false,
          isSuccess: false,
          isError: true,
        }));
      }
    },
  });
  return (
    <div className="col-8 mx-auto py-5">
      <form
        onSubmit={formik.handleSubmit}
        className="send-mail-form  p-5 shadow-sm my-5 bg-white"
      >
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column">
            <input
              className="form-control form-control-sm"
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Full name..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-danger">{formik.errors.fullName}</div>
            ) : null}
          </div>

          <div className="d-flex flex-column">
            <input
              className="form-control form-control-sm"
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              placeholder="Phone Number..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-danger">{formik.errors.phoneNumber}</div>
            ) : null}
          </div>

          <div className="d-flex flex-column">
            <input
              className="form-control form-control-sm"
              id="email"
              name="email"
              type="email"
              placeholder="Email..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="d-flex flex-column">
            <select
              className="form-control-sm"
              id="services"
              name="services"
              type="services"
              placeholder="services"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.services}
            >
              <option value="" selected>
                services
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
            className="form-control form-control-sm"
            id="message"
            name="message"
            type="message"
            placeholder="Message..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-danger">{formik.errors.message}</div>
          ) : null}
          {formStatus.isError ? (
            <div className="text-danger">
              Something went wrong, please try again
            </div>
          ) : (
            false
          )}
          {formStatus.isSuccess ? (
            <div className="text-success">message send successfully</div>
          ) : (
            false
          )}
          <button
            disabled={formStatus.isLoading}
            type="submit"
            className="tp-btn-lg-yellow-header"
          >
            {formStatus.isLoading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};
