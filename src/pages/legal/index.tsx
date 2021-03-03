import * as React from 'react';
import { navigate } from 'gatsby';

const LegalPage = () => {
  React.useEffect(() => {
    navigate('/legal/terms-of-use');
  }, []);

  return 0;
};

export default LegalPage;
