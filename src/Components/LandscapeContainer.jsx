/**
 * @param {{ children: React.ReactNode }} props
 */
export default function (props) {
  return (
    <div className="h-screen bg-slate-200">
      <div className="mx-auto min-h-screen max-w-md bg-white p-5 drop-shadow">
        {props.children}
      </div>
    </div>
  );
}
