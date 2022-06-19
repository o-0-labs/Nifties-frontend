import * as React from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';

const closeIcon = require('static/close.png');

export default function JoinNowDialog(props: {
    children?: React.ReactNode;
    open: boolean;
    onOpenJoinNowDialogChange: any;
}) {
    const { children, open, onOpenJoinNowDialogChange } = { ...props };

    return (
        <div className={`absolute top-0 left-0 w-full h-full justify-center flex items-center ${open ? 'flex' : 'hidden'} `}>
            <div className='w-[35.31rem] h-[23.31rem] bg-white rounded-md border border-[#CDD6D7] font-Urbanist py-[1rem] px-[2.06rem]'>
                <div className='w-full text-center text-2xl font-semibold leading-loose relative'>
                    Welcome&nbsp;&nbsp;！
                    <IconButton color="primary" aria-label="add to shopping cart" onClick={onOpenJoinNowDialogChange} className=' absolute top-[0.6rem] right-[0rem] w-[2rem] h-[2rem]'>
                        <img src={closeIcon} alt="Close Dialog" />
                    </IconButton>
                </div>
                <FormControl className=" w-full mt-[1.5rem] relative">
                    <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 text-lg font-semibold leading-tight font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>What is your full Discord handle?</InputLabel>
                    <OutlinedInput className="mt-[1rem]" size="small" sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }} />
                </FormControl>
                <FormControl className=" w-full mt-[1.5rem] relative">
                    <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 text-lg font-semibold leading-tight font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>If needed, are you OK with sharing the email provided with sponsors?</InputLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        className="mt-[0.5rem]"
                        defaultValue="yes"
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <FormControl className=" w-full mt-[1.5rem] relative">
                    <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 text-lg font-semibold leading-tight font-Urbanist" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>I agree to the Nfities Terms of Service: </InputLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        className="mt-[0.5rem]"
                        defaultValue="yes"
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <div className='mt-[1rem] flex flex-row justify-center items-center'>
                    <Button className="text-sm leading-snug bg-brand w-[10.88rem] h-7 py-1 border rounded text-white font-Urbanist normal-case">Submit</Button>
                </div>
            </div>
        </div>
    );
}

