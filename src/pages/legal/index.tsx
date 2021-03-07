import * as React from 'react';
import { navigate } from 'gatsby';

export default function LegalPage() {
  React.useEffect(() => {
    navigate('/legal/terms-of-use');
  }, []);

  return 0;
}
