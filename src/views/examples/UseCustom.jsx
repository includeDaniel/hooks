import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { useCounter } from "../../hooks/useCounter";

const UseRef = (props) => {
  const [count, inc, dec] = useCounter(10);

  return (
    <div className="UseCustom">
      <PageTitle
        title="Seu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button onClick={() => dec()} className="btn">
            -10
          </button>
          <button onClick={() => inc()} className="btn">
            +10
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
