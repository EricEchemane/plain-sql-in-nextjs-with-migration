'use client';

import { insertNewUserAction } from '@/actions/users.actions';
import { useRouter } from 'next/navigation';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

export default function Page() {
  const router = useRouter();
  const [state, action] = useActionState(insertNewUserAction, {
    message: '',
    ok: false,
  });

  if (state.ok) {
    router.back();
  }

  return (
    <form
      action={action}
      className="flex flex-col gap-4 max-w-md p-4"
    >
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        required
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        required
      />
      {state.message && <div>{state.message}</div>}
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      aria-disabled={pending}
      type="submit"
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}
