import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { getUserInfo } from "utils/Auth";
import { Grant, IApiData, add as AddGrant } from 'api/grants';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// 图片上传组件
const { Dragger } = Upload;

const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

interface InputErrorState {
    bringing: boolean;
    external_funding: boolean;
    based: boolean;

    title: boolean;
    description: boolean;
    logo: boolean;
    contract_address?: boolean;
    website: boolean;
    twitter: boolean;

    total_raised: boolean;
    min_raised?: boolean;
    fundraising_start_date: boolean;
    fundraising_end_date: boolean;
}

// 获取到Session的用户信息
const user = getUserInfo();

export default function CreateGrant() {
    const [activeStep, setActiveStep] = React.useState(0);

    // Stepper
    const handleNext = () => {
        if (activeStep < 2) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            return false;
        }

        addGrant();
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // 表单所有字段
    const [grant, setGrant] = React.useState<Grant>({
        user_id: user.userId,
        user_name: user.userName,

        bringing: "",
        external_funding: "0",
        based: "North America",

        title: "",
        description: "",
        logo: "",
        contract_address: "",
        website: "",
        twitter: "",

        total_raised: "",
        min_raised: "",
        fundraising_start_date: "",
        fundraising_end_date: "",
    });

    // 表单所有字段
    const [inputError, setInputError] = React.useState<InputErrorState>({
        bringing: false,
        external_funding: false,
        based: false,

        title: false,
        description: false,
        logo: false,
        contract_address: false,
        website: false,
        twitter: false,

        total_raised: false,
        min_raised: false,
        fundraising_start_date: false,
        fundraising_end_date: false,
    });


    const handleInputChange = (prop: keyof Grant) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setGrant({ ...grant, [prop]: event.target.value });
    };

    const handleSelectChange = (prop: keyof Grant) => (event: SelectChangeEvent) => {
        setGrant({ ...grant, [prop]: event.target.value });
    };

    async function addGrant() {
        setOpenSnackbar(false);
        setOpenLoading(true);

        const rs = await AddGrant(grant);
        if (rs.code !== 0) {
            setOpenLoading(false);
            showSnackbar('error', 'Failed to create! Please try again!');
        }
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
                            <React.Fragment>
                                <div className="flex flex-col items-start justify-start border rounded border-gray-300 mt-[2.31rem] mb-[3.13rem] w-full p-[2rem]" style={{ 'display': (activeStep === 0 ? 'flex' : 'none') }}>
                                    <p className="text-xl font-medium leading-loose text-gray-500">Step 1 of 3</p>
                                    <p className="text-3xl leading-10 text-center text-gray-900">Eligibility & Discovery setup<br /></p>

                                    <FormControl className=" w-full mt-[2rem] relative" error={inputError.bringing} >
                                        <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>What you will bring after you get grants？</InputLabel>
                                        <TextField className="mt-[1.8rem]" label="" variant="outlined" multiline minRows={4} defaultValue="" helperText="Required." required sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }} value={grant.bringing} onChange={handleInputChange('bringing')} />
                                    </FormControl>
                                    <FormControl className=" w-full mt-[2rem] relative" error={inputError.external_funding}>
                                        <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Has this project received external funding？</InputLabel>
                                        <Select
                                            value={grant.external_funding}
                                            label=""
                                            onChange={handleSelectChange('external_funding')}
                                            className="mt-[1.8rem]"
                                            sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                        >
                                            <MenuItem value={1}>Yes, this project has raised external funding.</MenuItem>
                                            <MenuItem value={0}>No, this project has not raised external funding.</MenuItem>
                                        </Select>
                                        <FormHelperText className="m-0">Required.</FormHelperText>
                                    </FormControl>
                                    <FormControl className=" w-full mt-[2rem] relative" error={inputError.based}>
                                        <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Where is your team based？ </InputLabel>
                                        <Select
                                            value={grant.based}
                                            label=""
                                            onChange={handleSelectChange('based')}
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
                                        </Select>
                                        <FormHelperText className="m-0">Required.</FormHelperText>
                                    </FormControl>
                                </div>
                                <div className="flex flex-col items-start justify-start border rounded border-gray-300 mt-[2.31rem] mb-[3.13rem] w-full p-[2rem]" style={{ 'display': (activeStep === 1 ? 'flex' : 'none') }}>
                                    <p className="text-xl font-medium leading-loose text-gray-500">Step 2 of 3</p>
                                    <p className="text-3xl leading-10 text-center text-gray-900">Grant Details<br /></p>

                                    <FormControl className=" w-full mt-[2rem] relative" error={inputError.title}>
                                        <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Title</InputLabel>
                                        <OutlinedInput className="mt-[1.8rem]" sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }} value={grant.title} onChange={handleInputChange('title')} />
                                        <FormHelperText className="m-0">Required.</FormHelperText>
                                    </FormControl>
                                    <FormControl className=" w-full mt-[2rem] relative" error={inputError.description}>
                                        <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Description</InputLabel>
                                        <OutlinedInput className="mt-[1.8rem]" multiline minRows={4} sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }} value={grant.description} onChange={handleInputChange('description')} />
                                        <FormHelperText className="m-0">Required.</FormHelperText>
                                    </FormControl>
                                    <FormControl className=" w-full mt-[2rem] relative" error={inputError.logo}>
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
                                    {/* <FormControl className=" w-full mt-[2rem] relative" error={inputError.contract_address}>
                                <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Contract Address </InputLabel>
                                <Select
                                    value={grant.contract_address}
                                    label=""
                                    onChange={handleSelectChange('contract_address')}
                                    className="mt-[1.8rem]"
                                    sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                >
                                    <MenuItem value='dy6so-asmgd-n24ii-ikmu2-sn4jm-plhcl-h46dv-yd25m-ym53j-y3wmk-uae'>dy6so-asmgd-n24ii-ikmu2-sn4jm-plhcl-h46dv-yd25m-ym53j-y3wmk-uae</MenuItem>
                                </Select>
                                <FormHelperText className="m-0">Required.</FormHelperText>
                            </FormControl> */}
                                    <FormControl className=" w-full mt-[2rem] relative" error={inputError.website}>
                                        <InputLabel shrink disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Project Website</InputLabel>
                                        <OutlinedInput className="mt-[1.8rem]" sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }} value={grant.website} onChange={handleInputChange('website')} />
                                    </FormControl>
                                    <FormControl className=" w-full mt-[2rem] relative" error={inputError.twitter}>
                                        <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Project Twitter Handle</InputLabel>
                                        <OutlinedInput className="mt-[1.8rem]" sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }} value={grant.twitter} onChange={handleInputChange('twitter')} />
                                        <FormHelperText className="m-0">Required.</FormHelperText>
                                    </FormControl>
                                </div>

                                <div className="flex flex-col items-start justify-start border rounded border-gray-300 mt-[2.31rem] mb-[3.13rem] w-full p-[2rem]" style={{ 'display': (activeStep === 2 ? 'flex' : 'none') }}>
                                    <p className="text-xl font-medium leading-loose text-gray-500">Step 3 of 3</p>
                                    <p className="text-3xl leading-10 text-center text-gray-900">Fundraising Goals<br /></p>

                                    <FormControl className=" w-full mt-[2rem] relative" error={inputError.total_raised}>
                                        <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Total Fundraising</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            value={grant.total_raised}
                                            onChange={handleInputChange('total_raised')}
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            label="Amount"
                                            className="mt-[1.8rem]"
                                            sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                        />
                                        <FormHelperText className="m-0">Required.</FormHelperText>
                                    </FormControl>
                                    <FormControl className=" w-full mt-[2rem] relative" error={inputError.min_raised}>
                                        <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Minimum Fundraising</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            value={grant.min_raised}
                                            onChange={handleInputChange('min_raised')}
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            label="Amount"
                                            className="mt-[1.8rem]"
                                            sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                        />
                                        <FormHelperText className="m-0">Required.</FormHelperText>
                                    </FormControl>
                                    <FormControl className=" w-full mt-[2rem] relative" error={inputError.fundraising_start_date}>
                                        <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Start date and time of fundraising</InputLabel>
                                        <TextField
                                            value={grant.fundraising_start_date}
                                            onChange={handleInputChange('fundraising_start_date')}
                                            type="datetime-local"
                                            defaultValue="2017-05-24T10:30"
                                            className="mt-[1.8rem]"
                                            sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <FormHelperText className="m-0">Required.</FormHelperText>
                                    </FormControl>
                                    <FormControl className=" w-full mt-[2rem] relative" error={inputError.fundraising_end_date}>
                                        <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Fundraising end date and time</InputLabel>
                                        <TextField
                                            value={grant.fundraising_end_date}
                                            onChange={handleInputChange('fundraising_end_date')}
                                            type="datetime-local"
                                            defaultValue="2017-05-24T10:30"
                                            className="mt-[1.8rem]"
                                            sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <FormHelperText className="m-0">Required.</FormHelperText>
                                    </FormControl>
                                </div>

                                <Box className="flex flex-row justify-center">
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                        variant="outlined"
                                        className={`text-sm leading-snug w-[10.88rem] h-7 py-1 bg-white border rounded mr-[0.81rem] font-Urbanist ${activeStep !== 0 && 'text-brand border-brand'}`}>
                                        Back
                                    </Button>
                                    <Button onClick={handleNext} className="text-sm leading-snug bg-brand w-[10.88rem] h-7 py-1 border rounded text-white font-Urbanist">
                                        {activeStep === 2 ? 'Confirm' : 'Next'}
                                    </Button>
                                </Box>
                            </React.Fragment>
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

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});