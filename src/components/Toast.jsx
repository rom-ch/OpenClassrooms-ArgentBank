function Toast() {
  return (
    <div className="absolute right-4 top-4 flex w-96 items-center gap-4 rounded bg-sky-600 px-4 py-6 text-white">
      <button className="absolute right-2 top-0.5 h-2 w-2">x</button>
      <span>
        <i className="fa-solid fa-check"></i>
      </span>
      <p>Lorem ipsum dolor sit, amet consectetur</p>
      <div></div>
    </div>
  );
}

export default Toast;
