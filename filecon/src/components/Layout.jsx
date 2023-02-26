const LayoutComponent = ({ children }) => {
  return (
    <div className="flex flex-1 flex-col relative bg-primaryBg w-full">
      <nav className="w-full h-16 px-10 flex top-0 left-0 right-0 fixed bg-primaryBg shadow-sm border-b-1 border-primaryLight flex-row items-center justify-end">
        <button className="bg-primaryLight px-4 py-2 rounded-md text-primaryText font-medium ">
          Connect wallet
        </button>

        {/* <div className="bg-pink-300 px-4 py-2 rounded-md text-white font-medium ">
          <h4>0xAddress</h4>
        </div> */}
      </nav>
      <div className="mt-16">{children}</div>
    </div>
  )
}

export default LayoutComponent
