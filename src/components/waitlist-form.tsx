"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { joinWaitlist } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Signing Up...
        </>
      ) : (
        <>
          Sign Up
          <ArrowRight className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export function WaitlistForm() {
  const initialState = { message: null, errors: {}, success: false };
  const [state, dispatch] = useFormState(joinWaitlist, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        const errorMessages = Object.values(state.errors || {}).flat().join(' ');
        toast({
          title: "Oops! Something went wrong.",
          description: errorMessages || state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={dispatch} className="mx-auto mt-8 max-w-md w-full space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="email" className="sr-only">Email address</label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
            className="h-12 text-base"
            aria-describedby="email-error"
          />
        </div>
        <SubmitButton />
      </div>
       {state?.errors?.email && (
        <p id="email-error" className="text-sm text-destructive text-left">{state.errors.email[0]}</p>
      )}
    </form>
  );
}
