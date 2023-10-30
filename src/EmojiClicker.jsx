import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuidv4(), emoji: "🙃" }]);

    const addEmoji = () => {
        const newEmoji = { id: uuidv4(), emoji: "😃" };
        setEmojis((prev)=>([...prev,newEmoji]));
    };

    return (
        <div>
            
                {emojis.map(emojiData => (
                    <span key={emojiData.id}>{emojiData.emoji}</span>
                ))}
            
            <button onClick={addEmoji}>Add new Emoji</button>
        </div>
    );
}

export default EmojiClicker;
