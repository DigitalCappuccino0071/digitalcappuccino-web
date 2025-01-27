import { transporter, mailOptions } from '../../config/nodemailer';

export default async function handler(req, res) {
  console.log(req.body);

  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'bad request!' });
  }

  const data = req.body;
  if (
    !data.fullName ||
    !data.email ||
    !data.phoneNumber ||
    !data.services ||
    !data.message
  ) {
    return res.status(400).json({ message: 'bad request!' });
  }

  try {
    const dcEmail = process.env.GMAIL_USERNAME_NEW;
    const tusharEmail = 'tushar@digitalcappuccino.com';
    const archanaEmail = 'archana@digitalcappuccino.com';
    const mailArray = [dcEmail, tusharEmail, archanaEmail];

    await Promise.all(
      mailArray.map(async email => {
        const info = await transporter.sendMail({
          ...mailOptions,
          to: email,
          subject: data.message,
          text: 'test string',
          html: `
          <html>
            <head>
              <style>
                table {
                  width: 100%;
                  border-collapse: collapse;
                }
                th, td {
                  border: 1px solid #dddddd;
                  text-align: left;
                  padding: 8px;
                }
                th {
                  background-color: #f2f2f2;
                }
              </style>
            </head>
            <body>
              <table>
                <tr>
                  <th>Full Name</th>
                  <td>${data?.fullName}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>${data?.email}</td>
                </tr>
                <tr>
                  <th>Phone Number</th>
                  <td>${data?.phoneNumber}</td>
                </tr>
                <tr>
                  <th>Services</th>
                  <td>${data?.services}</td>
                </tr>
                <tr>
                  <th>Message</th>
                  <td>${data?.message}</td>
                </tr>
              </table>
            </body>
          </html>
        `,
        });
        console.log('Email sent:', info.response);
      })
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
