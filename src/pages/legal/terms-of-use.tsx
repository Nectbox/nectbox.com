import * as React from 'react';
import { DefaultLayout, Link, Section, SEO } from '../../components';
import { Flex } from '@chakra-ui/react';
import { BigHeading, NormalText, OrderList, ListItem } from '../../styles/text';

const PrivacyPage = () => {
  const ctaRef = React.useRef(null);

  return (
    <DefaultLayout heroCtaRef={ctaRef}>
      <SEO pathname={location.pathname} title='Terms of use' />
      <Section caption='legal' title='Terms of use'>
        <Flex direction='column'>
          <NormalText>
            These Terms of Service govern your use of the website located at{' '}
            <Link to='/'>https://nectbox.com/</Link> and any related services
            provided by Nectbox.{' '}
          </NormalText>
          <NormalText>
            By accessing <Link to='/'>https://nectbox.com/</Link>, you agree to
            abide by these Terms of Service and to comply with all applicable
            laws and regulations. If you do not agree with these Terms of
            Service, you are prohibited from using or accessing this website or
            using any other services provided by Nectbox.{' '}
          </NormalText>
          <NormalText>
            We, Nectbox, reserve the right to review and amend any of these
            Terms of Service at our sole discretion. Upon doing so, we will
            update this page. Any changes to these Terms of Service will take
            effect immediately from the date of publication.{' '}
          </NormalText>
          <NormalText>
            These Terms of Service were last updated on 3 March 2021.{' '}
          </NormalText>
          <BigHeading>Limitations of Use</BigHeading>
          <NormalText>
            By using this website, you warrant on behalf of yourself, your
            users, and other parties you represent that you will not:{' '}
          </NormalText>
          <OrderList>
            <ListItem>
              modify, copy, prepare derivative works of, decompile, or reverse
              engineer any materials and software contained on this website;
            </ListItem>
            <ListItem>
              remove any copyright or other proprietary notations from any
              materials and software on this website;
            </ListItem>
            <ListItem>
              transfer the materials to another person or “mirror” the materials
              on any other server;
            </ListItem>
            <ListItem>
              knowingly or negligently use this website or any of its associated
              services in a way that abuses or disrupts our networks or any
              other service Nectbox provides;
            </ListItem>
            <ListItem>
              use this website or its associated services to transmit or publish
              any harassing, indecent, obscene, fraudulent, or unlawful
              material;
            </ListItem>
            <ListItem>
              use this website or its associated services in violation of any
              applicable laws or regulations;
            </ListItem>
            <ListItem>
              use this website in conjunction with sending unauthorized
              advertising or spam;
            </ListItem>
            <ListItem>
              harvest, collect, or gather user data without the user’s consent;
              or
            </ListItem>
            <ListItem>
              use this website or its associated services in such a way that may
              infringe the privacy, intellectual property rights, or other
              rights of third parties.
            </ListItem>
          </OrderList>
          <BigHeading>Intellectual Property</BigHeading>
          <NormalText>
            The intellectual property in the materials contained in this website
            are owned by or licensed to Nectbox and are protected by applicable
            copyright and trademark law. We grant our users permission to
            download one copy of the materials for personal, non-commercial
            transitory use.{' '}
          </NormalText>
          <NormalText>
            This constitutes the grant of a license, not a transfer of title.
            This license shall automatically terminate if you violate any of
            these restrictions or the Terms of Service, and may be terminated by
            Nectbox at any time.{' '}
          </NormalText>
          <BigHeading>Liability</BigHeading>
          <NormalText>
            Our website and the materials on our website are provided on an 'as
            is' basis. To the extent permitted by law, Nectbox makes no
            warranties, expressed or implied, and hereby disclaims and negates
            all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property, or
            other violation of rights.{' '}
          </NormalText>
          <NormalText>
            In no event shall Nectbox or its suppliers be liable for any
            consequential loss suffered or incurred by you or any third party
            arising from the use or inability to use this website or the
            materials on this website, even if Nectbox or an authorized
            representative has been notified, orally or in writing, of the
            possibility of such damage.{' '}
          </NormalText>
          <NormalText>
            In the context of this agreement, &ldquo;consequential loss&rdquo;
            includes any consequential loss, indirect loss, real or anticipated
            loss of profit, loss of benefit, loss of revenue, loss of business,
            loss of goodwill, loss of opportunity, loss of savings, loss of
            reputation, loss of use and/or loss or corruption of data, whether
            under statute, contract, equity, tort (including negligence),
            indemnity, or otherwise.{' '}
          </NormalText>
          <NormalText>
            Because some jurisdictions do not allow limitations on implied
            warranties, or limitations of liability for consequential or
            incidental damages, these limitations may not apply to you.{' '}
          </NormalText>
          <BigHeading>Accuracy of Materials</BigHeading>
          <NormalText>
            The materials appearing on our website are not comprehensive and are
            for general information purposes only. Nectbox does not warrant or
            make any representations concerning the accuracy, likely results, or
            reliability of the use of the materials on this website, or
            otherwise relating to such materials or on any resources linked to
            this website.{' '}
          </NormalText>
          <BigHeading>Links</BigHeading>
          <NormalText>
            Nectbox has not reviewed all of the sites linked to its website and
            is not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement, approval, or
            control by Nectbox of the site. Use of any such linked site is at
            your own risk and we strongly advise you make your own
            investigations with respect to the suitability of those sites.{' '}
          </NormalText>
          <BigHeading>Right to Terminate</BigHeading>
          <NormalText>
            We may suspend or terminate your right to use our website and
            terminate these Terms of Service immediately upon written notice to
            you for any breach of these Terms of Service.{' '}
          </NormalText>
          <BigHeading>Severance</BigHeading>
          <NormalText>
            Any term of these Terms of Service which is wholly or partially void
            or unenforceable is severed to the extent that it is void or
            unenforceable. The validity of the remainder of these Terms of
            Service is not affected.{' '}
          </NormalText>
          <BigHeading>Governing Law</BigHeading>
          <NormalText>
            These Terms of Service are governed by and construed in accordance
            with the laws of Romania. You irrevocably submit to the exclusive
            jurisdiction of the courts in that State or location.{' '}
          </NormalText>
        </Flex>
      </Section>
    </DefaultLayout>
  );
};

export default PrivacyPage;
