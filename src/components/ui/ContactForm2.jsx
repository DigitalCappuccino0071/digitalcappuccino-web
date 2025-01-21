import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { sendContactForm } from '../../lib/api';

export const ContactForm2 = () => {
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
    <form onSubmit={formik.handleSubmit} className="contact-form-2">
      <div className="form-group">
        <input
          type="text"
          placeholder="Company name"
          className="form-control"
          id="fullName"
          name="fullName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <div className="error-message">{formik.errors.fullName}</div>
        ) : null}
      </div>

      <div className="form-group">
        <input
          type="email"
          placeholder="Enter your mail"
          className="form-control"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error-message">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Phone Number"
          id="phoneNumber"
          name="phoneNumber"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div className="error-message">{formik.errors.phoneNumber}</div>
        ) : null}
      </div>

      <div className="form-group">
        <select
          className="form-control"
          id="services"
          name="services"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.services}
        >
          <option value="" disabled selected>
            Select Service
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
          <div className="error-message">{formik.errors.services}</div>
        ) : null}
      </div>

      <div className="form-group">
        <textarea
          placeholder="Enter your message"
          className="form-control"
          id="message"
          name="message"
          rows="5"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="error-message">{formik.errors.message}</div>
        ) : null}
      </div>

      {formStatus.isError && (
        <div className="error-message">
          Something went wrong, please try again
        </div>
      )}
      {formStatus.isSuccess && (
        <div className="success-message">Message sent successfully</div>
      )}

      <button
        type="submit"
        className="send-message-btn"
        disabled={formStatus.isLoading}
      >
        {formStatus.isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm2;
