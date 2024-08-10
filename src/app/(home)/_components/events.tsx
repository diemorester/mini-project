import Image from 'next/image'
import Link from 'next/link'

export default function Events() {
    return (
        <div className="w-full">
            <div className="max-w-[1400px] mx-auto">
                <div className="bg-sept-black">
                    <h1 className="h-[250px] text-sept-white text-2xl sm:text-6xl px-8 place-content-center">[ OUR UPCOMING EVENTS. ]</h1>
                    <div className="flex relative items-center gap-2">
                        <span className="h-3 w-[59%] bg-sept-green absolute bottom-0"></span>
                        <p className="text-2xl right-[1%] -bottom-1 sm:text-4xl italic font-bold text-sept-green absolute sm:-bottom-4 sm:right-[24%] z-10">JAVA JAZZ.</p>
                    </div>
                    <div className='sm:px-36 flex flex-wrap justify-center lg:w-[1180px]'>
                        <div className='lg:w-1/3 flex'>
                            <Image src="/images/foto4.jpeg" alt='foto1' width={500} height={800} className='' />
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
                    <div className='flex relative items-center gap-2 mt-16'>
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