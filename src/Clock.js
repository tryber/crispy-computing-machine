import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    // O `Component` que importamos executa, internamente, um constructor próprio. Quando o customizamos desse jeito, precisamos chamar essa função `super(props)` para garantir que esse construtor dele é executado. Caso não chamássemos, somente a nossa lógica seria executada, e não a dele! Teríamos problemas! As `props` que repassamos aqui são as props do componente, se lembra?
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return <span>Relógio</span>;
  }
}

export default Clock;
