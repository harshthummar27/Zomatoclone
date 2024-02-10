function InverstorRelationHeader() {
    return (
        <div className=" bg-[#e23744]">
            <div className="w-[1100px] mx-auto text-white" >
                {/* navbar  */}
                <nav className="flex justify-between py-5">
                    <div className="flex gap-2 items-center text-xl">
                        <img src="https://b.zmtcdn.com/data/o2_assets/d1c6eed080cb5705f0a6112566312bc21684137946.png" alt="" width={100} height={21} />
                        <p> Investor Relations</p>
                    </div>
                    <div>
                        <ul className="flex text-xl gap-8">
                            <li>Home</li>
                            <li>Financials</li>
                            <li>Announcements</li>
                            <li>BLog</li>
                            <li>Governance</li>
                            <li>ESG</li>
                            <li>Resources</li>
                        </ul>
                    </div>
                </nav>

                {/* hero-section  */}
                <div className=" py-10 gap-5 flex  items-center ">
                    {/* left hero-section  */}
                    <div className=" flex flex-col justify-center gap-12">
                        <div className="flex flex-col gap-5 items-start">
                            <p className=" text-3xl">Better food for more people</p>
                            <div className="flex gap-7 justify-center items-center">
                                <img src="https://b.zmtcdn.com/data/o2_assets/d1c6eed080cb5705f0a6112566312bc21684137946.png" alt="" width={104} height={22} />
                                <img src="https://b.zmtcdn.com/data/o2_assets/6dbfe3a5279476dc181ab6ffbfe201401684148330.png" alt="" width={129} height={36} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 items-start">
                            <p className=" text-3xl">Instant commerce indistinguishable from magic</p>
                            <div>
                                <img src="https://b.zmtcdn.com/data/o2_assets/14fe1799dae80af17dd1ea6de5be88f81682596775.png" alt="" width={84} height={22} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 items-start">
                            <p className=" text-3xl">Make India malnutrition free</p>
                            <div>
                                <img src="https://b.zmtcdn.com/data/o2_assets/b4af5da818e7d573914f1efb5deb43781684148225.png" alt="" width={159} height={36} />
                            </div>
                        </div>
                    </div>
                    {/* right hero-section  */}
                    <div className=" bg-white text-black px-7 py-10 rounded-2xl w-[450px]">
                        <div className="flex justify-between items-center my-4"><p className=" text-3xl font-bold">Q2FY24 results</p> <p className=" text-red-500 text-base font-semibold">see all</p></div>
                        <div className="flex flex-col gap-4 font-semibold">

                            <div className="flex justify-between pr-3 rounded-xl border">
                                <div className="p-5 rounded-xl bg-red-100">
                                    <img src="https://b.zmtcdn.com/data/o2_assets/09df26bd254fb468ed9c462b32a3c8e11682663138.png" alt="" width={40} height={40}/>
                                </div>
                                <div className="flex items-center gap-5">
                                    <p className=" text-xl">Shareholders' Letter</p>
                                    <img src="https://b.zmtcdn.com/data/o2_assets/794a10657fcd3ec73da02be37910f5111682663496.png" alt="" width={24} height={40} />
                                </div>
                            </div>

                            <div className="flex justify-between pr-3 rounded-xl border">
                                <div  className="p-4 rounded-xl bg-red-100">
                                    <img src="https://b.zmtcdn.com/data/o2_assets/c105990076f924c4bb9fe31abdcc577c1682663179.png" alt="" width={50} />
                                </div>
                                <div className="flex items-center gap-5">
                                    <p  className=" text-xl">Earnings Call Replay</p>
                                    <img src="https://b.zmtcdn.com/data/o2_assets/794a10657fcd3ec73da02be37910f5111682663496.png" alt="" width={24} />
                                </div>
                            </div>

                            <div className="flex justify-between pr-3 rounded-xl border">
                                <div  className="p-4 rounded-xl bg-red-100">
                                    <img src="https://b.zmtcdn.com/data/o2_assets/baae7f06737db60f94296c2cbf86be931682663208.png" alt="" width={50} />
                                </div>
                                <div className="flex items-center gap-5">
                                    <p className=" text-xl">Earnings Call Transcript</p>
                                    <img src="https://b.zmtcdn.com/data/o2_assets/794a10657fcd3ec73da02be37910f5111682663496.png" alt="" width={24} />
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default InverstorRelationHeader;