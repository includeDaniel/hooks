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
    const toggleContent = (c1, c2, id) => {
        setItems(items.map((m, i) => (i === id ? (c1 === m ? c2 : c1) : m)));
    };
    const filter = (content) => {
        items.filter((f) => f === content);
    };
    const clearContent = (content) => {
        setItems(items.filter((f) => f !== content));
    };

    return {
        items,
        action: { append, remove, edit, filter, clearContent, toggleContent },
    };
};
