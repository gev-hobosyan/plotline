type ContentType = 'movies' | 'books';

interface Props {
  contentType: ContentType | undefined
  handleSwitch: (type: ContentType) => void
}

export default function ContentTypeSwitcher({ contentType, handleSwitch }: Props) {
  return (
    <>
      <input checked={contentType === "books"} type="checkbox" id="contentTypeToggle" className='w-0 h-0 hidden peer' onChange={() => { handleSwitch(contentType === "movies" ? "books" : "movies") }} />
      <label htmlFor="contentTypeToggle" className='w-20 h-10 relative block bg-m-dark/20 rounded-full cursor-pointer after:content-[""] after:w-8 after:h-8 after:absolute after:top-[0.2rem] after:left-[0.2rem] after:bg-white after:rounded-full peer-checked:after:left-11 after:transition-all peer-checked:after:translate-x-[0%] duration-300 peer-checked:bg-b-dark/20 border border-m-dark peer-checked:border-b-dark backdrop-blur'></label>
    </>
  );
}