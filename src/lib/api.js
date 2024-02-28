export const sendContactForm = async data => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });
    const contactData = await response.json();
    return contactData;
  } catch (error) {
    console.log(error);
  }
};
