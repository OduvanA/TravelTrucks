import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import toast, { Toaster } from 'react-hot-toast';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from './BookingForm.module.css';
import './Datepicker.css'

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short! Min 3 chars")
    .max(50, "Too Long! Max 50 chars")
    .required("Name is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email format")
    .required("Email is required"),
  date: Yup.date().required("Required").min(new Date(), "Pick a date in future"),
  comment: Yup.string().trim().max(500, "Comment can contain up to 500 characters"),
});

export default function BookingForm() {
   const handleSubmit = (values, actions) => {
    console.log(values);
    toast.success('Thank you for booking our camper');
    actions.resetForm();
  };

return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        date: "",
        comment: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values, isSubmitting }) => (
        <Form className={css.container}>
          <p className={css.title}>Book your campervan now</p>
          <p className={css.description}>
            Stay connected! We are always ready to help you.
          </p>
          <div className={css.fieldsContainer}>
            {/* Name */}
            <label className={css.label}>
              <Field
                className={css.field}
                type="text"
                name="name"
                placeholder="Name*"
                autoComplete="off"
              />
              <ErrorMessage className={css.error} name="name" component="span" />
            </label>

            {/* Email */}
            <label className={css.label}>
              <Field
                className={css.field}
                type="email"
                name="email"
                placeholder="Email*"
              />
              <ErrorMessage className={css.error} name="email" component="span" />
            </label>

            {/* Booking Date */}
            <label className={css.label}>
              <DatePicker
                className={`${css.field} ${css.datePicker}`}
                name="date"
                selected={values.date}
                minDate={new Date()}
                onChange={(date) => setFieldValue("date", date)}
                placeholderText="Booking date*"
                aria-label="Pick a booking date"
              />
              <ErrorMessage className={css.error} name="date" component="span" />
            </label>

            {/* Comment */}
            <label className={css.label}>
              <Field
                className={css.textarea}
                as="textarea"
                name="comment"
                placeholder="Comment"
                autoComplete="off"
              />
              <ErrorMessage className={css.error} name="comment" component="span" />
            </label>
          </div>

          <button type="submit" className={css.button} disabled={isSubmitting}>
            Send
          </button>
          <Toaster />
        </Form>
      )}
    </Formik>
  );
}