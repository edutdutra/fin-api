import express from 'express';
import { v4 } from 'uuid';

const app = express();

app.use(express.json());

const custumers = [];

app.post('/account', (req, res) => {
    const {cpf, name} = req.body;

    const customerAlreadyExists = custumers.some((customer) => customer.cpf === cpf);

    if(customerAlreadyExists) {
        return res.status(400).json({error: "Customer already exists!"})
    }

    custumers.push({
        cpf,
        name,
        id: v4(),
        statement: []
    });

    return res.status(201).send();
});

app.listen(3333);