import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { useTodo } from "../../hooks/useTodo";

const UseRef = (props) => {
  const {items, action} = useTodo() 

  return (
    <div className="UseCustom">
      <PageTitle
        title="Seu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
            <button onClick={() => action.append(10)}>Append</button>
            <button onClick={() => action.remove(0)}>Remove</button>
            <button onClick={() => action.edit(1, 11)}>Edit</button>
            <button onClick={() => action.filter(11)}>Filter</button>
            <button onClick={() => action.clearContent(10)}>ClearContent</button>
            <button onClick={() => action.toggleContent(11, 10, 2)}>ToggleContent</button>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
