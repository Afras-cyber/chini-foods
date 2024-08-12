"use client"
import React from 'react'
import Image from "next/image";
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';


import Button from "@/components/Button";
import contactbg from "/public/contact.jpeg";
import pau from "/public/Pau.png";

interface validate {
  first?: string;
  last?: string;
  email?: string;
}
const validate = (values :any) => {
  const errors: validate = {};

  if (!values.first) {
    errors.first = 'Required';
  } else if (values.first.length > 15) {
    errors.first = 'Must be 15 characters or less';
  }

  if (!values.last) {
    errors.last = 'Required';
  } else if (values.last.length > 20) {
    errors.last = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};


const Page = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      first: '',
      last: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
    <div className='relative'>
      <div className='w-full h-auto '>
      <Image src={contactbg} alt="contactimage" layout="responsive" width={1920} height={1080} className="object-cover w-full h-auto" />
      </div>
      <div className='absolute inset-0 flex items-center  left-10'>
      <h1 className='text-white text-3xl md:text-5xl font-bold'>Contact us</h1>
      </div>
    </div>

    <div className='lg:grid lg:grid-cols-2 md:grid-cols-2 m-20 sm:m-10'>

    <form onSubmit={formik.handleSubmit} className='max-w-4xl mx-auto p-6'>
  <h1 className='text-2xl font-bold mb-6'>Contact Form</h1>
  
  <div className='mb-4'>
    <label className='block text-sm font-medium mb-2'>Name *</label>
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
      <div className='w-full'>
        <TextField
          placeholder=""
          helperText="First"
          className='w-full'
          id="first"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.first}
        />
              {formik.errors.first ? <div className='text-red-600'>{formik.errors.first}</div> : null}

      </div>
      <div className='w-full'>
        <TextField
          placeholder=""
          helperText="Last"
          className='w-full'
          id="last"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.last}
        />
        {formik.errors.last ? <div className='text-red-600'>{formik.errors.last}</div> : null}
      </div>
    </div>
  </div>
  
  <div className='mb-4'>
    <label className='block text-sm font-medium mb-2'>Email *</label>
    <div>
      <TextField
        className='w-full'
        placeholder=""
        helperText=""
        id="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div className='text-red-600'>{formik.errors.email}</div> : null}
    </div>
  </div>
  
  <div className='mb-4'>
    <label className='block text-sm font-medium mb-2'>Your Message *</label>
    <div>
      <textarea
        className='w-full h-52 p-2 border rounded'
        placeholder=""
        id="message"
        onChange={formik.handleChange}
        value={formik.values.message}
            />
        {formik.errors.message ? <div className='text-red-600'>{formik.errors.message}</div> : null}
    </div>
  </div>
  
  <div className='flex justify-start'>
    <Button type="submit">Submit</Button>
  </div>
</form>
      <div className='m-10 pt-28'>
      <Image src={pau} alt="contactimage" layout="responsive" width={400} height={300} className="object-center" />
      </div>
    </div>

    <div className='w-full h-56 bg-gray-100 flex items-center   md:text-center  '>
  <div className='lg:ml-40 m-5 md:text-center  '>
    <p>Got a question about your order? Need help with some of your app features? Contact Help Centre via app menu.</p>
  </div>
</div>
    </>
  )
}

export default Page