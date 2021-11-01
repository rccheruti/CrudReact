import React from "react"
import Main from "../template/Main"

const home = props =>
  <Main icon="home" title="Início" subtitle="Segundo projeto do capítulo de React.">
    <div className="display-4">Bem vindo!</div>
    <hr />
    <p className="mb-0">Sistema para exemplificar a construção de um crud em React</p>
  </Main>
export default home;