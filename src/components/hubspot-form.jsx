import { useHubspotForm } from 'next-hubspot';

const HubspotForm = () => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: '24254847',
    formId: '4abb4985-8684-43b6-bda9-6c27b8b3886b',
    target: '#hubspot-form-wrapper',
    onFormSubmitted: () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-11192435865/We-3CITN-aQYEJmJ_Ngp',
        });
      }
    },
  });

  return <div id="hubspot-form-wrapper" />;
};

export default HubspotForm;
