import Image from 'next/image'
export const Search = () => {
    return (
        <div className="max-w-[650px] md:w-full mx-auto gap-10 flex flex-row rounded-lg px-3 py-2 md:bg-white bg-[#F2B21B]">
            <input
                type='text'
                placeholder="Type in the first letters of the country / region you are looking for?"
                className="px-3 outline-none grow text-[18px] text-[#828282] max-md:hidden"
            />
            <button className='my-auto bg-primary-solid xl:w-12 xl:h-12 w-[30px] h-[30px] rounded-lg'>
                <Image
                    src="/assets/Homepage/Icons/SVG Icon/Search.svg"
                    width={24}
                    height={24}
                    alt="serach-icon"
                    className='mx-auto align-middle max-xl:w-[18px] '
                />
            </button>
        </div>
    )
}