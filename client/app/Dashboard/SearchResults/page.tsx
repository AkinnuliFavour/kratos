import SearchInput from "@/components/SearchInput"


const SearchResults = () => {
  return (
    <div className='w-full mt-[39px]'>
      <div className="px-4 w-full space-y-2.5">
        <h1 className="text-(--gold-yellow) font-medium text-xl">Search Results</h1>
        <div className="h-0.5 bg-(--gold-yellow) w-full"></div>
      </div>

      <section className="w-full px-4 flex items-center flex-wrap gap-[5px] mt-5">
        {
          Array.from({length: 3}).map((_, index)=>(
            <div className="bg-[#D9D9D9] w-[143px] h-[31px] rounded-[77px]">
              
            </div>
          ))
        }
      </section>

      <section className="w-full px-4 mt-[27px]"></section>
    </div>
  )
}

export default SearchResults