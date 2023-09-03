const Filtration = ({filter}) => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex items-center gap-2 w-[80%]">
        <button
          className="w-full max-w-[82px] h-[46px] rounded-3xl bg-black text-white text-center font-bold"
          value="all"
          onClick={filter}
        >
          Все
        </button>
        <button
          className="w-full max-w-[132px] h-[46px] rounded-3xl hover:bg-black hover:text-white  bg-[#F9F9F9] text-black text-center font-bold"
          value="meat"
          onClick={filter}
        >
          Мясные
        </button>
        <button
          className="w-full max-w-[195px] h-[46px] rounded-3xl hover:bg-black hover:text-white  bg-[#F9F9F9] text-black text-center font-bold"
          onClick={filter}
          value="vigtails"
        >
          Вегетарианская
        </button>
        <button
          className="w-full max-w-[120px] h-[46px] rounded-3xl hover:bg-black hover:text-white  bg-[#F9F9F9] text-black text-center font-bold"
          onClick={filter}
          value="gril"
        >
          Гриль
        </button>
        <button
          className="w-full max-w-[132px] h-[46px] rounded-3xl hover:bg-black hover:text-white  bg-[#F9F9F9] text-black text-center font-bold"
          onClick={filter}
          value="fas"
        >
          Острые
        </button>
        <button
          className="w-full max-w-[145px] h-[46px] rounded-3xl hover:bg-black hover:text-white  bg-[#F9F9F9] text-black text-center font-bold"
          onClick={filter}
          value="closed"
        >
          Закрытые
        </button>
      </div>
      <div>
        <h3 className="font-bold">LOCETION NOT :(</h3>
      </div>
    </section>
  );
};

export default Filtration;
