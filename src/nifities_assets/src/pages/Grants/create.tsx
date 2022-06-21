import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import { Link } from "react-router-dom";
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { getUserInfo } from "utils/Auth";
import { Grant, IApiData, add as addGrant } from 'api/grants';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from 'yup';
import { Select } from 'formik-mui';
// import { DatePicker } from 'formik-mui-lab';
import { imageUploadUrl, getToken } from '../../api/imageUpload';
import dayjs from 'dayjs';
import GrantContract, { Grant as GrantType } from '../../smartcontract/grants';



// 获取到Session的用户信息
const user = getUserInfo();

export default function CreateGrant() {
    const [activeStep, setActiveStep] = React.useState(0);

    // Stepper
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    const postSumbit = (values: Grant) => {
        // alert(JSON.stringify(values, null, 2));
        setOpenSnackbar(false);
        setOpenLoading(true);

        values.logo = uploadedAddress;
        addGrant(values).then((res) => {
            if (res.code !== 0) {
                showSnackbar('error', `Failed to submit(${res.data.msg})!`);
            } else {
                showSnackbar('success', 'Submitted successfully!');
                showSnackbar('info', 'Start configuring a smart contract.');
                // 调用后端新增众筹后，接口返回分配的合约地址，前端调用合约函数初始化合约
                const contractAddress = res.data.contract_address;
                console.log(`postSumbit(), contractAddress: ${contractAddress}`);
                ininContract(contractAddress, values);
            }
        });
    }

    const ininContract = (contractAddress: string, grant: Grant) => {
        // 众筹合约函数
        const grantContract = new GrantContract(contractAddress);

        const data: GrantType = {
            'status': 1,
            'funded_total_ammount': 0n,
            'owner': grant.user_name,
            'name': grant.title,
            'end_time': BigInt(dayjs(grant.fundraising_end_date).valueOf()),
            'begin_time': BigInt(dayjs(grant.fundraising_start_date).valueOf()),
            'total_ammount': BigInt(grant.total_raised),
            'min_ammount': BigInt(grant.min_raised),
        };
        grantContract.add(data).then((res) => {
            console.log(`grantContract.add(), res: ${res}`);
            setOpenLoading(false);

            if ('Err' in res) {
                showSnackbar('error', `Contract initialization failed! Message: $(Err)`);
            }else if ('Ok' in res) {
                showSnackbar('success', 'The contract initialisation successful!');

                handleNext();
            }else {
                showSnackbar('error', 'Contract initialization failed!');
            }
        }, (err) => {
            setOpenLoading(false);
            showSnackbar('error', err.toString());
        });
    }

    // Loading
    const [openLoading, setOpenLoading] = React.useState(false);

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
            <div className='mx-auto w-[1190px] py-[4.06rem]'>
                <div className='w-full px-[1rem] xl:px-[15rem]'>
                    <Box className="w-full font-Urbanist text-brand">
                        <Stepper activeStep={activeStep} alternativeLabel >
                            <Step completed={activeStep > 0 ? true : false}>
                                <StepLabel StepIconProps={{ className: 'text-brand' }} componentsProps={{ label: { className: 'font-Urbanist text-brand text-center mt-2' } }}>Eligibility & Discovery</StepLabel>
                            </Step>
                            <Step completed={activeStep > 1 ? true : false}>
                                <StepLabel sx={{ '& .Mui-active': { color: '#00BCC2' }, '& .Mui-completed': { color: '#00BCC2' } }} componentsProps={{ label: { className: 'font-Urbanist text-brand text-center mt-2' } }}>Grants Details</StepLabel>
                            </Step>
                            <Step completed={activeStep > 2 ? true : false}>
                                <StepLabel sx={{ '& .Mui-active': { color: '#00BCC2' }, '& .Mui-completed': { color: '#00BCC2' } }} componentsProps={{ label: { className: 'font-Urbanist text-brand text-center mt-2' } }}>Fundraising Goals</StepLabel>
                            </Step>
                        </Stepper>
                        {activeStep === 3 ? (
                            <React.Fragment>
                                <div className='text-center space-y-[4.31rem] my-[4.31rem]'>
                                    <p className=' text-3xl text-brand-text-black'>All steps completed - you&apos;re finished</p>
                                    <Link to={`/grants`}>
                                        <Button className="text-sm leading-snug bg-brand w-[10.88rem] h-7 py-1 mt-[4.31rem] border rounded text-white font-Urbanist">Back to List</Button>
                                    </Link>
                                </div>
                            </React.Fragment>
                        ) : (
                            <Formik
                                initialValues={{
                                    user_id: user.userId,
                                    user_name: user.userName,

                                    bringing: "",
                                    external_funding: "0",
                                    based: "North America",

                                    title: "",
                                    description: "",
                                    logo: uploadedAddress,
                                    contract_address: "",
                                    website: "",
                                    twitter: "",

                                    total_raised: "",
                                    min_raised: "",
                                    fundraising_start_date: dayjs(new Date()).format('YYYY-MM-DDTHH:mm:ss'),
                                    fundraising_end_date: dayjs(new Date()).add(6, 'month').format('YYYY-MM-DDTHH:mm:ss'),
                                }}
                                validationSchema={Yup.object({
                                    bringing: Yup.string()
                                        .min(15, 'Must be 15 characters or more')
                                        .required('Required'),
                                    external_funding: Yup.string()
                                        .oneOf(
                                            ['1', '0'],
                                            'Invalid External Funding Type'
                                        )
                                        .required('Required'),
                                    based: Yup.string()
                                        .oneOf(
                                            ['North America', 'Oceania', 'Latin America', 'Europe', 'Africa', 'Middle East', 'India', 'East Asia', 'Southeast Asia'],
                                            'Invalid External Funding Type'
                                        )
                                        .required('Required'),
                                    title: Yup.string()
                                        .max(50, 'Must be 50 characters or less')
                                        .required('Required'),
                                    description: Yup.string()
                                        .min(15, 'Must be 15 characters or more')
                                        .required('Required'),
                                    website: Yup.string()
                                        .max(256, 'Must be 256 characters or less')
                                        .required('Required'),
                                    twitter: Yup.string()
                                        .max(50, 'Must be 50 characters or less')
                                        .required('Required'),
                                    total_raised: Yup.number()
                                        .positive()
                                        .integer()
                                        .min(100, 'Must be $100(USD) or more')
                                        .max(10_00_000_000, 'Must be a maximum of $1 billion (US)D or less')
                                        .required('Required'),
                                    min_raised: Yup.number()
                                        .positive()
                                        .integer()
                                        .min(100, 'Must be $100(USD) or more')
                                        .max(10_00_000_000, 'Must be a maximum of $1 billion (US)D or less')
                                        .required('Required'),
                                    // fundraising_start_date: Yup.date()
                                    //     //.default(() => new Date())
                                    //     .min(new Date(new Date().setMinutes(new Date().getMinutes() - 1)), 'The start time should be no less than the current time')
                                    //     .max(new Date(new Date().setDate(new Date().getDate() + 10)), 'Start time should be within the next 10 days')
                                    //     .required('Required'),
                                    // fundraising_end_date: Yup.date()
                                    //     .min(new Date(new Date().setDate(new Date().getDate() + 10)), 'End date is at least 10 days later')
                                    //     .max(new Date(new Date().setMonth(new Date().getMonth() + 12)), 'Ends in a maximum of 1 year')
                                    //     .required('Required'),
                                })}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        setSubmitting(false);
                                        // alert(JSON.stringify(values, null, 2));
                                        postSumbit(values);
                                    }, 500);
                                }}
                            >
                                {({ submitForm, isSubmitting, initialValues, errors }) => (
                                    <Form className='mx-auto'>
                                        <div className="flex flex-col items-start justify-start border rounded border-gray-300 mt-[2.31rem] mb-[3.13rem] w-full p-[2rem]" style={{ 'display': (activeStep === 0 ? 'flex' : 'none') }}>
                                            <p className="text-xl font-medium leading-loose text-gray-500">Step 1 of 3</p>
                                            <p className="text-3xl leading-10 text-center text-gray-900">Eligibility & Discovery setup<br /></p>

                                            <FormControl className=" w-full mt-[2rem] relative">
                                                <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>What you will bring after you get grants？</InputLabel>
                                                <Field
                                                    component={TextField}
                                                    name="bringing"
                                                    type="text"
                                                    label=""
                                                    className="mt-[1.8rem]"
                                                    size="small"
                                                    multiline
                                                    minRows={4}
                                                    sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                                />
                                            </FormControl>
                                            <FormControl className=" w-full mt-[2rem] relative">
                                                <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Has this project received external funding？</InputLabel>
                                                <Field
                                                    component={Select}
                                                    formControl={{}}
                                                    formHelperText={{}}
                                                    id="external_funding"
                                                    name="external_funding"
                                                    labelId=""
                                                    label=""
                                                    defaultValue={initialValues.external_funding}
                                                    className="mt-[1.8rem]"
                                                    sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                                >
                                                    <MenuItem value={1}>Yes, this project has raised external funding.</MenuItem>
                                                    <MenuItem value={0}>No, this project has not raised external funding.</MenuItem>
                                                </Field>
                                            </FormControl>
                                            <FormControl className=" w-full mt-[2rem] relative">
                                                <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Where is your team based？ </InputLabel>
                                                <Field
                                                    component={Select}
                                                    formControl={{}}
                                                    formHelperText={{}}
                                                    id="based"
                                                    name="based"
                                                    labelId=""
                                                    label=""
                                                    defaultValue={initialValues.based}
                                                    className="mt-[1.8rem]"
                                                    sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                                >
                                                    <MenuItem value='North America'>North America</MenuItem>
                                                    <MenuItem value='Oceania'>Oceania</MenuItem>
                                                    <MenuItem value='Latin America'>Latin America</MenuItem>
                                                    <MenuItem value='Europe'>Europe</MenuItem>
                                                    <MenuItem value='Africa'>Africa</MenuItem>
                                                    <MenuItem value='Middle East'>Middle East</MenuItem>
                                                    <MenuItem value='India'>India</MenuItem>
                                                    <MenuItem value='East Asia'>East Asia</MenuItem>
                                                    <MenuItem value='Southeast Asia'>Southeast Asia</MenuItem>
                                                </Field>
                                            </FormControl>
                                        </div>

                                        <div className="flex flex-col items-start justify-start border rounded border-gray-300 mt-[2.31rem] mb-[3.13rem] w-full p-[2rem]" style={{ 'display': (activeStep === 1 ? 'flex' : 'none') }}>
                                            <p className="text-xl font-medium leading-loose text-gray-500">Step 2 of 3</p>
                                            <p className="text-3xl leading-10 text-center text-gray-900">Grant Details<br /></p>

                                            <FormControl className=" w-full mt-[2rem] relative">
                                                <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Title</InputLabel>
                                                <Field
                                                    component={TextField}
                                                    name="title"
                                                    type="text"
                                                    label=""
                                                    className="mt-[1.8rem]"
                                                    sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                                />
                                            </FormControl>
                                            <FormControl className=" w-full mt-[2rem] relative">
                                                <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Description</InputLabel>
                                                <Field
                                                    component={TextField}
                                                    name="description"
                                                    type="text"
                                                    label=""
                                                    className="mt-[1.8rem]"
                                                    size="small"
                                                    multiline
                                                    minRows={4}
                                                    sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                                />
                                            </FormControl>
                                            <FormControl className=" w-full mt-[2rem] relative" error={uploadedAddress ? false : true}>
                                                <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Project Logo</InputLabel>
                                                <Dragger {...props} className="mt-[1.8rem]">
                                                    <p className="ant-upload-drag-icon">
                                                        <InboxOutlined />
                                                    </p>
                                                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                                    <p className="ant-upload-hint">
                                                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                                        band files
                                                    </p>
                                                </Dragger>
                                            </FormControl>
                                            <FormControl className=" w-full mt-[2rem] relative">
                                                <InputLabel shrink disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Project Website</InputLabel>
                                                <Field
                                                    component={TextField}
                                                    name="website"
                                                    type="text"
                                                    label=""
                                                    className="mt-[1.8rem]"
                                                    sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                                />
                                            </FormControl>
                                            <FormControl className=" w-full mt-[2rem] relative">
                                                <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Project Twitter Handle</InputLabel>
                                                <Field
                                                    component={TextField}
                                                    name="twitter"
                                                    type="text"
                                                    label=""
                                                    className="mt-[1.8rem]"
                                                    sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                                />
                                            </FormControl>
                                        </div>

                                        <div className="flex flex-col items-start justify-start border rounded border-gray-300 mt-[2.31rem] mb-[3.13rem] w-full p-[2rem]" style={{ 'display': (activeStep === 2 ? 'flex' : 'none') }}>
                                            <p className="text-xl font-medium leading-loose text-gray-500">Step 3 of 3</p>
                                            <p className="text-3xl leading-10 text-center text-gray-900">Fundraising Goals<br /></p>

                                            <FormControl className=" w-full mt-[2rem] relative">
                                                <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Total Fundraising</InputLabel>
                                                <Field
                                                    component={TextField}
                                                    name="total_raised"
                                                    type="number"
                                                    label=""
                                                    className="mt-[1.8rem]"
                                                    sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">$</InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </FormControl>
                                            <FormControl className=" w-full mt-[2rem] relative">
                                                <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Minimum Fundraising</InputLabel>
                                                <Field
                                                    component={TextField}
                                                    name="min_raised"
                                                    type="number"
                                                    label=""
                                                    className="mt-[1.8rem]"
                                                    sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">$</InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </FormControl>
                                            {/* <FormControl className=" w-full mt-[2rem] relative">
                                                <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Start date and time of fundraising</InputLabel>
                                                <Field
                                                    component={DatePicker}
                                                    label=""
                                                    name="fundraising_start_date"
                                                    textField={{ helperText: 'Helper text' }}
                                                    inputFormat="MM/dd/yyyy"
                                                    type="datetime-local"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    className="mt-[1.8rem]"
                                                    sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                                />
                                            </FormControl>
                                            <FormControl className=" w-full mt-[2rem] relative">
                                                <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Fundraising end date and time</InputLabel>
                                                <Field
                                                    component={DatePicker}
                                                    label=""
                                                    name="fundraising_end_date"
                                                    textField={{ helperText: 'Helper text' }}
                                                    inputFormat="MM/dd/yyyy"
                                                    type="datetime-local"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    className="mt-[1.8rem]"
                                                    sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                                />
                                            </FormControl> */}
                                        </div>

                                        <div className='w-full h-auto py-[0.5rem]'>{isSubmitting && <LinearProgress />}</div>
                                        <Box className="w-full mx-auto flex flex-row justify-center">
                                            {
                                                activeStep === 0 ? (
                                                    <Link to={`/grants`}>
                                                        <Button
                                                            color="inherit"
                                                            sx={{ mr: 1 }}
                                                            variant="outlined"
                                                            className={`text-sm leading-snug w-[10.88rem] h-7 py-1 bg-white border rounded mr-[0.81rem] font-Urbanist text-brand border-brand`}>
                                                            Back to List
                                                        </Button>
                                                    </Link>
                                                ) : (
                                                    <Button
                                                        color="inherit"
                                                        onClick={handleBack}
                                                        sx={{ mr: 1 }}
                                                        variant="outlined"
                                                        className={`text-sm leading-snug w-[10.88rem] h-7 py-1 bg-white border rounded mr-[0.81rem] font-Urbanist text-brand border-brand`}>
                                                        Back
                                                    </Button>
                                                )
                                            }
                                            <Button className="text-sm leading-snug bg-brand w-[10.88rem] h-7 py-1 border rounded text-white font-Urbanist normal-case" disabled={isSubmitting}
                                                onClick={
                                                    () => {

                                                        submitForm();
                                                        // console.log(errors);

                                                        if (activeStep === 0) {
                                                            if (JSON.stringify(errors) !== '{}' && !errors.bringing) {
                                                                handleNext();
                                                            }
                                                        } else if (activeStep === 1) {
                                                            if (JSON.stringify(errors) !== '{}' && !errors.title && !errors.description && !errors.title && !errors.twitter && !errors.website && uploadedAddress) {
                                                                handleNext();
                                                            }
                                                        }
                                                    }
                                                }
                                            >{activeStep === 2 ? 'Confirm' : 'Next'}</Button>
                                        </Box>
                                    </Form>
                                )}
                            </Formik>
                        )}
                    </Box>
                </div >
            </div>

            <Backdrop
                sx={{ color: '#fff', zIndex: 1301 }}
                open={openLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={opeSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={alertSeverity} sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </>
    );
}


// 图片上传组件
let uploadedAddress: string;
const { Dragger } = Upload;
const props: UploadProps = {
    name: 'upload',
    multiple: false,
    action: imageUploadUrl,
    headers: { 'Authorization': `Bearer ${getToken()}` },
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            // console.log(info.file, info.fileList);
        }
        if (status === 'done') {

            const res = info.file.response;
            if (res.code === 0) {
                message.success(`${info.file.name} file uploaded successfully.`);
                uploadedAddress = res.data.url;
            } else {
                message.error(`${info.file.name} file upload failed.`);
            }

        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        // console.log('Dropped files', e.dataTransfer.files);
    },
};


// 提示组件
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});