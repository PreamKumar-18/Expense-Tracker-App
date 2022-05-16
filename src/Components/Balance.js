import { Typography, makeStyles, Box } from "@material-ui/core";

const useStyle = makeStyles({
    balance: {
        fontSize: 20,
    },
});

const Balance = ({ transactions }) => {
    const classes = useStyle();
    const amount = transactions.map((transaction) => transaction.amount);
    const total = amount
        .reduce((amount, item) => (amount = amount + item), 0)
        .toFixed(2);
    return (
        <Box>
            <Typography clasName={classes.balance}>Balance : ₹{total}</Typography>
        </Box>
    );
};
export default Balance;
