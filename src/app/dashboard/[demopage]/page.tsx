const page = async ({
    params,
  }: {
    params: Promise<{ demopage: string }>
  })=>{
    const {demopage} = await params;
    //console.log(params);
    return (
        <div className=" w-full h-full flex justify-center items-center">
        <div className="text-black text-center text-3xl">{demopage} under construction</div>
        </div>
    )
}
export default page;