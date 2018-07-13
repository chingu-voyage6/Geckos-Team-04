import React from 'react';
import Layout from '../../Layout/Layout';
import { PolicySnap, PolicyTitle } from './Privacy';

const Policy = () => (
  <PolicySnap>
    <PolicyTitle>Terms of Use</PolicyTitle>
    <p>
      <em>Last Updated: December 7, 2016</em>
    </p>
    <h3>ACCEPTANCE OF THESE TERMS</h3>
    <p>
      This Terms of Use Agreement ("Terms"), including the
      <strong>
        <a href="#ARBITRATION-AND-CLASS-ACTION-WAIVER">
          BINDING ARBITRATION AND CLASS ACTION WAIVER CONTAINED HEREIN
        </a>
      </strong>
      govern your access to, use of, and participation in the Platform made available by Thumbtack,
      Inc. ("Thumbtack," "we," "our," or "us") or through Thumbtack and the entirety of your
      relationship with Thumbtack. PLEASE READ THE TERMS THOROUGHLY AND CAREFULLY. BY USING THE
      PLATFORM, YOU AGREE TO BE BOUND BY THESE TERMS. AS DETAILED IN THE{' '}
      <strong>
        <a href="#ELIGIBILITY-INFO">
          ELIGIBILITY, SERVICE MEMBER REPRESENTATIONS, WARRANTIES, AND USE OF THE PLATFORM SECTION
        </a>
      </strong>{' '}
      BELOW, IF YOU ARE A SERVICE MEMBER, YOU UNDERSTAND AND AGREE THAT THUMBTACK USES YOUR
      INFORMATION TO OBTAIN BACKGROUND CHECKS FROM ITS VENDORS. IF YOU DO NOT AGREE TO THESE TERMS,
      THEN YOU MAY NOT ACCESS OR USE THE PLATFORM.
    </p>
    <p>
      All references to "you" or "your," as applicable, mean the person who accesses, uses, and/or
      participates in the Platform in any manner, and each of your heirs, assigns, and successors.
      If you use the Platform on behalf of an entity, you represent and warrant that you have the
      authority to bind that entity, your acceptance of the Terms will be deemed an acceptance by
      that entity, and "you" and "your" herein shall refer to that entity.
    </p>
    <h3>MODIFICATIONS</h3>
    <p>
      Thumbtack reserves the right, in its sole discretion, to modify these Terms, and any other
      documents incorporated by reference herein, at any time and without prior notice. Thumbtack
      will notify you of changes by posting on the
      <a href="https://www.thumbtack.com/terms/">Thumbtack Terms of Use website</a>, sending you a
      message, or otherwise notifying you when you are logged into your account. Amendments will
      become effective thirty (30) days after they are posted on the Platform or a message is sent
      to you, or you are otherwise notified when you are logged into your account. Your use of the
      Platform after the expiration of the thirty (30) days shall constitute your consent to the
      changes. If you do not agree, you may not access or use the Platform.
    </p>
    <h3>ADDITIONAL TERMS AND POLICIES</h3>
    <p>
      Please review <a href="http://www.thumbtack.com/privacy">Thumbtack's Privacy Policy</a>,
      incorporated herein by reference, for information and notices concerning Thumbtack's
      collection and use of your information. The provision and delivery of text messages by
      Thumbtack or our text message service providers is governed by our{' '}
      <a href="https://help.thumbtack.com/?ar=kA131000000BOWj">SMS Terms and Conditions</a>, which
      are expressly incorporated herein. The Thumbtack Guarantee is governed by the
      <a href="https://help.thumbtack.com/?ar=kA131000000FxdV#!:top:pro">
        Thumbtack Guarantee Terms and Conditions
      </a>, which are expressly incorporated herein. Please review the full set of key
      <a href="https://help.thumbtack.com/?ar=kA131000000NylD">Thumbtack policies</a>
      that govern your use of the Platform and our interactions with you and third parties. Certain
      areas of and/or products on the Platform may have different terms and conditions posted or may
      require you to agree with and accept additional terms and conditions or policies. If there is
      a conflict between these Terms and the terms and conditions or policies posted for a specific
      area or product, the latter take precedence with respect to your use of that area or product.
    </p>
    <h3>KEY TERMS</h3>
    <p>"Collective Content" means User Content and Thumbtack Content together.</p>
    <p>
      "Content" means text, graphics, images, music, software, audio, video, information or other
      materials, including but not limited to profile information, Pro Services requests, quotes,
      message threads, reviews, scheduling and calendar information, and other information or
      materials available on or through the Platform.
    </p>
    <p>
      "Customer Member" means a Member who is registered to receive quotes for Pro Services,
      requests quotes for Pro Services, or otherwise uses the Platform to receive, pay for, review,
      or facilitate the receipt of Pro Services.
    </p>
    <p>
      "Member" means a person who completes Thumbtack's account registration process or a person who
      submits or receives a request through Thumbtack, including but not limited to Service Members
      and Customer Members.
    </p>
    <p>
      "Platform" means all Thumbtack websites, mobile or other applications, software, processes and
      any other services provided by or through Thumbtack.
    </p>
    <p>
      "Pro Services" means the services listed, quoted, scheduled, offered or provided by Service
      Members, or sought, scheduled or received by Customer Members, through the Platform.
    </p>
  </PolicySnap>
);

const Terms = () => (
  <Layout>
    <Policy />
  </Layout>
);

export default Terms;
