export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-50 flex py-11 items-center justify-between w-full px-[3%] pointer-events-none sm:p-5 HEADER">
      <a href="" className="text-4xl font-bold pointer-events-auto sm:text-2xl">
        SKULLS NFT
      </a>
      <a href="" className="text-2xl pointer-events-auto CART sm:text-xl">
        Cart [<span>0</span>]
      </a>
    </div>
  )
}
