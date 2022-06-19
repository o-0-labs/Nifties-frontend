import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import { JoinHackahton, join } from '../../../api/hackahton';
import { getUserInfo } from "utils/Auth";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';

const closeIcon = require('static/close.png');

const userInfo = getUserInfo();

interface InputErrorState {
    discord: boolean;
    sharing_email: boolean;
    agree: boolean;
    email: boolean;
}

export default function JoinNowDialog(props: {
    children?: React.ReactNode;
    open: boolean;
    onOpenJoinNowDialogChange: any;
    id: string;
}) {
    const { children, open, onOpenJoinNowDialogChange, id } = { ...props };

    const [joinHackahton, setJoinHackahton] = useState<JoinHackahton>({
        'user_id': '',
        'email': '',
        'hackathon_id': id,
        'discord': '',
        'sharing_email': '1',
        'agree': '1',
    });

    const [inputError, setInputError] = React.useState<InputErrorState>({
        'discord': false,
        'sharing_email': false,
        'agree': false,
        'email': false,
    });


    const handleInputChange = (prop: keyof JoinHackahton) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setJoinHackahton({ ...joinHackahton, [prop]: event.target.value });
        setInputError({ ...inputError, [prop]: false });
    }

    const handleSumbit = () => {
        let emailCheck = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
        if (!joinHackahton.discord || !joinHackahton.email || !emailCheck.test(joinHackahton.email)) {
            let inputErrorState = JSON.parse(JSON.stringify(inputError));
            if (!joinHackahton.discord) {
                inputErrorState.discord = true;
            } else if (!joinHackahton.email || !emailCheck.test(joinHackahton.email)) {
                inputErrorState.email = true;
            }
            setInputError(inputErrorState);
            return false;
        } else {

        }

        let joinHackahtonState = JSON.parse(JSON.stringify(joinHackahton));
        joinHackahtonState.hackathon_id = id;

        
        joinHackahtonState.user_id = userInfo.userId;
        setJoinHackahton(joinHackahtonState);

        join(joinHackahtonState).then((res) => {
            if (res.code !== 0) {
                showSnackbar('error', `Failed to submit(${res.data.msg})!`);
            }else {
                showSnackbar('success', 'Submitted successfully!');
            }
        });

        onOpenJoinNowDialogChange();        
    };

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
            <div className={`absolute top-0 left-0 w-full h-full justify-center flex items-center ${open ? 'flex' : 'hidden'} `}>
                <div className='w-[35.31rem] h-[28rem] bg-white rounded-md border border-[#CDD6D7] font-Urbanist py-[1rem] px-[2.06rem]'>
                    <div className='w-full text-center text-2xl font-semibold leading-loose relative'>
                        Welcome&nbsp;&nbsp;！
                        <IconButton color="primary" aria-label="add to shopping cart" onClick={onOpenJoinNowDialogChange} className=' absolute top-[0.6rem] right-[0rem] w-[2rem] h-[2rem]'>
                            <img src={closeIcon} alt="Close Dialog" />
                        </IconButton>
                    </div>
                    <FormControl className=" w-full mt-[1.5rem] relative" error={inputError.discord}>
                        <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 text-lg font-semibold leading-tight font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>What is your full Discord handle?</InputLabel>
                        <OutlinedInput className="mt-[1rem]" size="small" sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }} value={joinHackahton.discord} onChange={handleInputChange('discord')} />
                    </FormControl>
                    <FormControl className=" w-full mt-[1.5rem] relative" error={inputError.email}>
                        <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 text-lg font-semibold leading-tight font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>What's your email address?</InputLabel>
                        <OutlinedInput className="mt-[1rem]" size="small" sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }} value={joinHackahton.email} onChange={handleInputChange('email')} />
                    </FormControl>
                    <FormControl className=" w-full mt-[1.5rem] relative" error={inputError.sharing_email}>
                        <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 text-lg font-semibold leading-tight font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>If needed, are you OK with sharing the email provided with sponsors?</InputLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            className="mt-[0.5rem]"
                            defaultValue={joinHackahton.sharing_email}
                            onChange={handleInputChange('sharing_email')}
                        >
                            <FormControlLabel value="1" control={<Radio />} label="Yes" />
                            <FormControlLabel value="0" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl className=" w-full mt-[1.5rem] relative" error={inputError.agree}>
                        <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 text-lg font-semibold leading-tight font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>I agree to the Nfities Terms of Service: </InputLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            className="mt-[0.5rem]"
                            defaultValue={joinHackahton.agree}
                            onChange={handleInputChange('agree')}
                        >
                            <FormControlLabel value="1" control={<Radio />} label="Yes" />
                            <FormControlLabel value="0" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    <div className='mt-[1rem] flex flex-row justify-center items-center'>
                        <Button className="text-sm leading-snug bg-brand w-[10.88rem] h-7 py-1 border rounded text-white font-Urbanist normal-case" onClick={handleSumbit}>Submit</Button>
                    </div>
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