import React, { useState } from 'react';
import CommonBtn from 'src/components/common_btn/common_btn';
import TestApi from 'src/service/api/test_api';
import styles from './index.module.css';

const Main = () => {
    const [result, setResult] = useState();

    const api = new TestApi();

    const testBtn1 = [
        {
            title: 'get',
            bg: '#ef5350',
            onClick: async (failTest = false) => {
                let params;

                if (failTest) {
                    params = { b: 1 };
                } else {
                    params = { a: 1 };
                }

                const res = await api.getTest(params);

                if (res !== undefined) {
                    setResult(res);
                } else if (result !== undefined) {
                    setResult(undefined);
                }
            },
        },
        {
            title: 'post/data',
            bg: '#42a5f5',
            onClick: async (failTest = false) => {
                let model;

                if (failTest) {
                    model = { a: 1 };
                } else {
                    model = {
                        a: 1, b: 2
                    };
                }

                const res = await api.postTest(model);

                if (res !== undefined) {
                    setResult(res);
                } else if (result !== undefined) {
                    setResult(undefined);
                }
            },
        },
        {
            title: 'post/formData',
            bg: '#66bb6a',
            onClick: async (failTest = false) => {
                let model;

                if (failTest) {
                    model = { a: 3 };
                } else {
                    model = {
                        a: 3, b: 4
                    };
                }

                const res = await api.formDataTest(model);

                if (res !== undefined) {
                    setResult(res);
                } else if (result !== undefined) {
                    setResult(undefined);
                }
            }
        },
    ];

    return (
        <div className={styles.div_main}>
            <p>정상 테스트</p>
            <div>
                {testBtn1.map((e, i) => (<CommonBtn key={`btn1-${i}`} backgroundColor={e.bg} margin=
                    "10px" onClick={() => e.onClick()}>
                    {e.title}
                </CommonBtn>))}
            </div>
            <p>비정상 테스트</p>
            <div>
                {testBtn1.map((e, i) => (<CommonBtn key={`btn2-${i}`} backgroundColor={e.bg} margin=
                    "10px" onClick={() => e.onClick(true)}>
                    {e.title}
                </CommonBtn>))}
            </div>
            <div>
                {result !== undefined && JSON.stringify(result)}
            </div>
        </div>
    );
};

export default Main;