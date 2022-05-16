import { Typography, Box, List, Divider } from "@material-ui/core";
import Transaction from "./Transaction";
const Transactions = ({ transactions, deleteTransactions }) => {
    return (
        <Box>
            <Typography>History</Typography>
            <Divider style={{ width: "100%" }} />
            <List>
                {transactions.map((transaction) => {
                    return (
                        <Transaction
                            transaction={transaction}
                            deleteTransactions={deleteTransactions}
                        />
                    );
                })}
            </List>
        </Box>
    );
};
export default Transactions;
