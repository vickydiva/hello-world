 function Header() {
    return (
      <div className="flex overflow-clip w-full px-2 h-17 justify-between right-0 left-0">
        <a href="/">
          <div
            className={`h-full mask-center w-38 mask-cover mask-[url('src/assets/netflix_logo.svg')] mask-no-repeat bg-red-600`}
          ></div>
        </a>
        <div className="flex items-center">
          <button className="px-4 py-[6px] z-1 rounded-3xl bg-white text-black text-sm font-semibold">
            Sign In
          </button>
        </div>
      </div>
    );
  }
  export default Header