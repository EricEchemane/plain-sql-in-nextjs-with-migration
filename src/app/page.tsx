import sql from '@/db/pg';
import { User } from '@/interfaces/user.interfaces';
import dayjs from 'dayjs';
import Link from 'next/link';

export default async function Home() {
  const users = await sql<User[]>`select * from users`;

  return (
    <div className="p-4">
      <div className="my-4 flex items-baseline gap-4">
        <h1 className="text-3xl font-bold">Users</h1>
        <Link href="/users/new">
          <button>New</button>
        </Link>
      </div>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-baseline gap-4"
          >
            <div>{user.email}</div>
            <div>
              {dayjs(user.created_at).format('MMM. DD, YYYY - hh:mm A')}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
