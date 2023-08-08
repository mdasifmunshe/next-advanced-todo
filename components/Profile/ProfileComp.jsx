export default function ProfileComp({ user }) {
  return (
    <div className="flex flex-col">
      <div>User Details:</div>
      <div>Name: {user?.name}</div>
      <div>Email: {user?.email}</div>
    </div>
  );
}
