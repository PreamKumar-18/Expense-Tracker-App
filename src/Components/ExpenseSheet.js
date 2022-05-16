import {
    Card,
    CardContent,
    makeStyles,
    Typography,
    Box,
} from "@material-ui/core";

const useStyle = makeStyles({
    container: {
        display: "flex",
    },
    trade: {
        flex: 1,
        padding: 10,
    },

    income: {
        color: "green",
    },
    expense: {
        color: "red",
    },
});
const ExpenseSheet = ({ transactions }) => {
    const styles = useStyle();
    const amount = transactions.map((transaction) => transaction.amount);
    const income = amount
        .filter((item) => item > 0)
        .reduce((acc, item) => (acc = acc + item), 0)
        .toFixed(2);
    const expense = amount
        .filter((item) => item < 0)
        .reduce((acc, item) => (acc = acc + item), 0)
        .toFixed(2);
    return (
        <Box>
            <Card className={styles.container}>
                <CardContent className={styles.trade}>
                    <Typography>Income </Typography>
                    <Typography className={styles.income}>+{income}</Typography>
                </CardContent>
                <CardContent className={styles.trade}>
                    <Typography>Expenses </Typography>
                    <Typography className={styles.expense}>{expense}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ExpenseSheet;
