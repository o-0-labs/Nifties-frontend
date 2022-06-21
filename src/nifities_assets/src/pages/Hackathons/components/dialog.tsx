import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import RadioGroup from '@mui/material/RadioGroup';
import IconButton from '@mui/material/IconButton';
import { JoinHackahton, join } from '../../../api/hackahton';
import { getUserInfo } from "utils/Auth";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import LinearProgress from '@mui/material/LinearProgress';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from 'yup';


const closeIcon = require('static/close.png');

const userInfo = getUserInfo();

export default function JoinNowDialog(props: {
    children?: React.ReactNode;
    open: boolean;
    onOpenJoinNowDialogChange: any;
    id: string;
}) {
    const { children, open, onOpenJoinNowDialogChange, id } = { ...props };

    const postSumbit = (values: JoinHackahton) => {
        // alert(JSON.stringify(values, null, 2));
        values.hackathon_id = id;
        values.user_id = userInfo.userId;
        join(values).then((res) => {
            if (res.code !== 0) {
                showSnackbar('error', `Failed to submit(${res.data.msg})!`);
            } else {
                onOpenJoinNowDialogChange();
                showSnackbar('success', 'Submitted successfully!');
            }
        });
    };


    // Snackbar Message
    const [opeSnackbar, setOpenSnackbar] = React.useState(false);
    const [alertSeverity, setAlertSeverity] = React.useState<AlertColor>('success');
    const [alertMessage, setAlertMessage] = React.useState('Transfer successful!');

    function showSnackbar(severity: AlertColor, message: string) {
        setAlertSeverity(severity);
        setAlertMessage(message);
        setOpenSnackbar(true);
    }

    const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };



    return (
        <>
            <div className={`absolute top-0 left-0 w-full h-full justify-center flex items-center ${open ? 'flex' : 'hidden'} `}>
                <div className='w-[35.31rem] h-auto bg-white rounded-md border border-[#CDD6D7] font-Urbanist py-[1rem] px-[2.06rem]'>
                    <div className='w-full text-center text-2xl font-semibold leading-loose relative'>
                        Welcome&nbsp;&nbsp;！
                        <IconButton color="primary" aria-label="add to shopping cart" onClick={onOpenJoinNowDialogChange} className=' absolute top-[0.6rem] right-[0rem] w-[2rem] h-[2rem]'>
                            <img src={closeIcon} alt="Close Dialog" />
                        </IconButton>
                    </div>
                    <Formik
                        initialValues={{
                            'user_id': '',
                            'email': '',
                            'hackathon_id': id,
                            'discord': '',
                            'sharing_email': '1',
                            'agree': '1',
                        }}
                        validationSchema={Yup.object({
                            email: Yup.string()
                                .email('Invalid email address')
                                .required('Required'),
                            discord: Yup.string()
                                .max(15, 'Must be 15 characters or less')
                                .required('Required'),
                            sharing_email: Yup.string()
                                .oneOf(
                                    ['1', '0'],
                                    'Invalid Sharing Email Type'
                                )
                                .required('Required'),
                            agree: Yup.string()
                                .oneOf(
                                    ['1', '0'],
                                    'Invalid Sharing Email Type'
                                )
                                .required('Required'),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                setSubmitting(false);
                                // alert(JSON.stringify(values, null, 2));
                                postSumbit(values);
                            }, 500);
                        }}
                    >
                        {({ submitForm, isSubmitting, initialValues }) => (
                            <Form>
                                <FormControl className=" w-full mt-[1.5rem] relative">
                                    <InputLabel shrink required disableAnimation={true} htmlFor="email" className=" absolute -left-3 text-lg font-semibold leading-tight font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>What is your full Discord handle?</InputLabel>
                                    <Field
                                        component={TextField}
                                        name="discord"
                                        type="text"
                                        label=""
                                        className="mt-[1rem]" size="small" sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                    />
                                </FormControl>
                                <FormControl className=" w-full mt-[1.5rem] relative">
                                    <InputLabel shrink required disableAnimation={true} htmlFor="discord" className=" absolute -left-3 text-lg font-semibold leading-tight font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>What's your email address?</InputLabel>
                                    
                                    <Field
                                        component={TextField}
                                        name="email"
                                        type="email"
                                        label=""
                                        className="mt-[1rem]" size="small" sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                    />
                                </FormControl>
                                <FormControl className=" w-full mt-[1.5rem] relative">
                                    <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 text-lg font-semibold leading-tight font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>If needed, are you OK with sharing the email provided with sponsors?</InputLabel>
                                    <Field component={RadioGroup} name="sharing_email" className="mt-[0.5rem] flex flex-row" defaultValue={initialValues.sharing_email}>
                                        <FormControlLabel
                                            value="1"
                                            control={<Radio disabled={isSubmitting} />}
                                            label="Yes"
                                            disabled={isSubmitting}
                                        />
                                        <FormControlLabel
                                            value="0"
                                            control={<Radio disabled={isSubmitting} />}
                                            label="No"
                                            disabled={isSubmitting}
                                        />
                                    </Field>
                                </FormControl>
                                <FormControl className=" w-full mt-[1.5rem] relative">
                                    <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 text-lg font-semibold leading-tight font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>If needed, are you OK with sharing the email provided with sponsors?</InputLabel>
                                    <Field component={RadioGroup} name="agree" className="mt-[0.5rem] flex flex-row" defaultValue={initialValues.agree}>
                                        <FormControlLabel
                                            value="1"
                                            control={<Radio disabled={isSubmitting} />}
                                            label="Yes"
                                            disabled={isSubmitting}
                                        />
                                        <FormControlLabel
                                            value="0"
                                            control={<Radio disabled={isSubmitting} />}
                                            label="No"
                                            disabled={isSubmitting}
                                        />
                                    </Field>
                                </FormControl>
                                <div className='w-full h-auto py-[1rem]'>{isSubmitting && <LinearProgress />}</div>
                                <div className='w-full mt-[1rem] flex flex-row justify-center items-center'>
                                    <Button className="text-sm leading-snug bg-brand w-[10.88rem] h-7 py-1 border rounded text-white font-Urbanist normal-case" disabled={isSubmitting} onClick={submitForm}>Submit</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={opeSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={alertSeverity} sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </>
    );
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});