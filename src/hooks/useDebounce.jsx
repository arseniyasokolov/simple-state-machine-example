import { useState, useEffect } from 'react';

export const useDebounce = (onUpdate) => {
    const [value, updateValue] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => onUpdate(value), 100);
        return () => clearTimeout(timeout);
    }, [value]);

    return [value, updateValue];
};