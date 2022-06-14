import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

export default function GrantsCart(props: {
    children?: React.ReactNode;
    open: boolean;
    onOpenPayNowDialogChange: any;
}) {

    const { children, open, onOpenPayNowDialogChange } = {...props};

    // Amount Text Field
    const [amount, setAmount] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(event.target.value));
    };

    return (
        <Dialog fullWidth={true} maxWidth='sm' open={open} onClose={onOpenPayNowDialogChange}>
            <DialogTitle sx={{ fontFamily: 'Urbanist', textAlign: 'center', fontWeight: '900' }}>Grants Cart</DialogTitle>
            <DialogContent>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Item elevation={0} sx={{ fontWeight: '600', color: '#000' }}>ICP</Item>
                    </Grid>
                    <Grid item xs={5}>
                        <Item elevation={0}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount/Currency</InputLabel>
                        </Item>
                    </Grid>
                    <Grid item xs={7}>
                        <FormControl variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={amount}
                                onChange={handleChange}
                                endAdornment={<InputAdornment position="end">ICP</InputAdornment>}
                                aria-describedby="outlined-amount-helper-text"
                                size="small"
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                sx={{ '& .MuiOutlinedInput-notchedOutline>legend': { display: 'none' } }}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions sx={{ fontFamily: 'Urbanist', textAlign: 'center' }}>
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={4}>
                        <Item elevation={0}>
                            <Button variant="outlined" sx={{
                                border: '1px solid #00BCC2', color: '#00BCC2', fontFamily: 'Urbanist', width: '10.88rem', height: '1.75rem', ':hover': {
                                    border: '1px solid #00BCC2',
                                },
                            }} onClick={onOpenPayNowDialogChange}>Cancel</Button>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item elevation={0}>
                            <Button sx={{ backgroundColor: '#00BCC2 !important', fontFamily: 'Urbanist', width: '10.88rem', height: '1.75rem', color: '#fff' }} onClick={onOpenPayNowDialogChange}>Check out</Button>
                        </Item>
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    );
};