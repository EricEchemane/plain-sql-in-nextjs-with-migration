'use server';

import sql from '@/db/pg';
import { UserInsert } from '@/interfaces/user.interfaces';
import { revalidatePath } from 'next/cache';

export async function insertNewUserAction(
  _: { message: string; ok: boolean },
  formData: FormData
) {
  const entry = Object.fromEntries(formData.entries()) as UserInsert;
  try {
    await sql`
      insert into users (first_name, last_name, email)
      values (${entry.first_name}, ${entry.last_name}, ${entry.email})
    `;
    revalidatePath('/');
    return { message: `Added`, ok: true };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    return { message: e.message ?? 'Failed to insert user', ok: false };
  }
}
