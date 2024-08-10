import Image from 'next/image'
import Link from 'next/link'

export default function Events() {
    return (
        <div className="w-full">
            <div className="max-w-[1400px] mx-auto">
                <div className="bg-sept-black relative overflow-hidden">
                    <h1 className="h-[250px] text-sept-white text-2xl sm:text-6xl px-8 place-content-center z-20">[ OUR UPCOMING EVENTS. ]</h1>
                    <svg className='absolute z-0 -right-[250px] -top-72 fill-sept-purple animate-spin-slow-reversed' xmlns="http://www.w3.org/2000/svg" width="680" height="680" viewBox="0 0 2048 1280">
                        <path d="m1021 32 12 2 8 7 4 8 3 15 7 46 8 54 8 52 11 69 11 72 7 45 4 11 4 5 7 4 5 1h7l10-4 17-12 21-16 57-42 18-13 76-56 18-13 38-28 36-26 9-6 6-2h12l6 3 5 4 5 10v11l-6 11-26 36-12 16-12 17-13 17-10 14-14 19-13 18-12 16-13 18-14 19-13 18-14 19-12 16-28 38-5 10-1 4v7l3 9 2 4 10 5 22 4 309 48 28 5 10 6 5 8 1 3v11l-5 9-6 5-9 3-83 13-125 19-82 13-59 9-11 4-5 5-3 4-2 8 1 10 5 10 10 13 13 18 42 57 13 18 28 38 13 18 42 57 13 18 14 19 10 14 11 16 3 6v12l-6 10-10 6-8 1-10-3-12-8-19-14-16-12-19-14-18-13-38-28-18-13-38-28-18-13-16-12-38-28-18-13-20-15-9-4-4-1h-7l-9 4-5 5-4 9-4 22-10 64-7 45-8 51-8 53-7 46-10 68-4 13-4 5-10 5h-13l-6-3-5-5-4-6-3-16-11-72-15-98-14-91-12-76-3-10-4-6-5-4-9-3h-7l-9 4-10 7-16 12-11 8-18 13-21 16-17 12-20 15-18 13-19 14-18 13-12 9-14 10-12 9-11 8-19 14-34 25-17 12-9 4h-12l-8-4-6-8-3-9 2-10 7-11 26-36 12-16 28-38 10-14 14-19 13-18 12-16 14-19 13-18 28-38 13-18 10-13 12-17 4-8 1-3v-8l-4-11-6-5-11-4-33-5-64-10-76-12-173-26-10-3-6-4-6-8-2-7 1-8 4-8 7-6 8-3 56-9 297-46 9-4 7-8 2-7v-8l-4-10-14-19-9-12-13-18-14-19-12-16-13-18-14-19-13-18-12-16-13-18-42-57-26-36-14-19-5-10-1-7 3-10 7-8 6-3 7-1 10 2 11 7 19 14 18 13 57 42 18 13 38 28 18 13 19 14 16 12 76 56 8 4 4 1h7l10-4 6-7 3-7 9-56 16-102 7-43 13-89 8-52 3-15 4-8 8-6z" />
                    </svg>
                    <svg className='absolute fill-sept-purple animate-spin-slow z-0' xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 2048 2048">
                        <path d="M1006 0h37v2l16 7 15 12v2h2l12 17 14 23 17 28 9 15 31 51 9 15 12 19 6 2 12 2 11-7 18-13 38-28 18-13 38-28 18-13 14-9 14-7 12-3 6-1h17l12 3 14 7 12 10 9 12 7 14 4 16 8 51 18 119 3 12 10 7h7l60-15 70-17 36-9 19-3h16l15 3 16 8 12 11 7 8 6 11 4 13 1 6v18l-5 25-13 52-18 74-8 32v7l7 11 5 3 161 25 22 4 15 5 14 8 10 9 6 7 6 10 5 15 1 6v15l-4 17-10 19-8 11-10 14-13 17-12 17-13 17-4 6-14 19-12 16-13 18-9 12v9l2 9 9 6 112 68 30 18 16 12 5 4 10 13 7 14 3 7v33l-3 3-6 13-8 11-6 7-19 13-23 14-28 17-20 12-56 34-20 12-3 3-3 12v7l13 18 9 12 10 14 14 19 13 18 12 16 13 18 14 19 11 16 8 15 4 13 1 5v17l-4 15-5 10-7 10-9 9-13 8-14 5-24 5-119 18-44 7-6 1-2 5-5 8 4 18 29 118 10 42 2 12v16l-2 10-4 11-6 11-9 10-8 7-14 7-15 4-13 1-18-2-82-20-94-23-4 1-12 8-2 6-7 46-10 65-10 64-4 15-5 12-9 13-7 7-14 9-13 5-12 2-14-1-14-3-16-8-11-7-133-98-9-6-8 1-10 2-2 5-13 22-16 26-27 45-8 13-28 46-9 11-5 5-8 7-9 5-14 6-4 1h-30l-3-3-13-6-11-8-9-9-12-17-18-30-14-23-51-84-7-11-4-2-10-2h-6l-14 10-19 14-36 26-13 10-36 26-19 14-15 10-17 8-18 4h-13l-15-4-14-7-12-11-8-10-6-12-4-13-6-35-18-118-5-31-3-5-10-6-15 3-123 30-42 10-16 2h-8l-15-3-12-5-9-6-10-9-7-9-7-14-3-12v-21l5-24 16-66 10-40 13-54-1-7-7-11-13-3-142-22-30-5-16-5-12-6-11-9-9-11-8-16-3-11v-18l4-16 8-16 9-13 42-57 11-15 13-18 12-16 14-19 9-12 1-4-3-14-5-4-25-15-112-68-16-10-11-9-7-7-9-13-7-17v-30h2l2-9 7-13 8-10 9-8 13-9 112-68 20-12 19-12 3-14v-5l-12-17-12-16-14-19-13-18-28-38-13-18-14-19-9-15-6-17-1-4v-20l4-15 9-16 4-5h2l2-4 12-9 13-6 15-4 56-9 100-15 24-4 4-2 5-7 1-9-18-73-14-58-9-37-3-16v-19l4-16 6-12 9-11 12-10 15-7 16-3h14l20 3 163 40 9 1 11-7 3-3 26-168 4-21 6-16 8-12 5-6 10-8 15-8 14-3h13l17 3 19 9 13 9 19 14 18 13 20 15 18 13 17 13 14 10 19 14 12 9h8l9-2 5-5 7-12 12-20 51-84 12-20 10-16 11-14 9-8 11-7 10-4h2zm16 132-12 20-17 28-12 20-11 18-17 28-7 11-8 10-11 9-12 7-15 5-33 7-22 3-19-3-16-6-11-7-18-13-16-12-19-14-18-13-12-9-19-14-13-9-2 2-9 57-10 65-5 27-5 13-7 12-9 11-10 8-12 8-20 13-16 8-14 4-8 1h-14l-17-3-122-30-12-2 2 12 23 93 9 38 1 7v20l-4 16-10 19-16 24-10 13-11 10-10 6-13 5-25 5-104 16-25 4v3l8 10 26 36 28 38 13 18 12 17 7 14 4 14 1 6v16l-5 28-6 25-5 12-6 10-8 10-10 8-16 10-23 14-56 34-26 16-6 4 5 5 23 14 21 13 25 15 28 17 21 13 9 7 6 5 8 10 6 10 6 17 7 35 1 7v21l-4 16-4 9-7 12-8 11-14 19-13 18-11 15-12 16-13 18-9 12-4 7 36 6 96 15 23 5 12 5 12 8 8 7 11 14 14 21 10 17 5 13 2 10v21l-6 28-14 57-15 60v4l18-4 73-18 50-12 7-1h22l14 3 17 8 27 18 14 11 10 11 8 14 5 15 6 36 17 111h4l18-14 17-12 38-28 14-10 19-14 14-9 17-8 17-3h15l28 5 25 6 12 5 12 8 9 8 11 15 21 35 16 26 12 20 14 23 8 13 2 3h2l14-23 13-21 15-25 17-28 12-20 12-17 7-7 13-9 11-5 18-5 25-5 21-2 17 2 16 6 15 9 95 70 14 10 5 2 3-15 19-121 3-14 4-12 8-14 12-13 15-11 12-8 14-9 14-7 10-3 7-1h22l20 4 48 12 78 19h2l-2-10-12-50-19-78-2-11v-22l4-16 9-17 14-21 10-14 4-5 11-9 14-8 17-5 57-9 84-13 4-1-2-4-10-14-13-18-28-38-13-18-14-19-9-14-7-15-3-14v-18l5-27 5-23 5-13 8-13 9-10 13-10 84-51 26-16 10-6 2-3-19-12-28-17-20-12-56-34-11-9-8-8-9-14-5-12-5-19-5-27-1-16 3-18 5-13 7-12 10-14 15-20 13-18 9-12 11-15 14-19 10-14 3-6-65-10-76-12-16-4-16-8-10-8-8-8-13-18-11-17-8-14-5-15-1-5v-22l5-24 30-123v-2l-8 1-132 32-13 2h-13l-13-2-16-6-18-11-20-14-13-11-9-12-8-16-5-23-18-118-2-14h-4l-11 8-18 13-12 9-18 13-38 28-17 12-14 8-16 5-11 2h-10l-20-3-29-6-15-5-14-8-9-8h-2l-2-4-10-13-16-27-10-16-17-28-24-40-5-8z" />
                    </svg>
                    <div className="flex relative items-center gap-2">
                        <span className="h-3 w-[59%] bg-sept-green absolute bottom-0"></span>
                        <p className="text-2xl right-[1%] -bottom-1 sm:text-4xl italic font-bold text-sept-green absolute sm:-bottom-4 sm:right-[24%] z-10">JAVA JAZZ.</p>
                    </div>
                    <div className='sm:px-36 flex flex-wrap justify-center lg:w-[1180px] z-10'>
                        <div className='lg:w-1/3 flex'>
                            <Image src="/images/foto4.jpeg" alt='foto1' width={500} height={800} className='z-10' />
                        </div>
                        <div className='relative flex items-center place-content-center lg:w-2/3 h-[350px] bg-sept-gray'>
                            <div className='flex text-center px-5 pb-11'>
                                <p className=''>The Java Jazz Festival is one of the largest and most renowned jazz festivals in the world, held annually in Jakarta, Indonesia. The festival showcases a diverse lineup of jazz artists with contemporary styles like R&B, soul, and funk. Known for its vibrant atmosphere and eclectic performances, the Java Jazz Festival offers a rich cultural experience that celebrates both the heritage and the evolving nature of jazz music.</p>
                            </div>
                            <div className='absolute bottom-6 right-[30%]'>
                                <Link href="/" className=''>
                                    <button className='relative overflow-hidden text-3xl italic text-sept-green
                                    z-[3] bg-transparent transition-colors before:absolute before:left-0 before:top-0 before:-z-10
                                    before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-sept-purple
                                    before:transition-transform before:duration-300 before:content-[""] hover:text-sept-white before:hover:scale-x-100'>
                                        more info.
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex relative items-center gap-2 mt-16 z-10'>
                        <p className='italic text-2xl sm:text-4xl font-bold text-sept-white absolute right-[11%]'>SYNCHRONIZE.</p>
                        <span className='bg-sept-white w-[10%] h-3 absolute right-0'></span>
                    </div>
                    <div className='flex relative items-center gap-2 mt-16'>
                        <p className='italic text-2xl sm:text-4xl font-bold text-sept-white absolute left-[11%]'>HAMMERSONIC.</p>
                        <span className='bg-sept-white w-[10%] h-3 absolute'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}