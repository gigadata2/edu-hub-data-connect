<<<<<<< HEAD
// Email API endpoint (backend server)
const EMAIL_API_URL = import.meta.env.VITE_EMAIL_API_URL || 'http://localhost:3001';
=======
// Email API endpoint (Netlify Functions)
// In production, this will be /.netlify/functions/send-email
// In development with Netlify Dev, it's also /.netlify/functions/send-email
const EMAIL_API_URL = import.meta.env.VITE_EMAIL_API_URL || '/.netlify/functions/send-email';
>>>>>>> e213daa1b7e8a8e58369b4e2ff7b60763c6d39c3

export interface WelcomeEmailData {
  fullName: string;
  email: string;
}

export interface BundlePurchaseEmailData {
  fullName: string;
  email: string;
  orderId: string;
  network: string;
  package: string;
  phoneNumber: string;
  amount: number;
  status: string;
}

export interface WalletTopUpEmailData {
  fullName: string;
  email: string;
  amount: number;
  reference: string;
  newBalance: number;
}

/**
 * Send welcome email to new user
 */
export async function sendWelcomeEmail(data: WelcomeEmailData): Promise<boolean> {
  try {
<<<<<<< HEAD
    const response = await fetch(`${EMAIL_API_URL}/api/email/welcome`, {
=======
    const response = await fetch(EMAIL_API_URL, {
>>>>>>> e213daa1b7e8a8e58369b4e2ff7b60763c6d39c3
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
<<<<<<< HEAD
=======
        type: 'welcome',
>>>>>>> e213daa1b7e8a8e58369b4e2ff7b60763c6d39c3
        fullName: data.fullName,
        email: data.email,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to send email');
    }

    const result = await response.json();
    console.log('Welcome email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return false;
  }
}

/**
 * Send bundle purchase confirmation email
 */
export async function sendBundlePurchaseEmail(data: BundlePurchaseEmailData): Promise<boolean> {
  try {
<<<<<<< HEAD
    const response = await fetch(`${EMAIL_API_URL}/api/email/bundle-purchase`, {
=======
    const response = await fetch(EMAIL_API_URL, {
>>>>>>> e213daa1b7e8a8e58369b4e2ff7b60763c6d39c3
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
<<<<<<< HEAD
=======
        type: 'bundle-purchase',
>>>>>>> e213daa1b7e8a8e58369b4e2ff7b60763c6d39c3
        fullName: data.fullName,
        email: data.email,
        orderId: data.orderId,
        network: data.network,
        package: data.package,
        phoneNumber: data.phoneNumber,
        amount: data.amount,
        status: data.status,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to send email');
    }

    const result = await response.json();
    console.log('Bundle purchase email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending bundle purchase email:', error);
    return false;
  }
}

/**
 * Send wallet top-up confirmation email
 */
export async function sendWalletTopUpEmail(data: WalletTopUpEmailData): Promise<boolean> {
  try {
<<<<<<< HEAD
    const response = await fetch(`${EMAIL_API_URL}/api/email/wallet-topup`, {
=======
    const response = await fetch(EMAIL_API_URL, {
>>>>>>> e213daa1b7e8a8e58369b4e2ff7b60763c6d39c3
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
<<<<<<< HEAD
=======
        type: 'wallet-topup',
>>>>>>> e213daa1b7e8a8e58369b4e2ff7b60763c6d39c3
        fullName: data.fullName,
        email: data.email,
        amount: data.amount,
        reference: data.reference,
        newBalance: data.newBalance,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to send email');
    }

    const result = await response.json();
    console.log('Wallet top-up email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending wallet top-up email:', error);
    return false;
  }
}
