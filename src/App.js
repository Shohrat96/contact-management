import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import {GlobalProvider } from './context/GlobalState';
import { ToastContainer} from 'react-toastify';
import 'antd/dist/antd.css';
import styles from "./App.module.scss";
import Contacts from './containers/Contacts/Contacts';
import CreateContact from './containers/CreateContact/CreateContact';
import EditContact from './containers/EditContact/EditContact';
import {notify} from './utils/toastMessage';
import { Layout } from 'antd';

const { Header, Content } = Layout;

function App() {

  return (
    <Layout className={styles.container}>
      <Header className={styles.header}>
        <Link to="/contacts" className={styles.navItem}>Contacts</Link>
        <Link to="/contacts/new" className={`${styles.navItem} ${styles.createContact}`}>Create Contact</Link>
      </Header>

      <Content >
        <GlobalProvider>
          <Switch>
            <Route path="/" component={Contacts} exact />
            <Route path="/contacts" component={Contacts} exact />
            <Route path="/contacts/new" component={()=>(<CreateContact showToast={notify}/>)} exact />
            <Route path="/contacts/edit/:id" component={(props)=>(<EditContact showToast={notify} {...props}/>)} exact />
          </Switch>
        </GlobalProvider>
        <ToastContainer/>
      </Content>
    </Layout>
  );
}

export default App;
