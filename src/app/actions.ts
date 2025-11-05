"use server";

import { z } from "zod";

const waitlistSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export async function joinWaitlist(prevState: any, formData: FormData) {
  const validatedFields = waitlistSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed.",
      success: false,
    };
  }
  
  const { email } = validatedFields.data;

  try {
    // In a real application, you would add the email to your database
    // (e.g., Firestore) or a mailing list service.
    console.log(`Email added to waitlist: ${email}`);

    return {
      message: "Success! You've been added to the waitlist.",
      errors: {},
      success: true,
    };
  } catch (error) {
    return {
      message: "An unexpected error occurred. Please try again.",
      errors: {},
      success: false,
    };
  }
}
