import TrainingsView from "../Components/TrainingsView";

export default function () {
  return (
    <>
    <div className="text-4xl font-bold px-4 my-5">
      トレーニング博物館
    </div>
      <TrainingsView
        onClickFactory={(training) => () => {
          /* TODO */
        }}
      />
    </>
  );
}
