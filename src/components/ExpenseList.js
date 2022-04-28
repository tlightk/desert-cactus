import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetExpenses } from '../services/expenses';

export default () => {
    // hook used to get dispatch needed from services
    const dispatch = useDispatch();

    useEffect(() => {
        // empty array to call once
        GetExpenses(dispatch);
    }, []);

    return 'expense list';
}