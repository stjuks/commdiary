import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/util/styled';
import history from '@/util/history';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './styles';
import { observer } from 'mobx-react-lite';
import Modal from '../Modal';
import App from '../App';
import PrintableDiaries from '../PrintableDiaries';

const Root: React.FC = observer(() => {
  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <GlobalStyle />
        <Modal />
        <Switch>
          <Route exact path="/print" component={PrintableDiaries} />
          <Route path="/" component={App} />
        </Switch>
      </MemoryRouter>
    </ThemeProvider>
  );
});

export default Root;
