import React, { useEffect, useState } from 'react'
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import SendIcon from '@mui/icons-material/Send';
import EmojiPicker from 'emoji-picker-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function InputBox(props) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [listen, setListen] = useState(false);

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const [text, setText] = useState(null)

    // if (!browserSupportsSpeechRecognition) {
    //     return <span>Browser doesn't support speech recognition.</span>;
    // }

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    useEffect(() => {
        const handleSpeechRecognition = () => {
            try {
                if (listen) {
                    SpeechRecognition.startListening({ continuous: true });
                } else {
                    SpeechRecognition.stopListening();
                    sendMessage();
                }
            } catch (error) {
                props.handleAlert("danger", 'Error in Speech Recognition');
            }
        };

        handleSpeechRecognition();
    }, [listen]);

    useEffect(() => {
        setText(transcript)
    }, [transcript])

    async function sendMessage() {

        if (text) {
            try {
                props.setLoad(true);
                props.setBackground("brightness(0.01)");
                const url = "http://localhost:5000/"
                const result = await fetch(url + "generate_text", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        text: text
                    })
                }).then(res => res.json());

                console.log(result);
                props.setFinalText(result.result);

                const result1 = await fetch(url + "generate_image", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        text: result.result
                    })
                }).then(res => res.json());

                console.log(result1.image_urls)
                const res = result1.image_urls;
                props.setImgList(res);

                props.setLoad(false);
                props.setBackground("");

                setText(null);
                document.getElementById("searchText").value = null;
                resetTranscript();
            }
            catch {
                props.handleAlert("danger", "Unable to complete request!")
            }
        }
    }

    return (
        <div className="w-full flex justify-center items-center">
            <div className="relative flex flex-row items-center w-5/6 rounded-full border border-gray-300" style={{ backgroundColor: 'white' }}>
                <input
                    id='searchText'
                    className="w-full py-2 px-4 pl-10 text-black bg-white placeholder-gray-500 rounded-full focus:outline-none"
                    type="text"
                    placeholder="Type here..."
                    value={text}
                    style={{ backgroundColor: 'white' }}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' ?
                        sendMessage() : undefined}
                // onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="absolute left-2" onClick={() => {
                    setListen(!listen)
                }}>
                    <MicNoneOutlinedIcon style={{ color: listen ? "blue" : "red", fontSize: 28 }} />
                    {/* <Feather name="mic" size={24} color="red" /> */}
                </button>
                <div className="flex flex-row items-center justify-evenly w-1/6">
                    <button>
                        <AttachmentOutlinedIcon style={{ color: "gray", fontSize: 28 }} />
                        {/* <Entypo name="attachment" size={24} color="gray" /> */}
                    </button>
                    <button onClick={toggleModal}>

                        <SentimentSatisfiedAltOutlinedIcon style={{ color: isModalVisible ? "blue" : "gray", fontSize: 28 }} />
                        {/* <Fontisto name="smiley" size={24} color="gray" /> */}
                    </button>
                    {isModalVisible ? (
                        <div className="absolute right-0 bottom-10 rounded-lg shadow-lg">
                            <EmojiPicker />
                        </div>
                    ) : undefined}
                    {/* {isModalVisible && (
                        <div className="absolute top-full left-0 bg-gray-200 p-4 rounded-lg shadow-lg">
                            {smileys.map((smiley, index) => (
                                <p key={index} className="text-2xl">{smiley}</p>
                            ))}
                        </div>
                    )} */}
                    <button onClick={sendMessage}>
                        <SendIcon style={{ color: "blue", fontSize: 28 }} />
                        {/* <MaterialIcons name="send" size={33} color="blue" /> */}
                    </button>
                </div>
            </div>
        </div>
    )
}
