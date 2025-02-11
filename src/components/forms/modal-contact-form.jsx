import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { sendContactForm } from '../../lib/api';

const ModalContactForm = ({ onSuccess }) => {
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
        if (onSuccess) {
          onSuccess();
        }
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
    <form className="dc-modal-form" onSubmit={formik.handleSubmit}>
      <div className="dc-modal-form-group">
        <input
          className="dc-modal-form-input"
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Full name..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <div className="dc-modal-error">{formik.errors.fullName}</div>
        )}
      </div>

      <div className="dc-modal-form-group">
        <input
          className="dc-modal-form-input"
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          placeholder="Phone Number..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
          <div className="dc-modal-error">{formik.errors.phoneNumber}</div>
        )}
      </div>

      <div className="dc-modal-form-group">
        <input
          className="dc-modal-form-input"
          id="email"
          name="email"
          type="email"
          placeholder="Email..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="dc-modal-error">{formik.errors.email}</div>
        )}
      </div>

      <div className="dc-modal-form-group">
        <select
          className="dc-modal-form-input"
          id="services"
          name="services"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.services}
        >
          <option value="" disabled>
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
        {formik.touched.services && formik.errors.services && (
          <div className="dc-modal-error">{formik.errors.services}</div>
        )}
      </div>

      <div className="dc-modal-form-group">
        <textarea
          className="dc-modal-form-textarea"
          id="message"
          name="message"
          placeholder="Message..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message && (
          <div className="dc-modal-error">{formik.errors.message}</div>
        )}
      </div>

      {formStatus.isError && (
        <div className="dc-modal-error text-center mb-3">
          Something went wrong, please try again
        </div>
      )}
      {formStatus.isSuccess && (
        <div className="dc-modal-success">Message sent successfully</div>
      )}

      <button
        type="submit"
        className="dc-modal-submit-btn"
        disabled={formStatus.isLoading}
      >
        {formStatus.isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ModalContactForm;
