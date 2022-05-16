import { useState } from "react";
import { Typography, Box, TextField } from "@material-ui/core";
import '../App.css'

const NewTransactions = ({ addTransactions }) => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    const newTransactions = (e) => {
        const transaction = {
            id: Math.floor(Math.random() * 1000000000),
            text: text,
            amount: +amount,
        };
        addTransactions(transaction);
        setText("");
        setAmount("");
    };
    return (
        <>
            <Typography>New Transactions</Typography>
            <Box>
                <TextField
                    value={text}
                    label="Enter Text"
                    onChange={(e) => setText(e.target.value)}
                />
            </Box>
            <Box>
                <TextField
                    value={amount}
                    label="Enter Amount"
                    onChange={(e) => setAmount(e.target.value)}
                />
            </Box>
            <button className="button" onClick={newTransactions}>Add Transaction</button>
        </>
    );
};

export default NewTransactions;
