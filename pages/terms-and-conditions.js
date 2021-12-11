/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';

/* -------------------------- Internal Dependencies ------------------------- */
import TermsAndConditions from 'pages/terms-and-conditions';
import Layout from 'components/layout';

export default function DrugStocCreditPage() {
    return (
        <Layout title="Terms and Conditions">
            <TermsAndConditions />
        </Layout>
    );
}
