import { redirect } from "next/navigation";
import Image from "next/image";

export const SearchBar = () => {
  async function onSubmit(formData: FormData) {
    "use server";
    const search = formData.get("search") as string;
    if (search && search.trim().length > 0) {
      redirect(`/search?query=${encodeURIComponent(search)}`);
    }
  }

  return (
    <form
      action={onSubmit}
      className="group relative my-2 flex w-full items-center justify-items-center text-sm hidden md:block"
    >
      <label className="w-full">
        <span className="sr-only">
          Поиск и бронирование экскурсий и трансферов
        </span>
        <input
          type="text"
          name="search"
          placeholder="Поиск и бронирование экскурсий и трансферов"
          autoComplete="on"
          required
          className="h-10 w-full rounded-md bordered-input border-2 bg-white px-4 py-2 pr-10 text-sm text-black placeholder:text-neutral-500 focus:border-black focus:ring-black"
        />
      </label>
      <div className="absolute inset-y-0 right-0">
        <button
          type="submit"
          className="z-10 inline-flex aspect-square w-10 items-center justify-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 group-invalid:pointer-events-none group-invalid:opacity-80"
        >
          <span className="sr-only">Поиск</span>
          <Image
            src={"/icons/search.svg"}
            alt={"Search"}
            width={24}
            height={24}
            className="h-5 w-5"
          />
        </button>
      </div>
      {/* <button type="submit" className="right-2 h-12 items-center rounded-md bg-neutral-900 px-6 py-3 text-base font-medium leading-6 text-white shadow hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70 hover:disabled:bg-neutral-700 aria-disabled:cursor-not-allowed aria-disabled:opacity-70 hover:aria-disabled:bg-neutral-700">Поиск</button> */}
    </form>
  );
};
