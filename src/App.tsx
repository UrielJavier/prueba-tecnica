import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit';

import { Dashboard, Login, Submissions, TaxForm } from "@pages";
import { Layout, PrivateRoutes } from '@components';
import reducers from '@reducers';
import rootSaga from '@sagas';
import './appStyles.css';

const saga = createSagaMiddleware();
const store = configureStore({
    reducer: reducers,
    middleware: [saga]
})
saga.run(rootSaga);

const App: FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route element={<PrivateRoutes redirectRoute={'/'} />}>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/dashboard/submissions" element={<Submissions />} />
                            <Route path="/dashboard/:taxId" element={<TaxForm />} />
                        </Route>
                        <Route path='*' element={<p>que haces aqui?</p>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>
    );
};

export default App;