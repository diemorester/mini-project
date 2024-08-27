import Dropdown from '@/components/dropdown';
import Modal from '@/components/modal';
import { Field, Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import { useState } from 'react';
import * as Yup from 'yup';

export const CreateEventModal = ({
  setShowEventModal,
}: {
  setShowEventModal: (show: boolean) => void;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [categories, setCategories] = useState<string[]>([
    'Technology',
    'Health',
    'Finance',
  ]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const registerValidationSchema = Yup.object().shape({
    title: Yup.string(),
    description: Yup.string(),
    startDateTime: Yup.string(),
    endDateTime: Yup.string(),
    location: Yup.string(),
    categoryId: Yup.string(),
    price: Yup.string(),
  });

  const handleCategoryChange = (newCategory: string) => {
    if (!categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    }
    setSelectedCategory(newCategory);
  };

  const handleEventSubmit = async (values: any, { resetForm }: any) => {
    console.log('values:', values);
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('startDateTime', values.startDateTime);
    formData.append('endDateTime', values.endDateTime);
    formData.append('location', values.location);
    formData.append('category', selectedCategory || values.categoryId);
    formData.append('price', values.price);
    formData.append('isEventFree', values.isEventFree.toString());
    formData.append('file', file as Blob);

    try {
      const response = await fetch('http://localhost:8000/api/events/create', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Event creation failed');
      }

      setShowEventModal(false);
    } catch (error) {
      console.error('Event creation error:', error);
      alert('Event creation failed');
    }
    // resetForm();
  };

  return (
    <Modal onClose={() => setShowEventModal(false)} id="event-modal">
      <h1 className="text-2xl font-semibold mb-4 text-white">Add Event</h1>
      <Formik
        initialValues={{
          title: '',
          description: '',
          startDateTime: '',
          endDateTime: '',
          location: '',
          categoryId: '',
          price: '',
          isEventFree: false,
        }}
        validationSchema={registerValidationSchema}
        onSubmit={handleEventSubmit}
      >
        {({ errors, values }) => (
          <Form className="flex flex-col ">
            <Field
              name="title"
              placeholder="Title"
              className="bg-sept-black text-sept-white border-b-2 border-sept-white p-2 m-2"
            />
            {errors.title && (
              <div className="text-red-500 text-sm">{errors.title}</div>
            )}

            <Field
              name="description"
              placeholder="Description"
              className="bg-sept-black text-sept-white border-b-2 border-sept-white p-2 m-2"
            />
            {errors.description && (
              <div className="text-red-500 text-sm">{errors.description}</div>
            )}

            <div className="flex flex-col p-2">
              <label className="text-sept-white">Start Date</label>
              <Field
                name="startDateTime"
                placeholder="Start Date"
                type="date"
                className="bg-sept-black text-sept-white border-b-2 border-sept-white mt-2"
              />
              {errors.startDateTime && (
                <div className="text-red-500 text-sm">
                  {errors.startDateTime}
                </div>
              )}
            </div>
            <div className="flex flex-col p-2">
              <label className="text-sept-white">End Date</label>
              <Field
                name="endDateTime"
                placeholder="End Date"
                type="date"
                className="bg-sept-black text-sept-white border-b-2 border-sept-white mt-2 m"
              />
              {errors.endDateTime && (
                <div className="text-red-500 text-sm">{errors.endDateTime}</div>
              )}
            </div>
            <Field
              name="location"
              placeholder="Location"
              className="bg-sept-black text-sept-white border-b-2 border-sept-white p-2 m-2"
            />
            <Dropdown
              categories={categories}
              defaultCategory={''}
              onCategoryChange={handleCategoryChange}
            />

            <Field
              name="price"
              placeholder="Price"
              className="bg-sept-black text-sept-white border-b-2 border-sept-white p-2 m-2"
            />

            {errors.price && (
              <div className="text-red-500 text-sm">{errors.price}</div>
            )}

            <label className="flex items-center">
              <Field
                name="isEventFree"
                type="checkbox"
                className="bg-sept-black text-sept-white border-b-2 border-sept-white p-2 m-2"
              />{' '}
              Is Event Free
            </label>

            {errors.isEventFree && (
              <div className="text-red-500 text-sm">{errors.isEventFree}</div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="bg-sept-black text-sept-white  p-2 m-2"
            />
            <button
              className="bg-sept-purple text-white px-4 py-2 rounded-lg"
              type="submit"
            >
              Add Event
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
