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
import { Link } from "react-router-dom";


export default function CreateGrant() {
    const [activeStep, setActiveStep] = React.useState(0);

    // Stepper
    const handleNext = () => {

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    // Select: Has this project received external funding？
    const [externalFunding, setExternalFunding] = React.useState('0');

    const handleExternalFundingChange = (event: SelectChangeEvent) => {
        setExternalFunding(event.target.value as string);
    };


    // Select: Where is your team based？ 
    const [based, setBased] = React.useState('North America');

    const handleBasedChange = (event: SelectChangeEvent) => {
        setBased(event.target.value as string);
    };

    // Select: Contract Address？ 
    const [contractAddress, setContractAddress] = React.useState('dy6so-asmgd-n24ii-ikmu2-sn4jm-plhcl-h46dv-yd25m-ym53j-y3wmk-uae');

    const handleContractAddressChange = (event: SelectChangeEvent) => {
        setContractAddress(event.target.value as string);
    };

    return (
        <div className='w-screen py-[4.06rem] px-[1rem] xl:px-[24.94rem]'>
            <Box className="w-full font-Urbanist text-brand">
                <Stepper activeStep={activeStep} alternativeLabel >
                    <Step completed={activeStep === 1 ? true : false}>
                        <StepLabel StepIconProps={{ className: 'text-brand' }} componentsProps={{ label: { className: 'font-Urbanist text-brand text-center mt-2' } }}>Eligibility & Discovery</StepLabel>
                    </Step>
                    <Step completed={activeStep === 2 ? true : false}>
                        <StepLabel sx={{ '& .Mui-active': { color: '#00BCC2' }, '& .Mui-completed': { color: '#00BCC2' } }} componentsProps={{ label: { className: 'font-Urbanist text-brand text-center mt-2' } }}>Grants Details</StepLabel>
                    </Step>
                </Stepper>
                {activeStep === 2 ? (
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
                            <p className="text-xl font-medium leading-loose text-gray-500">Step 1 of 2</p>
                            <p className="text-3xl leading-10 text-center text-gray-900">Eligibility & Discovery setup<br /></p>

                            <FormControl className=" w-full mt-[2rem] relative">
                                <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>What you will bring after you get grants？</InputLabel>
                                <OutlinedInput className="mt-[1.8rem]" multiline minRows={4} sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}  />
                                <FormHelperText className="m-0">Required.</FormHelperText>
                            </FormControl>
                            <FormControl className=" w-full mt-[2rem] relative">
                                <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Has this project received external funding？</InputLabel>
                                <Select
                                    value={externalFunding}
                                    label=""
                                    onChange={handleExternalFundingChange}
                                    className="mt-[1.8rem]"
                                    sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                >
                                    <MenuItem value={1}>Yes, this project has raised external funding.</MenuItem>
                                    <MenuItem value={0}>No, this project has not raised external funding.</MenuItem>
                                </Select>
                                <FormHelperText className="m-0">Required.</FormHelperText>
                            </FormControl>
                            <FormControl className=" w-full mt-[2rem] relative">
                                <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Where is your team based？ </InputLabel>
                                <Select
                                    value={based}
                                    label=""
                                    onChange={handleBasedChange}
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
                            <p className="text-xl font-medium leading-loose text-gray-500">Step 2 of 2</p>
                            <p className="text-3xl leading-10 text-center text-gray-900">Grant Details<br /></p>

                            <FormControl className=" w-full mt-[2rem] relative">
                                <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Title</InputLabel>
                                <OutlinedInput className="mt-[1.8rem]" sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}  />
                                <FormHelperText className="m-0">Required.</FormHelperText>
                            </FormControl>
                            <FormControl className=" w-full mt-[2rem] relative">
                                <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Description</InputLabel>
                                <OutlinedInput className="mt-[1.8rem]" multiline minRows={4} sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}  />
                                <FormHelperText className="m-0">Required.</FormHelperText>
                            </FormControl>
                            <FormControl className=" w-full mt-[2rem] relative">
                                <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Contract Address </InputLabel>
                                <Select
                                    value={contractAddress}
                                    label=""
                                    onChange={handleContractAddressChange}
                                    className="mt-[1.8rem]"
                                    sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                                >
                                    <MenuItem value='dy6so-asmgd-n24ii-ikmu2-sn4jm-plhcl-h46dv-yd25m-ym53j-y3wmk-uae'>dy6so-asmgd-n24ii-ikmu2-sn4jm-plhcl-h46dv-yd25m-ym53j-y3wmk-uae</MenuItem>
                                </Select>
                                <FormHelperText className="m-0">Required.</FormHelperText>
                            </FormControl>
                            <FormControl className=" w-full mt-[2rem] relative">
                                <InputLabel shrink disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Project Website</InputLabel>
                                <OutlinedInput className="mt-[1.8rem]" sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}  />
                            </FormControl>
                            <FormControl className=" w-full mt-[2rem] relative">
                                <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 font-thin text-3xl font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Project Twitter Handle</InputLabel>
                                <OutlinedInput className="mt-[1.8rem]" sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}  />
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
                                {activeStep === 1 ? 'Confirm' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </div >
    );
}
