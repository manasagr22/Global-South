import React, { useEffect, useRef, useState } from 'react'
import InputBox from './InputBox';
import '../styles/MainFile.css'

export default function MainFile(props) {
    const [finalText, setFinalText] = useState(null);
    const [imgList, setImgList] = useState(null);
    const summary = useRef(null);

    useEffect(() => {
        if (finalText) {
            const parts = finalText.split(/(["'])/);
            console.log(parts);

            var flag = false;
            const renderedText = parts.map((part, index) => {
                if (part === '"' || part === "'") {
                    flag = !flag;
                    return null;
                } else if (flag) {
                    return <span style={{fontWeight: 600, backgroundColor: "yellow"}} key={index}>{part}</span>;
                } else {
                    return part;
                }
            });

            summary.current = renderedText;
        }
    }, [finalText])

    return (
        <div className='w-full h-full bg-gray-100 flex flex-col relative' style={{ height: window.innerHeight - 60.2, top: "60.2px" }}>
            <div className="bg-white w-full relative flex" style={{ height: window.innerHeight - (4 * 16) }}>
                <div className='w-1/3 h-full bg-gray-50' style={{ borderRadius: "1rem", overflowY: "scroll" }}>
                    {finalText && (
                        <div className='bg-white p-8 mt-8' style={{ borderRadius: "1rem", fontSize: "30px" }}>
                            {summary.current}
                        </div>
                    )}
                </div>
                {imgList && <div className='w-2/3 h-full relative justify-center items-center flex flex-col'>
                    <div className='flex w-full justify-between imageContainer'>
                        {imgList.length >= 1 && <img src={imgList[0]} alt="Image 1" className='mx-4' />}
                        {imgList.length >= 2 && <img src={imgList[1]} alt="Image 2" />}
                    </div>
                    <div className='flex w-full justify-between imageContainer'>
                        {imgList.length >= 3 && <img src={imgList[2]} alt="Image 3" className='mx-4' />}
                        {imgList.length >= 4 && <img src={imgList[3]} alt="Image 4" />}
                    </div>
                </div>}
            </div>
            <div className="h-16 flex relative justify-center items-center">
                <InputBox handleAlert={props.handleAlert} setLoad={props.setLoad} setFinalText={setFinalText} setBackground={props.setBackground} setImgList={setImgList} />
            </div>
        </div>
    )
}
