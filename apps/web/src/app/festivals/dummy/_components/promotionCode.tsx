import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface VoucherFormValues {
    voucherCode: string;
}

const validationSchema = Yup.object({
    voucherCode: Yup.string(),
});

const VoucherCodeForm: React.FC = () => {
    const initialValues: VoucherFormValues = {
        voucherCode: '',
    };

    const handleSubmit = (values: VoucherFormValues) => {
        console.log('voucher has been applied!', values.voucherCode);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className='flex flex-row gap-3 sm:gap-8 justify-center '>
                        <div className='w-4/6'>
                            <Field
                                type="text"
                                id="voucherCode"
                                name="voucherCode"
                                placeholder="Discount Code"
                                className="bg-sept-white w-full p-3"
                            />
                        </div>
                        <ErrorMessage name="voucherCode" component="div" />
                        <button className='p-3 sm:w-1/6 bg-sept-green text-sept-white' type="submit" disabled={isSubmitting}>
                            Apply
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default VoucherCodeForm;