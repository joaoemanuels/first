
import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './components/Pai'

ReactDOM.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva" />
    {/* Como passar os componentes filhos */}

    <Pai />
  </div>,
  document.getElementById("root"))