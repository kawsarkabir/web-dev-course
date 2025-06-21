import { use } from 'react';


export default function Users({usersPromise}) {
  const userContent = use(usersPromise)
  console.log(userContent)
  return (
    <div>Users: {userContent.length}</div>
  )
}
