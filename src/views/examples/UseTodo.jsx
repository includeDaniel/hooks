import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { useTodo } from "../../hooks/useTodo";

const UseRef = (props) => {
  const {items, append, remove, edit, filter, clearStatus} = useTodo()
  console.log(items)

  return (
    <div className="UseCustom">
      <PageTitle
        title="Seu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
            <button onClick={() => append(10)}>Append</button>
            <button onClick={() => remove(0)}>Remove</button>
            <button onClick={() => edit(1, 11)}>Edit</button>
            <button onClick={() => filter(11)}>Filter</button>
            <button onClick={() => clearStatus(10)}>ClearStatus</button>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
