import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { sendContactForm } from '../../lib/api';
import { useRouter } from 'next/router';

const HeroContactForm = () => {
  const router = useRouter();
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
        .max(25, 'Must be 15 characters or less')
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
        // Redirect to thank you page after 1 second
        setTimeout(() => {
          router.push('/thank-you');
        }, 1000);
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
    <form onSubmit={formik.handleSubmit} className="dc-agency-hero-form">
      <div className="dc-agency-hero-form-group">
        <input
          type="text"
          className="dc-agency-hero-form-input"
          placeholder="Your Name"
          id="fullName"
          name="fullName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <div className="dc-agency-hero-form-error">
            {formik.errors.fullName}
          </div>
        )}
      </div>

      <div className="dc-agency-hero-form-row">
        <div className="dc-agency-hero-form-group">
          <input
            type="email"
            className="dc-agency-hero-form-input"
            placeholder="Email Address"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="dc-agency-hero-form-error">
              {formik.errors.email}
            </div>
          )}
        </div>

        <div className="dc-agency-hero-form-group">
          <input
            type="text"
            className="dc-agency-hero-form-input"
            placeholder="Phone Number"
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div className="dc-agency-hero-form-error">
              {formik.errors.phoneNumber}
            </div>
          )}
        </div>
      </div>

      <div className="dc-agency-hero-form-group">
        <select
          className="dc-agency-hero-form-select"
          id="services"
          name="services"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.services}
        >
          <option value="" disabled>
            Select a Service
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
          <div className="dc-agency-hero-form-error">
            {formik.errors.services}
          </div>
        )}
      </div>

      <div className="dc-agency-hero-form-group">
        <textarea
          className="dc-agency-hero-form-textarea"
          placeholder="Tell us about your project requirements..."
          id="message"
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message && (
          <div className="dc-agency-hero-form-error">
            {formik.errors.message}
          </div>
        )}
      </div>

      {formStatus.isError && (
        <div className="dc-agency-hero-form-error text-center">
          Something went wrong, please try again
        </div>
      )}
      {/* {formStatus.isSuccess && (
        <div className="dc-agency-hero-form-success">
          Message sent successfully! Redirecting...
        </div>
      )} */}

      <button
        type="submit"
        className="dc-agency-hero-form-submit"
        disabled={formStatus.isLoading}
      >
        {formStatus.isLoading ? (
          <span>
            <span className="spinner"></span>
            Sending...
          </span>
        ) : (
          <>
            <span className="icon">→</span>
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default HeroContactForm;
