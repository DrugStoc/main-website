/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';

/* -------------------------- Internal Dependencies ------------------------- */
import Job from 'pages/careers/job';
import Layout from 'components/layout';

export default function jobpage() {
    return (
        <Layout title="Job">
            <Job/>
        </Layout>
    );
}