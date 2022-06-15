import * as React from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';


export default function CreateAgoraDialog(props: {
    children?: React.ReactNode;
    open: boolean;
    onOpenJoinNowDialogChange: any;
}) {
    const { children, open, onOpenJoinNowDialogChange } = { ...props };

    return (
        <div className={`absolute top-0 left-0 w-screen h-full bg-[#00000050] justify-center flex items-start ${open ? 'flex' : 'hidden'} `}>
            <div className='w-[45rem] h-auto bg-white rounded-md border border-[#CDD6D7] font-Urbanist py-[1rem] px-[2.06rem] m-[30%]'>
                <div className='w-full text-center text-2xl font-semibold leading-loose relative'>
                    Create an event
                    <IconButton color="primary" aria-label="add to shopping cart" onClick={onOpenJoinNowDialogChange} className=' absolute top-[0.6rem] right-[0rem] w-[2rem] h-[2rem]'>
                        <img src="/close.svg" alt="Close Dialog" />
                    </IconButton>
                </div>
                <FormControl className=" w-full mt-[1.8rem] relative">
                    <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 text-3xl leading-9 font-Urbanist text-brand-text-black" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Tag<span className=' text-lg leading-snug text-gray-500 text-brand-text-grey ml-[1rem]'>You can choose or create tags for the event, up to two. </span></InputLabel>
                    <OutlinedInput className="mt-[1.8rem]" size="small" sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }} />
                </FormControl>
                <FormControl className=" w-full mt-[1.8rem] relative">
                    <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 text-3xl leading-9 font-Urbanist text-brand-text-black" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Title</InputLabel>
                    <OutlinedInput className="mt-[1.8rem]" size="small" sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }} />
                </FormControl>
                <FormControl className=" w-full mt-[1.8rem] relative">
                    <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 text-3xl leading-9 font-Urbanist text-brand-text-black" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Description</InputLabel>
                    <OutlinedInput className="mt-[1.8rem]" size="small" multiline minRows={2} sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }} />
                </FormControl>
                <FormControl className=" w-full mt-[1.8rem] relative">
                    <InputLabel shrink disableAnimation={true} className=" absolute -left-3 text-3xl leading-9 font-Urbanist text-brand-text-black" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Image</InputLabel>
                    <OutlinedInput className="mt-[1.8rem]" size="small" multiline minRows={4} sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }} />
                </FormControl>
                <FormControl className=" w-full mt-[1.8rem] relative">
                    <InputLabel shrink required disableAnimation={true} className=" absolute -left-3 text-3xl leading-9 font-Urbanist text-brand-text-black" sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>Event Address</InputLabel>
                    <OutlinedInput className="mt-[1.8rem]" size="small" sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }} />
                </FormControl>
                <div className='flex flex-row justify-center items-center pt-[3.13rem] pb-[0.88rem]'>
                    <Button onClick={onOpenJoinNowDialogChange} variant="outlined" className="text-sm leading-snug w-[10.88rem] h-7 py-1 bg-white border rounded mr-[0.81rem] font-Urbanist text-brand border-brand">Cancel</Button>
                    <Button className="text-sm leading-snug bg-brand w-[10.88rem] h-7 py-1 border rounded text-white font-Urbanist normal-case">Submit</Button>
                </div>
            </div>
        </div>
    );
}

