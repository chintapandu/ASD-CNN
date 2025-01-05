export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function validateOTP(inputOTP, storedOTP) {
  return inputOTP === storedOTP;
}

export async function sendEmailOTP(email, otp) {
  console.log(`Sending OTP ${otp} to email: ${email}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'OTP sent successfully to email' });
    }, 1000);
  });
}

export async function sendSMSOTP(phone, otp) {
  console.log(`Sending OTP ${otp} to phone: ${phone}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'OTP sent successfully to phone' });
    }, 1000);
  });
}