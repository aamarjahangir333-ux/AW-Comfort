/**
 * Web3Forms API Integration for AW Comfort
 * Form Access Key registered to: AWcomfort@hotmail.com
 */
export const WEB3FORMS_ACCESS_KEY = 'beee50fa-4b30-4ac5-9ede-8a39d155a5f8';
export const CLIENT_NOTIFICATION_EMAIL = 'AWcomfort@hotmail.com';

interface FormSubmissionPayload {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  urgency?: string;
  location?: string;
  city?: string;
  notes?: string;
  message?: string;
  formType: 'Booking Modal Quote' | 'Contact Page Dispatch' | 'Homepage Quote Form';
}

export async function submitToWeb3Forms(payload: FormSubmissionPayload): Promise<{ success: boolean; message?: string }> {
  try {
    const referenceCode = `AW-${Math.floor(100000 + Math.random() * 900000)}`;
    const submissionTime = new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' });
    const serviceChosen = payload.service || 'Furnace';
    const urgencyChosen = payload.urgency || 'Standard';
    const locationChosen = payload.city || payload.location || 'Mississauga / GTA';
    const clientNotes = payload.notes || payload.message || 'None provided';

    // Compile a full, clear text summary into the standard "message" field so it's guaranteed to appear prominently in the Hotmail inbox
    const fullMessageBody = [
      `=========================================`,
      `AW COMFORT - NEW LEAD NOTIFICATION`,
      `=========================================`,
      `Ref Code: ${referenceCode}`,
      `Source: ${payload.formType}`,
      `Time: ${submissionTime} (EST)`,
      ``,
      `--- CUSTOMER DETAILS ---`,
      `Customer Name: ${payload.name}`,
      `Phone Number: ${payload.phone}`,
      payload.email ? `Email: ${payload.email}` : '',
      ``,
      `--- SERVICE DETAILS ---`,
      `Service Requested: ${serviceChosen}`,
      `Urgency Level: ${urgencyChosen}`,
      `Location / City: ${locationChosen}`,
      ``,
      `--- ISSUE DETAILS / LOCATION NOTES ---`,
      `${clientNotes}`,
      `=========================================`,
    ].filter(Boolean).join('\n');

    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', `[${urgencyChosen.toUpperCase() === 'EMERGENCY' ? '🚨 EMERGENCY' : 'New Quote'}] ${serviceChosen} - ${payload.name} (${payload.phone})`);
    formData.append('from_name', 'AW Comfort Web Portal');
    
    // Standard Web3Forms recognized fields
    formData.append('name', payload.name);
    formData.append('phone', payload.phone);
    if (payload.email) {
      formData.append('email', payload.email);
      formData.append('replyto', payload.email);
    }
    formData.append('service', serviceChosen);
    formData.append('urgency', urgencyChosen);
    formData.append('location', locationChosen);
    formData.append('notes', clientNotes);
    formData.append('message', fullMessageBody);
    
    // Custom label fields
    formData.append('Service_Type', serviceChosen);
    formData.append('Issue_Details_And_Location', clientNotes);
    formData.append('Reference_Number', referenceCode);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      return { success: true };
    } else {
      console.warn('Web3Forms response:', data);
      return { success: false, message: data.message || 'Submission failed' };
    }
  } catch (error) {
    console.error('Error submitting to Web3Forms:', error);
    return { success: false, message: 'Network error submitting request' };
  }
}
