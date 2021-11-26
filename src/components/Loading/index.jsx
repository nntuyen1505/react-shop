import React from 'react'
import ReactLoading from 'react-loading';
import Layout from '../layout';

export default function Loading() {
    return (
        <Layout>
        <div className="loadingPage">
            <ReactLoading type="spinningBubbles" color="green" height={30} width={55} />
        </div>
        </Layout>
    )
}
