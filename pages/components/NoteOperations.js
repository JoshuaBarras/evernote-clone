import styles from '../../styles/Evernote.module.scss'
import { useState } from 'react'
export default function NoteOperations() {
    const [isInputVisible, setInputVisible] = useState(false);
    const inputToggle = () => {
        setInputVisible(!isInputVisible)
    }
    return (
        <>
        {/* // Create Button For Left Div In index.js */}
            <div className={styles.btnContainer}>
                <button
                    onClick={inputToggle}
                    className={styles.button}>
                        Add a New Note
                    </button>
            </div>
            {/* Make TextBox Appear Only When Button Clicked */}
            {isInputVisible ? (
                <div className={styles.inputContainer}>
                {/* Add Text-Box With Placeholder */}
                    <input
                      className={styles.input}
                      placeholder='Enter the Title..' />
                </div>
            ) : (
                 <></>
            )}
        </>
    )
}
