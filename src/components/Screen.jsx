export function Screen({nums}){
    return (
        <>
            <div>
                <input type="text" name="screen" id="screen" className="bg-black h-24 w-full text-white text-3xl px-7" value={nums}/>
            </div>
        </>
    )
}