import { Keypad } from "./Keypad"
import { Screen } from "./Screen"
import { useState } from "react"
export function Parent(){
    let [currentNums,setcurrentNums] = useState('')
    function handleClick(data){
        setcurrentNums(prevalue=>prevalue+data)
        console.log(currentNums)
    }
    function cancelAC(){
        setcurrentNums('')
    }
    function toggleNegative(){
        setcurrentNums(prevalue=>prevalue * -1)
    }
    function handleSubmit(){
        setcurrentNums(eval(currentNums.toString()))
    }
    return (
        <div className="w-96 mx-auto">
        <Screen nums={currentNums}/>
        <Keypad clickFunc = {handleClick} clickEquals = {handleSubmit} cancelAC = {cancelAC} negation = {toggleNegative}/>
    </div>
    )
}