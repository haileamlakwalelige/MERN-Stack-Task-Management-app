// import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CreateList = () => {
  // const [status, setStatus] = useState('');

  const navigate = useNavigate();

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    status: Yup.string().required('Status is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    axios.post('http://localhost:3001/createTask', values)
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(err => console.log(err)) 
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="bg-[rgb(0,183,255)] font-serif h-screen">
      <div className="flex flex-col items-center justify-center pt-20 md:px-40 sm:px-20 px-10 lg:px-72">
        <div className="bg-white shadow h-96 sm:mx-20 mx-10 w-full md:mx-40 rounded-2xl">
          <h1 className="font-bold p-2 text-3xl">Add Task</h1>
          <Formik initialValues={{ title: '', description: '', status: '' }} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {({ isSubmitting }) => (
              <Form> 
                <div className="flex flex-col px-4 py-3">
                  <label className="font-bold">Title</label>
                  <Field name="title" className="focus:outline-none outline-none focus:border-none text-lg border-2 py-1 placeholder:pl-3" type="text" placeholder="Enter Your Task"/>
                  <ErrorMessage name="title" component="div" className="text-red-500" />
                </div>
                <div className="flex flex-col px-4 py-3">
                  <label className="font-bold">Description</label>
                  <Field name="description" className="focus:outline-none outline-none focus:border-none text-lg border-2 py-1 placeholder:pl-3" type="text" placeholder="Enter Your Description"/>
                  <ErrorMessage name="description" component="div" className="text-red-500" />
                </div>
                <div className="flex flex-col px-4 py-3">
                  <label className="font-bold">Status</label>
                  <Field name="status" as="select" className="focus:outline-none outline-none focus:border-none text-lg border-2 py-1">
                    <option value="">Select a Status</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncompleted">Uncompleted</option>
                  </Field>
                  <ErrorMessage name="status" component="div" className="text-red-500" />
                </div>
                <div className="flex flex-col px-4 py-3">
                  <button type="submit" className="font-bold hover:bg-[#cbcb2c] text-white hover:text-black bg-green-500 px-4 py-2" disabled={isSubmitting}>Submit</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default CreateList;