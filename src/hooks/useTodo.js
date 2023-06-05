import { useState } from "react";

export const useTodo = () => {
    const [items, setItems] = useState([]);

    const append = (newItem) => {
        setItems([...items, newItem]);
    };
    const remove = (id) => {
        setItems(items.filter((f, i) => i !== id));
    };
    const edit = (id, content) => {
        setItems(items.map((m, i) => (i === id ? content : m)));
    };
    // const toggleStatus = (status) => {
    //     setItems(items.map())
    // }
    const filter = (status) => {
        const i = items.filter((f) => f === status);
        console.log(i);
    };
    const clearStatus = (status) => {
        setItems(items.filter((f) => f !== status));
    };

    return { items, append, remove, edit, filter, clearStatus };
};
