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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import GrantContract from '../../../smartcontract/grants';
import { mul } from 'utils/BigNumber';


export default function GrantsCart(props: {
    children?: React.ReactNode;
    open: boolean;
    onOpenPayNowDialogChange: any;
    contractAddress: string;
}) {
    // Dialog Props
    const { children, open, onOpenPayNowDialogChange, contractAddress } = { ...props };
    console.log(`contractAddress: ${contractAddress}`);

    // 众筹合约函数
    const grantContract = new GrantContract(contractAddress, false);


    // Amount Text Field
    const [amountStr, setAmountStr] = React.useState('0.00001');
    const [amountStrError, setAmountStrError] = React.useState(false);

    const handleAmountStrChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const amount = Number(event.target.value);
        if (!isNaN(amount) && amount > -1) {
            setAmountStr(event.target.value);
            setAmountStrError(false);
        } else {
            setAmountStrError(true);
        }
    };

    // Checkout
    async function handleCheckout() {
        if (!amountStrError) {
            setOpenSnackbar(false);
            setOpenLoading(true);

            // 调用合约fund函数
            // 转换ICP单位为DOM单位(1ICP = 100_000_000dom)
            let amount = mul(amountStr, 1e8.toString());
            grantContract.fund(BigInt(amount)).then((res) => {
                // 交易结果Boolean
                if (res) {
                    onOpenPayNowDialogChange();
                    setOpenLoading(false);
                    showSnackbar('success', 'The transaction was successful!');
                } else {
                    setOpenLoading(false);
                    showSnackbar('error', 'This transaction has failed!');
                }
            }, (err) => {
                // 交易被拒
                setOpenLoading(false);
                showSnackbar('error', err.toString());
            });
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
                                    value={amountStr}
                                    onChange={handleAmountStrChange}
                                    endAdornment={<InputAdornment position="end">ICP</InputAdornment>}
                                    aria-describedby="outlined-amount-helper-text"
                                    size="small"
                                    error={amountStrError}
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
                                <Button sx={{ backgroundColor: '#00BCC2 !important', fontFamily: 'Urbanist', width: '10.88rem', height: '1.75rem', color: '#fff' }} onClick={handleCheckout}>Check out</Button>
                            </Item>
                        </Grid>
                        <Grid item xs={2}>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>

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
};


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});