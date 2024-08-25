"use client"
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineDiscount } from "react-icons/md";
import Image from "next/image";

export default function Profile() {
    return (
        <div className="bg-sept-black overflow-hidden w-screen">
            <div className="flex max-sm:flex-col justify-center h-screen items-center gap-5 sm:gap-20">
                <div>
                    <div className="avatar">
                        <div className="w-52 rounded">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col text-xl gap-2">
                    <div className="flex items-center gap-2">
                        <FaUser />
                        <h2>Username</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdOutlineEmail />
                        <h2>Email</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <CiDiscount1 />
                        <h2>Referral Code</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdOutlineDiscount />
                        <h2>Points</h2>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className="h-[250px] text-sept-white text-2xl sm:text-6xl px-8 place-content-center">
                    [ &nbsp; EVENT HISTORY. &emsp; &emsp; ]
                </h1>
                <div className="flex flex-wrap gap-8 justify-center mb-5">
                    <div className="flex flex-row bg-sept-white w-[45%] ">
                        <div className="my-auto">
                            <Image
                                className="shadow-lg shadow-black/60 w-32 h-auto sm:w-[170px] sm:h-auto"
                                src="/images/festival2.jpg"
                                alt="history1"
                                width={170}
                                height={100}
                            />
                        </div>
                        <div className="flex flex-col justify-between w-full">
                            <div className="text-start p-3">
                                <h1 className="sm:text-3xl font-extrabold text-sept-black italic">Java Jazz 2024</h1>
                                <p className="sm:text-2xl font-bold text-sept-black">Bandung</p>
                            </div>
                            <div className="text-end">
                                <button onClick={() => {
                                    const dialog = document.getElementById('my_modal_1') as HTMLDialogElement;
                                    if (dialog) {
                                        dialog.showModal();
                                    }
                                }} className="bg-sept-purple hover:bg-sept-green text-end text-2xl text-sept-white p-3 m-3">Review</button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                        <div className="rating">
                                            <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}