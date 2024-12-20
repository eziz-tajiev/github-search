import DarkLightBtn from "@/components/DarkLIghtBtn";
import SearchBtn from "@/components/SearchBtn";
import Image from "next/image";
import userImg from './favicon.ico'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-stone-100 p-1.5 sm:p-4 pt-10 sm:pt-12 transition-all dark:bg-slate-900">
      <div className="mx-auto flex w-full max-w-[600px] flex-col gap-8 rounded">
        <section className="flex justify-between gap-3">
          <p className="text-xl font-semibold">Github Search</p>
          <DarkLightBtn />
        </section>

        {/* search and main */}
        <section className="flex flex-col gap-6">
          {/* search and btn */}
          <SearchBtn />
          <main className="flex w-full flex-col gap-5 rounded-lg bg-white dark:bg-slate-800 px-4 py-8 min-h-[200px]">
            <section>
              {/* user image */}
              <Image
                width={200}
                height={200}
                className="h-20 w-20 rounded-full"
                src={userImg}
                alt="user-img"/>

              <section>
                <div>
                  {/* name */}
                  {/* user id */}
                </div>
                {/* joined date */}
              </section>
            </section>
          </main>
        </section>

      </div>
    </div>
  );
}
