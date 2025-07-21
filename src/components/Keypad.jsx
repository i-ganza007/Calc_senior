export function Keypad({clickFunc,clickEquals,cancelAC,negation}){
const arr = ['AC','+/-','%','/',7,8,9,'x',4,5,6,'-',1,2,3,'+',0,'.','='].map((x, idx) => (
  <div key={idx} className={`h-24 border ${x==0 ? 'col-span-2' : 'w-24'}`} onClick={x == 'AC' ? ()=>{cancelAC()} 
   : x !== '=' &&  x!=='AC' ? () =>   clickFunc(x) : 
     () => clickEquals()}>
    <h2 className={`h-full w-full font-bold text-3xl ${['/','x','-','+','='].includes(x) ? 'bg-orange-300' : 'bg-zinc-400'} flex items-center justify-center`}>
      {x}
    </h2>
  </div>
));
    return (
        <>
            <div className="grid grid-cols-4 mx-auto">
                
                    {arr}
            </div>
        </>
    )
}