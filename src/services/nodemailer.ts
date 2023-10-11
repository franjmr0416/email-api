import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'gator2024.hostgator.com',
  port: 465,
  secure: true,
  auth: {
    user: '',
    pass: '',
  },
})

export { transporter }
